import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafeteriasPage } from './cafeterias.page';

const routes: Routes = [
  {
    path: '',
    component: CafeteriasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafeteriasPageRoutingModule {}
