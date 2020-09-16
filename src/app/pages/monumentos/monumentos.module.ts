import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonumentosPageRoutingModule } from './monumentos-routing.module';

import { MonumentosPage } from './monumentos.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonumentosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MonumentosPage]
})
export class MonumentosPageModule {}
