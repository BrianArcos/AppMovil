import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleotrosPage } from './detalleotros.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleotrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleotrosPageRoutingModule {}
