import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleOperadorPageRoutingModule } from './detalle-operador-routing.module';

import { DetalleOperadorPage } from './detalle-operador.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleOperadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleOperadorPage]
})
export class DetalleOperadorPageModule {}
