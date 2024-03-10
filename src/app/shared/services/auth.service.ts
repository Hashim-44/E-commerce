import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private HttpClient:HttpClient , private _Router:Router) { }


  userData:any;
  logOut():void{
    localStorage.removeItem('eToken')
    localStorage.removeItem('eName')
    this._Router.navigate(['/login'])
  }
decodeUserData(){
if(  localStorage.getItem('eToken') != null
){
  let encodeToken:any =   localStorage.getItem('eToken')
let decodeToken = jwtDecode(encodeToken)
this.userData = decodeToken;
console.log(decodeToken);

}
}

setReg(userData:object):Observable<any>{
   return this.HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , userData )
  } 
  
  setLog(userData:object):Observable<any>{
    return this.HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , userData )
   } 
}