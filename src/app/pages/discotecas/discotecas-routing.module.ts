import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscotecasPage } from './discotecas.page';

const routes: Routes = [
  {
    path: '',
    component: DiscotecasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscotecasPageRoutingModule {}
