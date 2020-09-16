import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelevanciaPageRoutingModule } from './relevancia-routing.module';

import { RelevanciaPage } from './relevancia.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelevanciaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RelevanciaPage]
})
export class RelevanciaPageModule {}
