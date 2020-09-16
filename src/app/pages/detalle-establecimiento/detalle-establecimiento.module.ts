import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleEstablecimientoPageRoutingModule } from './detalle-establecimiento-routing.module';

import { DetalleEstablecimientoPage } from './detalle-establecimiento.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleEstablecimientoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleEstablecimientoPage]
})
export class DetalleEstablecimientoPageModule {}
