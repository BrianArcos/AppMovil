import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostalesPageRoutingModule } from './hostales-routing.module';

import { HostalesPage } from './hostales.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostalesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HostalesPage]
})
export class HostalesPageModule {}
