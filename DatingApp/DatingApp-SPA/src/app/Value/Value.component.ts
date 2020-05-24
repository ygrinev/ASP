import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Value',
  templateUrl: './Value.component.html',
  styleUrls: ['./Value.component.css']
})
export class ValueComponent implements OnInit {

  url = 'http://localhost:5000/';
  values: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(`${this.url}api/values`).subscribe((resp)=>{
      this.values = resp;
    },error => console.log(error)
    );
  }

}
