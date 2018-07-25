
import {deserialize} from 'json-typescript-mapper';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
 import { Response,Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map'; 
// import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  constructor(private http: Http) { 
    
  }
 items=[];
 sitems=[];
 pname="";
 pnp="";

 pushItem=function(){
   if(this.pname!="")
   {
     
     this.items.push(this.pname);
     this.pnp=this.pnp+this.pname+"   ";
    this.http.post('http://localhost:1337/'+this.pid+"~"+this.pname+"~"+this.pprice+"~"+this.pgst ,this.x).subscribe();
   this.pname="";
   this.pid="";
   this.pprice="";
   
   this.pgst="";
   }
 }
 removeItem=function(index)
 {
   this.items.splice(index,1);
 }
}
