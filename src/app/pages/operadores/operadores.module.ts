import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OperadoresPageRoutingModule } from './operadores-routing.module';

import { OperadoresPage } from './operadores.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OperadoresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OperadoresPage]
})
export class OperadoresPageModule {}
