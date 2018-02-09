import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {APIService} from "../../service/api.service";
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the ShowLivrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show-livre',
  templateUrl: 'show-livre.html',
})
export class ShowLivrePage {
  livre:any
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:APIService, private alertCtrl: AlertController) {
    this.livre = navParams.get('livre');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowLivrePage');
  }
  presentConfirm(livre) {
    let alert = this.alertCtrl.create({
      title: 'confirmation',
      message: 'confirmer la suppression de la livre ' + livre.titre,
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Oui',
          handler: () => {
            this.delete(livre.id)
          }
        }
      ]
    });
    alert.present();
  }
  delete(id){
    this.api.deleteLivre(id).subscribe(res => {
      console.log(res)
    })
  }

}
