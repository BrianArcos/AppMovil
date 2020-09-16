import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.page.html',
  styleUrls: ['./alojamiento.page.scss'],
})
export class AlojamientoPage implements OnInit {

  titulo: string;

  constructor( public alojamientoCtrl: AlertController) { }

  ngOnInit() {
  }

}
