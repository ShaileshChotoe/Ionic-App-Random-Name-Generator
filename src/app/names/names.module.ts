import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NamesPageRoutingModule } from './names-routing.module';

import { NamesPage } from './names.page';

import { ComponentsModule } from '../home/example/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NamesPageRoutingModule
  ],
  declarations: [NamesPage]
})
export class NamesPageModule { }
