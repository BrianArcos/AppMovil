import { Component, OnInit } from '@angular/core';
import { Respotros } from '../../interfaces/interfaces';
import { EstablecimientosService } from '../../services/establecimientos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalleotros',
  templateUrl: './detalleotros.page.html',
  styleUrls: ['./detalleotros.page.scss'],
})
export class DetalleotrosPage implements OnInit {

  lista_O: Respotros;
  constructor(private otrosService: EstablecimientosService,
              private state: ActivatedRoute) { }

  ngOnInit() {
    this.lista_O = JSON.parse(this.state.snapshot.params.datos)
  }

}
