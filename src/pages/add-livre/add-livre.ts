import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {APIService} from "../../service/api.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Livre} from "../../models/Livre";
import {Categorie} from "../../models/Categorie";

/**
 * Generated class for the AddLivrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-livre',
  templateUrl: 'add-livre.html',
})
export class AddLivrePage {

  rForm:any
  myForm: FormGroup
  livre:Livre

  categories:any

  constructor(public navCtrl: NavController,
              public api:APIService,
              public formBuilder:FormBuilder
  ) {

    this.api.getCategories().subscribe(res => {
      this.categories = res
      //console.log(res)
    })

    this.rForm = formBuilder.group({
      'titre': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'auteur': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])],
      'date': [null, Validators.required],
      'categorie': [null, Validators.required],

    })
  }

  addLivre(livre:Livre){
    //console.log(livre)
    this.api.postLivre(livre).subscribe(res => {
      console.log(res)
    })
  }

}
