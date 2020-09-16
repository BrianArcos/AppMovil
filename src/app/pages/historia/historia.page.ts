import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.page.html',
  styleUrls: ['./historia.page.scss'],
})
export class HistoriaPage implements OnInit {

  slideOpts ={
    slidesPerView: 1.1,
    freeMode: true
  }; 
  
  constructor() { }

  ngOnInit() {
  }

}
