import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { EsparPage } from './espar.page';
import { Routes,RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module';

const routes: Routes =[
  {
    path:'',
    component: EsparPage
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
  declarations: [EsparPage]
})
export class EsparPageModule {}
