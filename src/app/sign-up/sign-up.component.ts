import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm: FormGroup;
  constructor(public fb: FormBuilder, public authService: AuthenticationService) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    },{
      validator: this.checkIfMatchingPasswords("password", "confirmPassword")
    })
   }

  checkIfMatchingPasswords(passwordKey: string, confirmPasswordKey: string){
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];

      if(password.value == confirmPassword.value){
        return;
      } else{
        confirmPassword.setErrors({
          notEqualToPassword: true
        })
      }
    }
  }

  onSubmit(signupform: any){
    let email: string = signupform.value.email;
    let password: string = signupform.value.password;
    let firstName: string = signupform.value.firstName;
    let lastName: string = signupform.value.lastName;

    this.authService.signup(email, password, firstName, lastName).then(() =>
    {
      // this.message="You have been signed up successfully. Please login";
    }).catch((error) =>{
      console.log(error);
    }) 
  }

  ngOnInit(): void {
  }

}
