import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleIglesiasPage } from './detalle-iglesias.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleIglesiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleIglesiasPageRoutingModule {}
