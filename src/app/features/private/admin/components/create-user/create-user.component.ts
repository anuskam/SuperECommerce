import { Component, DoCheck, inject, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../../../environments/environment.development';
import { UserDTO } from '../../../../../core/models/dto/user-dto';
import { ApiConectionService } from '../../../../../core/services/api-conection/api-conection.service';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent implements OnInit, OnChanges, DoCheck {
  @Input() user?: UserDTO;
  private formBuilder = inject(FormBuilder);
  protected readonly baseUrl: string = environment.serviceUrl;
  protected readonly fullUrl: string = `${this.baseUrl}users`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private apiConnectionService = inject(ApiConectionService<UserDTO, any>);
  public createUserForm!: FormGroup;
  public rolesSelect = [
    { label: 'Administrator', value: 'admin' },
    { label: 'Customer', value: 'customer' },
  ];
  public isEdit: boolean = false;

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(): void {
    this.initForm();
  }

  ngDoCheck(): void {
    this.setValues();
  }

  initForm(): void{
    this.createUserForm = this.formBuilder.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required],
      avatar: ['cat.jpg', Validators.required],
    });
    this.isEdit = false;
  }

  onSubmit(): void {
    const createUserFormValue: UserDTO = this.createUserForm.value;
    this.apiConnectionService.add(createUserFormValue).subscribe({
      next: data => {
        console.log(data);
      },
    });
  }

  setValues(): void{
    this.createUserForm.patchValue({
      email: this.user?.email,
      name: this.user?.name,
      password: this.user?.password,
      role: this.user?.role,
      avatar: this.user?.avatar,
    });
    this.isEdit = true;
  }
}
