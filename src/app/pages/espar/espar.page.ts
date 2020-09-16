import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular'; 

@Component({
  selector: 'app-espar',
  templateUrl: './espar.page.html',
  styleUrls: ['./espar.page.scss'],
})
export class EsparPage implements OnInit {

  titulo: string;

  constructor(public esparCtrl: AlertController) { }

  ngOnInit() {
  }

}
