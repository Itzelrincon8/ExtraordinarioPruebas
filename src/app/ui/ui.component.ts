import { Component, OnInit } from '@angular/core';
import {formula} from '../tests/test'

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formula:formula = new formula();
  m1=0;
  m2=0;
  r=0;
  f=0;
  calcular(){
    let r:number;
    let form:formula=new formula();
    r=form.calcular(this.m1,this.m2,this.r);
    this.f=r;
  }
}
