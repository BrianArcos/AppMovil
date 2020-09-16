import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { AlojamientoPage } from './alojamiento.page';
import { Routes,RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes =[
  {
    path: '',
    component: AlojamientoPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [AlojamientoPage]
})
export class AlojamientoPageModule {}
