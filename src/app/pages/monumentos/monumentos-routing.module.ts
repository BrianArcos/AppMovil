import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonumentosPage } from './monumentos.page';

const routes: Routes = [
  {
    path: '',
    component: MonumentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonumentosPageRoutingModule {}
