import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { LoginComponent } from './login.component';
import { LoginService } from '../services/login.service';
import { SessionStorageService } from '../../../../shared/utils/storage/session-storage.service';
import { TokenDto } from '../../../../core/models/dto/token-dto';
import { UserDTO } from '../../../../core/models/dto/user-dto';
import { RolesEnum } from '../../../../core/models/enums/roles.enum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loginServiceSpy: jasmine.SpyObj<LoginService>;
  let sessionStorageServiceSpy: jasmine.SpyObj<SessionStorageService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const loginServiceMock = jasmine.createSpyObj('LoginService', ['login', 'getProfile']);
    const sessionStorageServiceMock = jasmine.createSpyObj('SessionStorageService', ['setItem', 'getItem']);
    const routerMock = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [LoginComponent],
      providers: [
        { provide: LoginService, useValue: loginServiceMock },
        { provide: SessionStorageService, useValue: sessionStorageServiceMock },
        { provide: Router, useValue: routerMock }
      ]
    }).compileComponents();

    loginServiceSpy = TestBed.inject(LoginService) as jasmine.SpyObj<LoginService>;
    sessionStorageServiceSpy = TestBed.inject(SessionStorageService) as jasmine.SpyObj<SessionStorageService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize loginForm', () => {
    expect(component.loginForm).toBeTruthy();
    expect(component.loginForm.controls['email']).toBeTruthy();
    expect(component.loginForm.controls['password']).toBeTruthy();
  });

  it('should call login on onSubmit', () => {
    spyOn(component, 'login');
    component.onSubmit();
    expect(component.login).toHaveBeenCalled();
    expect(component.loginForm.value).toEqual({ email: null, password: null });
  });

  it('You must submit the form when you click onSubmit', () => {
    spyOn(component, 'onSubmit');
    const emailControl = component.loginForm.get('email');
    const passwordControl = component.loginForm.get('password');
    emailControl?.setValue('adri@mail.com')
    passwordControl?.setValue('1234')

    const loginForm: HTMLFormElement = fixture.nativeElement.querySelector('form');
    loginForm.dispatchEvent(new Event('submit'));

    expect(component.onSubmit).toHaveBeenCalled();
  });

  it('should call getProfile on successful login', () => {
    const loginDTO = { email: 'test@example.com', password: 'password' };
    const tokenDto: TokenDto = {
      access_token: 'test_token',
      refreshToken: ''
    };
    component.loginForm.setValue(loginDTO);
    loginServiceSpy.login.and.returnValue(of(tokenDto));
    loginServiceSpy.getProfile.and.returnValue(of({ role: RolesEnum.admin } as UserDTO));

    component.login();
    expect(loginServiceSpy.getProfile).toHaveBeenCalledWith(tokenDto);
  });

  it('should set user and navigate based on role', () => {
    const userDTO: UserDTO = { role: RolesEnum.admin, email: 'admin@example.com', name: 'Admin', avatar: 'admin.jpg' } as UserDTO;
    const tokenDto: TokenDto = {
      access_token: 'test_token',
      refreshToken: ''
    };
    loginServiceSpy.login.and.returnValue(of(tokenDto));
    loginServiceSpy.getProfile.and.returnValue(of(userDTO));
    sessionStorageServiceSpy.getItem.and.returnValue(userDTO);

    component.login();
    expect(sessionStorageServiceSpy.setItem).toHaveBeenCalledWith('data_profile', userDTO);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home/admin-panel']);
  });

  it('should navigate to catalogue for non-admin role', () => {
    const userDTO: UserDTO = { role: RolesEnum.user, email: 'user@example.com', name: 'User', avatar: 'user.jpg' } as UserDTO;
    const tokenDto: TokenDto = {
      access_token: 'test_token',
      refreshToken: ''
    };
    loginServiceSpy.login.and.returnValue(of(tokenDto));
    loginServiceSpy.getProfile.and.returnValue(of(userDTO));
    sessionStorageServiceSpy.getItem.and.returnValue(userDTO);

    component.login();
    expect(sessionStorageServiceSpy.setItem).toHaveBeenCalledWith('data_profile', userDTO);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['home/catalogue']);
  });
});
