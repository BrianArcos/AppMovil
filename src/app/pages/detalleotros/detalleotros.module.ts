import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleotrosPageRoutingModule } from './detalleotros-routing.module';

import { DetalleotrosPage } from './detalleotros.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleotrosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleotrosPage]
})
export class DetalleotrosPageModule {}
