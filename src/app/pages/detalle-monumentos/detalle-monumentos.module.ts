import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleMonumentosPageRoutingModule } from './detalle-monumentos-routing.module';

import { DetalleMonumentosPage } from './detalle-monumentos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleMonumentosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleMonumentosPage]
})
export class DetalleMonumentosPageModule {}
