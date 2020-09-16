import { Component, OnInit } from '@angular/core';
import { RespEstablecimientos } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { element } from 'protractor';

@Component({
  selector: 'app-detalle-establecimiento',
  templateUrl: './detalle-establecimiento.page.html',
  styleUrls: ['./detalle-establecimiento.page.scss'],
})
export class DetalleEstablecimientoPage implements OnInit {

  lista : RespEstablecimientos;
  oculto= 120;
  
  constructor( private estableService: EstablecimientosService, 
               private state: ActivatedRoute,
               private navegador:InAppBrowser,
               private call: CallNumber) { }
 
  ngOnInit() {
    this.lista = JSON.parse(this.state.snapshot.params.datos)
  }

  openWeb(lista:string, target:string){
    const link = lista
    this.navegador.create(link, target)
    // this.navegador.create('https://www.google.com','_self')

  }

  openFb(lista:string, target:string){
    const id = lista
    this.navegador.create(id, target)

  }


  calln(lista:string){
    this.call.callNumber (lista, true)
  .then(res => console.log('Launched dialer!', res))
  .catch(err => console.log('Error launching dialer', err));
  }

  
    
  
}
  