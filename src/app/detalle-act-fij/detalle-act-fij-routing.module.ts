import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleActFijPage } from './detalle-act-fij.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleActFijPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleActFijPageRoutingModule {}
