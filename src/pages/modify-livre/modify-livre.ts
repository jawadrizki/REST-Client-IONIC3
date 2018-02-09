import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {APIService} from "../../service/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Livre} from "../../models/Livre";

/**
 * Generated class for the AddLivrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-livre',
  templateUrl: 'modify-livre.html',
})
export class ModifyLivrePage {

  rForm:any
  myForm: FormGroup
  livre:Livre

  categories:any

  constructor(public navCtrl: NavController,
              public api:APIService,
              public formBuilder:FormBuilder,
              private navParams: NavParams
  ) {
    this.livre = navParams.get('livre');
    this.api.getCategories().subscribe(res => {
      this.categories = res
      //console.log(res)
    })

    this.rForm = formBuilder.group({
      'titre': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'auteur': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'date': [null, Validators.required],
      'categorie': [null],
      'id':[null]

    })
  }

  addLivre(livre){
    this.api.putLivre(livre).subscribe(res => {
      console.log(res)
    })
  }


}
