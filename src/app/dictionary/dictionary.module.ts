import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { DictionaryPage } from './dictionary';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(DictionaryPage)
  ],
  declarations: [
    DictionaryPage
  ],
  entryComponents: [
    DictionaryPage
  ]
})
export class DictionaryPageModule { }
