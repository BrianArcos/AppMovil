import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HostalesPage } from './hostales.page';

const routes: Routes = [
  {
    path: '',
    component: HostalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HostalesPageRoutingModule {}
