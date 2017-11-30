import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import {DataService} from '../core/data.service'

import { ToastController } from 'ionic-angular';

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

  options = [
    "čas",
    "časech",
    "času",
    "časy",
  ];

  correctAnswers = [
    'rozhodl o tom čas',
    'mluvil o lepších časech',
    'on má málo času',
    'vylepšil si své tréninkové časy',
  ];

  answered = [
    false,
    false,
    false,
    false
  ]
  selected = undefined;


  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  public userProfile: UserModel;
  public uid: string = "";
  //public categories: any[] = [];

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
    public toastCtrl: ToastController,
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

  selectItem(question) {
    this.selected = question; //index radku
  }
//index tlacitka
  answer(answer) {
    if(this.selected != undefined) {
      let index = this.correctAnswers.indexOf(this.selected + " " + answer);
      if(index != -1) {
        this.answered[index] = true;
      }
      this.selected = undefined;

    let x = this.answered.indexOf(false);
    if(x == -1) {
      this.showToast();
      }
    }
  }
  showToast() {
    let toast = this.toastCtrl.create({
      message: 'Výtečně!',
      duration: 3000
    });
    toast.present();
  }
}
