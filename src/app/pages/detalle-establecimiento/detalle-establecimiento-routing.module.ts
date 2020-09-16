import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleEstablecimientoPage } from './detalle-establecimiento.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleEstablecimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleEstablecimientoPageRoutingModule {}
