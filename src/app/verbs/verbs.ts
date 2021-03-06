import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { AuthService } from '../core/auth.service';
import { UserModel } from '../core/user.model'
import {DataService} from '../core/data.service'
import { ToastController } from 'ionic-angular'

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'verbs.html'
})
export class VerbsPage {
  public answers: number[] = [];
  public sentences: any = [
    {
      beginning: "Já",
      end: "o tom problému.",
      question:[
        "vím",
        "víš",
        "ví",
        "víme",
        "víte"
      ],
      correct: 0
    },
    {
      beginning: "Ty",
      end: "o jeho dětech.",
      question:[
        "vím",
        "víš",
        "ví",
        "víme",
        "víte"
      ],
      correct: 1
    },
    {
      beginning: "On",
      end: "že nejím mandarinky.",
      question:[
        "vím",
        "víš",
        "ví",
        "víme",
        "víte"
      ],
      correct: 2
    },
    {
      beginning: "My",
      end: "kdy máš narozeniny.",
      question:[
        "vím",
        "víš",
        "ví",
        "víme",
        "víte"
      ],
      correct: 3
    }
  ];

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

  checkCorrect(
      outputRight: string = "",
      outputWrong: string = ""
   ) {
      for (let i in this.sentences) {
        if (this.sentences[i].correct == this.answers[i]) {
          outputRight += (i + ". odpoved je spravne. \n");
        } else {
          outputWrong += (i + ". odpoved je spatne. \n");
        }
        }

      if (outputWrong =="") {
        alert ("vse je spravne");
      } else {
        alert (outputRight + outputWrong);
      }
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
