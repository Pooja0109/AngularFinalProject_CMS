import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errors: string[] = [];
  loginLst:any;
  password:string="";
  email: string="";
  hide = true;
  errorString:string="";
  constructor(private PS:PatientService,private ar:ActivatedRoute,private route: Router)
  {
    // this.ar.params.subscribe(
    //   {
    //     next: (params:any)=>{ 
    //      this.id_no =params['id']
    //     },
    //     error: () => this.id_no = 0
    //   }
    // )

    // this.PS.getLogin().subscribe({
    //   next: (data:any)=> {this.loginLst =data
    //   // console.log("this is it ",this.patientLst)
    //   },
    //   error: ()=> this.loginLst = {}
    // });

  }

  login()
  {
    console.log("Helloooo1")
    this.errors = []

    let expr = /^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if (this.password == undefined || this.password.length < 9)
      this.errors.push("Password should be greater than 9 characters")

    if (this.email == undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")

    if (this.errors.length == 0) 
    {
      

      //My Approach
    // for(let x of this.loginLst)
    // {
    //     if(x.password==this.password && x.email==this.email)
    //     {
    //       if(x.type=="doctor")
    //       {
    //         this.route.navigate(['doctor/DHome']);
    //         break;
    //       }
    //       else
    //       {
    //         this.route.navigate(['reseptionist/patientView']);
    //         break;
    //       }
    //     }
    //     else{
    //           this.errorString="Invalid Credentials"
    //     }

    //   }
      //----------
       this.PS._getlogin(this.email,this.password).subscribe(
        { next:   (response:any)=>{
        
        sessionStorage.setItem("token",response.accessToken);
        sessionStorage.setItem("email",response.user.email);
        // this.PS.username=response.user.username;
        console.log("Token 2:",sessionStorage.getItem("token"))
        this.PS.usertype=response.user.type;
        this.PS.token=response.accessToken;
        if(response.user.type=="doctor")
        { 
          this.route.navigate(['doctor/DHome']);
        }
          
        else
        {
          this.route.navigate(['reseptionist/patientView']);
        }
        },
      error:()=>{
        this.errorString="Invalid Credentials";
}});
    }
  }
}
