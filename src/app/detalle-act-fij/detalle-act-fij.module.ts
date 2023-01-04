import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleActFijPageRoutingModule } from './detalle-act-fij-routing.module';

import { DetalleActFijPage } from './detalle-act-fij.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleActFijPageRoutingModule
  ],
  declarations: [DetalleActFijPage]
})
export class DetalleActFijPageModule {}
