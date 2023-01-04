import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActfijPage } from './actfij.page';

const routes: Routes = [
  {
    path: '',
    component: ActfijPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActfijPageRoutingModule {}
