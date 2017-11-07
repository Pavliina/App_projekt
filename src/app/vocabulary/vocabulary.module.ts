import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { VocabularyPage } from './vocabulary';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(VocabularyPage)
  ],
  declarations: [
    VocabularyPage
  ],
  entryComponents: [
    VocabularyPage
  ]
})
export class VocabularyPageModule { }
