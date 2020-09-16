import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleMonumentosPage } from './detalle-monumentos.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleMonumentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleMonumentosPageRoutingModule {}
