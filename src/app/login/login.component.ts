import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // form group
  // form array
  // form controll name

  // form group name is loginForm
  loginForm = this.fb.group({

    // this 3 is form array - which is inside the form group - loginForm
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })

  // To make the register form reactive

  constructor(private fb : FormBuilder, private api : ApiService, private route : Router){ }

  login(){

    if(this.loginForm.valid){

      const email = this.loginForm.value.email

      const password = this.loginForm.value.password

      // alert(`Email : ${email},    Password : ${password}`)

      // console.log(`Username : ${email}, Password : ${password}`);

      const reqBody = {email, password}

      this.api.loginApi(reqBody).subscribe({
        next : (res : any) => {

          console.log(res);

          this.route.navigateByUrl('')
          
        },
        
        error : (err : any) => {
          console.log(err);
          alert('Invalid Login')
          
        }
      })
      

    }else{
      alert('Invalid Form Data')
    }

  }

}
