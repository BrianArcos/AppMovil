import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleAtractivoPageRoutingModule } from './detalle-atractivo-routing.module';

import { DetalleAtractivoPage } from './detalle-atractivo.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleAtractivoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleAtractivoPage]
})
export class DetalleAtractivoPageModule {}
