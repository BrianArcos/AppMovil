import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alimentacion',
  templateUrl: './alimentacion.page.html',
  styleUrls: ['./alimentacion.page.scss'],
})
export class AlimentacionPage implements OnInit {

  constructor(private alimentacionCtrl: AlertController) { }

  ngOnInit() {
  }

}
