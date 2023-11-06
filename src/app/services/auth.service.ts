import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedin : boolean = false;

  constructor() { }


canActivate(): boolean  {

 let user: any = sessionStorage.getItem("user");

 if(user != ""){
  user = JSON.parse(user);
 
 }

 if(user){
  return true
 }
 return false
  
   
}

}
