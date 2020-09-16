import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RelevanciaPage } from './relevancia.page';

const routes: Routes = [
  {
    path: '',
    component: RelevanciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RelevanciaPageRoutingModule {}
