import { NgModule } from '@angular/core';

import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../shared/shared.module';
import { VerbsPage } from './verbs';

@NgModule({
  imports: [
    SharedModule,
    IonicPageModule.forChild(VerbsPage)
  ],
  declarations: [
    VerbsPage
  ],
  entryComponents: [
    VerbsPage
  ]
})
export class VerbsPageModule { }
