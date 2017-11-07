import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { NounsPage } from './nouns';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(NounsPage)
  ],
  declarations: [
    NounsPage
  ],
  entryComponents: [
    NounsPage
  ]
})
export class NounsPageModule { }
