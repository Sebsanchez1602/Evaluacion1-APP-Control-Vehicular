import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TPUPage } from './tpu.page';

const routes: Routes = [
  {
    path: '',
    component: TPUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TPUPageRoutingModule {}
