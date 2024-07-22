import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { ApiConectionService } from '../../../core/services/api-conection/api-conection.service';
import { UserDTO } from '../../../core/models/dto/user-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss',
})
export class SigninComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  protected readonly baseUrl: string = environment.serviceUrl;
  protected readonly fullUrl: string = `${this.baseUrl}users`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private apiConnectionService = inject(ApiConectionService<UserDTO, any>);
  public signinForm!: FormGroup;

  public rolesSelect = [
    { label: 'Administrator', value: 'admin' },
    { label: 'Customer', value: 'customer' },
  ];

  ngOnInit(): void {
    this.signinForm = this.formBuilder.group({
      email: [null, Validators.required],
      name: [null, Validators.required],
      password: [null, Validators.required],
      role: ['', Validators.required],
      avatar: ['cat.jpg', Validators.required],
    });
  }

  onSubmit(): void {
    const signinFormValue: UserDTO = this.signinForm.value;
    console.log(signinFormValue);
    this.apiConnectionService.add(signinFormValue).subscribe({
      next: data => {
        console.log(data);
        alert(`The user ${data.name} has been created 😊`);
      },
    });
    this.router.navigate(['login']);
  }
}
