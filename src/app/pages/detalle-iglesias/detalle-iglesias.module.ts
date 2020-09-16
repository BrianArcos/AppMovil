import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleIglesiasPageRoutingModule } from './detalle-iglesias-routing.module';

import { DetalleIglesiasPage } from './detalle-iglesias.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleIglesiasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleIglesiasPage]
})
export class DetalleIglesiasPageModule {}
