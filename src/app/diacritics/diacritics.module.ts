import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { DiacriticsPage } from './diacritics';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(DiacriticsPage)
  ],
  declarations: [
    DiacriticsPage
  ],
  entryComponents: [
    DiacriticsPage
  ]
})
export class DiacriticsPageModule { }
