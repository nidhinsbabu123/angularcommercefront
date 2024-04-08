import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  // form group
  // form array
  // form controll name

  // form group name is registerForm
  registerForm = this.fb.group({

    // this 3 is form array - which is inside the form group - registerForm
    username : ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    email : ['', [Validators.required, Validators.email]],
    password : ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })

  // To make the register form reactive

  constructor(private fb : FormBuilder, private api : ApiService, private route : Router){ }

  register(){

    if(this.registerForm.valid){

      const username = this.registerForm.value.username

      const email = this.registerForm.value.email

      const password = this.registerForm.value.password

      // alert(`Username : ${username},    Email : ${email},    Password : ${password}`)

      console.log(`Username : ${username}, Email : ${email}, Password : ${password}`);

      const reqBody = {username, email, password}

      this.api.registerApi(reqBody).subscribe({
        next : (res : any) => {
          console.log(res);

          alert('Registered Successfully')

          this.route.navigateByUrl('user/login')
          
        },
        error : (err : any) => {
          console.log(err);
          
        }
      })
      

    }else{
      alert('Invalid Form Data')
    }

  }

}
