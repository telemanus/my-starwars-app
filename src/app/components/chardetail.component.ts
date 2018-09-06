import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-chardetail',
  templateUrl: './chardetail.component.html',
  styleUrls: ['./chardetail.component.css']
})
export class ChardetailComponent implements OnInit {

  private result = {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

    const categoryName = "people";

      this.httpClient.get(`https://swapi.co/api/${categoryName}`)
      .subscribe((data:any)=>{
        console.log("data>>>", data);
        this.result = data;
        console.log("result>>>", this.result);
    })
  }
  getDetail(charId: number) {

    this.httpClient.get(`https://swapi.co/api/people/2`)
    .subscribe((data:any)=>{
      console.log("data>>>", data);
      this.result = data;
      console.log("result>>>", this.result);
  })

}
}