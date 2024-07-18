import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiConectionService } from '../../../../core/services/api-conection/api-conection.service';
import { environment } from '../../../../../environments/environment';
import { UserDTO } from '../../../../core/models/interfaces/user-dto';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss',
})
export class CreateUserComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  protected readonly baseUrl: string = environment.serviceUrl;
  protected readonly fullUrl: string = `${this.baseUrl}users`;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private apiConnectionService = inject(ApiConectionService<UserDTO, any>);
  public createUserForm!: FormGroup;
  public rolesSelect = [
    { label: 'Administrator', value: 'admin' },
    { label: 'User', value: 'user' },
  ];

  ngOnInit(): void {
    this.createUserForm = this.formBuilder.group({
      email: [null, Validators.required],
      name: [null, Validators.required],
      password: [null, Validators.required],
      role: [null, Validators.required],
      avatar: ['cat.jpg', Validators.required],
    });
  }

  onSubmit(): void {
    const createUserFormValue: UserDTO = this.createUserForm.value;
    console.log(createUserFormValue);
    this.apiConnectionService.add(createUserFormValue).subscribe({
      next: data => {
        console.log(data);
      },
    });
  }
}
