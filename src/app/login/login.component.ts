import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from '../common/model/commomModel';
import { Service } from '../common/service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm:FormGroup = new FormGroup({
    Email: new FormControl('', [Validators.required]),
    Password: new FormControl('', [Validators.required])
  });

  constructor(private Loginservice : Service, private router: Router) { 
  }

  ngOnInit(): void {
    var s = this.Loginservice.getUser().subscribe(resp => {
      console.log(JSON.stringify(resp));
    });
  }

  formToModel(formData:any){
    var modelData:login = ({
      email :formData.Email,
      password : formData.Password
    } );
    return modelData;
  }
  directNavigate(){
    this.router.navigate(["/Home"])
  }

  login(){
    console.clear()
    console.log("Login");
    var modelData:login = this.formToModel(this.LoginForm.value);
    console.log(modelData);
    
    var s = this.Loginservice.login(modelData).subscribe(resp => {
      console.log(JSON.stringify(resp));
      sessionStorage.setItem("User",JSON.stringify(resp));

      this.router.navigate(["/Home"])
    });

  }

}
