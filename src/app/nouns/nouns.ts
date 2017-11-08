import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import {DataService} from '../core/data.service'

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'nouns.html'
})
export class NounsPage {

  items = [
    'on má málo',
    'rozhodl o tom',
    'mluvil o lepších',
    'vylepšil si své tréninkové',
  ];
  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  public userProfile: UserModel;
  public uid: string = "";
  //public categories: any[] = [];

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
   // private db: DataService,
  ) {
    //this.db.bindCollection("categories", this, "categories", ref => ref, this.bindToCategories);
  }
  //bindToCategories(context, variable) {
    //for(let category of context.categories) {
    //  context.db.bindCollection("places", context.places, category.id, ref => ref.where("category", "==", "category"))
    //}
  //}
  

  ionViewDidLoad() {
    this.authService.getFullProfile().subscribe((user) => {
      this.userProfile = user;
      this.uid = user.uid;
    });
  }

  logout() {
    this.authService.signOut().then(() => this.navCtrl.setRoot('AuthPage'));
  }

}
