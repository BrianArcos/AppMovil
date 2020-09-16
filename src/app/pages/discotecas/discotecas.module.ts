import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscotecasPageRoutingModule } from './discotecas-routing.module';

import { DiscotecasPage } from './discotecas.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscotecasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DiscotecasPage]
})
export class DiscotecasPageModule {}
