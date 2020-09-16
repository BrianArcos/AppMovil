import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafeteriasPageRoutingModule } from './cafeterias-routing.module';

import { CafeteriasPage } from './cafeterias.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CafeteriasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CafeteriasPage]
})
export class CafeteriasPageModule {}
