import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import {DataService} from '../core/data.service'

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'verbs.html'
})
export class VerbsPage {

  verbs = [
    "vím",
    "víš",
    "víme",
    "ví",
  ];

  public userProfile: UserModel;
  public uid: string = "";

  constructor(
    public navCtrl: NavController,
    public authService: AuthService,
  ) {

  }

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
