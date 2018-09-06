import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-char',
  templateUrl: './char.component.html',
  styleUrls: ['./char.component.css']
})
export class CharComponent implements OnInit {
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

}
