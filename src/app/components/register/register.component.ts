import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;
  registerForm:FormGroup;
  htmlSnippet = 'Template <script>alert("0wned")</script> <b>Syntax</b>';
  constructor(private fb:FormBuilder, private registerService: RegisterService) { 
    this.crForm();
  }

  ngOnInit(): void {
  }

  register(): void{
    this.setUser();
    this.registerService.register(this.user).subscribe((data: any) => {
      console.log('Registro Completado');
    }, error => {
      console.log(error);
    })
  }

  crForm(): void{
    this.registerForm = this.fb.group({ 
      username: ['', [Validators.required]],
      age: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  setUser():void{
    this.user = {
      username: this.registerForm.get('username').value,
      age: this.registerForm.get('age').value,
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value
    }
  }
}
