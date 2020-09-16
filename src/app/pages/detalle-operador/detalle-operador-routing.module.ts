import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleOperadorPage } from './detalle-operador.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleOperadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleOperadorPageRoutingModule {}
