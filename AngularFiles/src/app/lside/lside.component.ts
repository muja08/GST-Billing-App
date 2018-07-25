import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
 import { Response,Headers, RequestOptions } from '@angular/http';
// import 'rxjs/add/operator/map'; 
// import { Http, Headers, Response, Request } from '@angular/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-lside',
  templateUrl: './lside.component.html',
  styleUrls: ['./lside.component.css']
})
export class LsideComponent implements OnInit {

    
  httpdata=[{
name:"sabari"
  },{
    name:"parame"
  }]
    title='sxads';
    people;
    
constructor(private http: Http) { 
     
       }
   ngOnInit() {
      this.http.get('http://localhost:1337/')
       .pipe(map(res => res.json()))
      .subscribe(people => this.people = people);
      
  // 

}
}

