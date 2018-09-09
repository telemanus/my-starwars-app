import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute, Params, ActivatedRouteSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-chardetail',
  templateUrl: './chardetail.component.html',
  styleUrls: ['./chardetail.component.css']
})
export class ChardetailComponent implements OnInit {

  private result = {};
  private activatedRoute = {}

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit() {
  
    /*
    this.route.params.pipe(
    filter(params => params.CharId))
    .subscribe(params => {
      console.log("Hi Params!!!!>>>", params); 
   });
   */
   // this.route.params.subscribe( params => console.log('params captured:',params) );


   this.route.params.subscribe( params => {
   this.httpClient.get(`https://swapi.co/api/people/${params.charId}`)
   .subscribe((data:any)=>{
     console.log("data>>>", data);
     this.result = data;
     console.log("result>>>", this.result);
   })

  })
}
  
}
