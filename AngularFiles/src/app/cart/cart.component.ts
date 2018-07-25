import { map } from 'rxjs/operators';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // constructor() { }
  rand=12;
  constructor(private http: Http) { 
    
  }
  ngOnInit() {
   var a=Math.floor((Math.random() * 10000) + 1);
   this.rand=a;
   console.log("df");
  }
  mid="";
  mqua="";
  title="jkj";
  flag='y';
  pushItem1=function(){
    this.title="ws";
  if(this.mid!="")
   {
     //console.log(this.mid+""+this.mqua);
     this.title=this.mid+" "+this.mqua;
    //  this.mt.push(this.mid);
    //  this.pnp=this.pnp+this.pname+"   ";
    
    this.http.post('http://localhost:1337/'+this.mid+"~"+this.mqua+"~"+this.rand +"~"+this.flag,this.x).subscribe();
   this.mid="";
   this.mqa="";
   
   }
  }
  pushItem2=function(){
    this.flag='n';
    this.name="temp";
    this.http.post('http://localhost:1337/'+this.mname+"~"+this.mqua+"~"+this.rand +"~"+this.flag,this.x).subscribe();
       this.http.get('http://localhost:1337/')
       .pipe(map((res: Response) => res.json()))
      .subscribe(people => this.people = people);
    this.title=this.people[0].b_id;
    this.rand=Math.floor((Math.random()*10000)+1);
  }
  

}
