import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  httpOptions:any;

  //LOGIN---SIR
  username: String = '';
 usertype: String = '';
 token:any='';
 email: any = '';
 status: boolean = false;
 //---------------------------------------
  constructor(private http:HttpClient) {
    let username = sessionStorage.getItem("username");
    let usertype = sessionStorage.getItem("usertype");
    let token = sessionStorage.getItem("token");
    let email = sessionStorage.getItem("email");
    if (username && usertype) {
      this.status = true;
      this.username = username;
      this.usertype = usertype;
      this.token =token;
      this.email = email;
   }

   }

  addPatient(temp:any):Observable<any>
  {
    return this.http.post("http://localhost:3000/patients",temp)
  }

  getPatient():Observable<any>
  {
    return this.http.get("http://localhost:3000/patients")
  }

  getPatientLst(id: number):Observable<any>
  {
    return this.http.get("http://localhost:3000/patients/"+id)
  }

  getAppointId(id:number):Observable<any>
  {
    return this.http.get("http://localhost:3000/appointments/"+id)
  }
  getAppoint():Observable<any>
  {
    return this.http.get("http://localhost:3000/appointments")
  }

  postAppoint(obj:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  return this.http.post("http://localhost:3000/appointments/",obj,this.httpOptions);
 }

  //DELETION
  getPatDetails(id: number): Observable<any> {
    return this.http.get("http://localhost:3000/patients/"+id)
  }

  deletePatient(id:number):Observable<any>
  {
    return this.http.delete("http://localhost:3000/patients/"+id)
  }

  postPrescription(obj:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  return this.http.post("http://localhost:3000/prescription/",obj,this.httpOptions);
 }

 EditPatient(id:number,data:any):Observable<any>
 {
    return this.http.put(`http://localhost:3000/patients/${id}`,data)
 }

 getPrescripLst(id: number):Observable<any>
  {
    return this.http.get("http://localhost:3000/prescription/"+id)
  }

  getPrescrip():Observable<any>
  {
    return this.http.get("http://localhost:3000/prescription")
  }

  getDiet():Observable<any>
  {
    return this.http.get("http://localhost:3000/diet")
  }

  getDietCollect():Observable<any>
  {
    return this.http.get("http://localhost:3000/diet_collect")
  }

  postDiet(obj:any):Observable<any>{
    this.httpOptions =  new HttpHeaders({
      'Content-Type':  'application/json',
    })
  return this.http.post("http://localhost:3000/diet_collect/",obj,this.httpOptions);
 }


//  getLogin():Observable<any>
//  {
//   return this.http.get(" http://localhost:3000/login")
//  }


 //LOGIN---SIR

 _getlogin(email: any, password: any): Observable<object> {
  this.httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
})
 }
 return this.http.post("http://localhost:3000/login",
  { email: email, password: password },
 this.httpOptions);

}

logout(): void {

this.token="";
// this.username = "";
this.usertype = "";
// sessionStorage.removeItem("username");
sessionStorage.removeItem("usertype");
sessionStorage.removeItem("email");

}



}
