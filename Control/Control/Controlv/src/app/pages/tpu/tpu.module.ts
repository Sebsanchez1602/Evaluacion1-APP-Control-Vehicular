import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TPUPageRoutingModule } from './tpu-routing.module';

import { TPUPage } from './tpu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TPUPageRoutingModule
  ],
  declarations: [TPUPage]
})
export class TPUPageModule {}
