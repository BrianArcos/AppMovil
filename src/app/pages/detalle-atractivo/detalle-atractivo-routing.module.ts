import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleAtractivoPage } from './detalle-atractivo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleAtractivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleAtractivoPageRoutingModule {}
