import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {APIService} from "../../service/api.service";
import {AddLivrePage} from "../add-livre/add-livre";
import {Livre} from "../../models/Livre";
import {ModifyLivrePage} from "../modify-livre/modify-livre";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    livres:any
    keyword:string

    constructor(public navController:NavController,
                public api:APIService
    ){
        this.api.getLivres().subscribe(res =>{
            this.livres = res
        })
    }

    addLivre(){
        this.navController.push(AddLivrePage);
    }

    search(){
        console.log(this.keyword)
        if(this.keyword === undefined || this.keyword === null || this.keyword == '' ){
            this.api.getLivres().subscribe(res =>{
                this.livres = res
            })
        }else {
            this.api.getLivreByKeyword(this.keyword).subscribe(res => {
                this.livres = res
            })
        }
    }
  updateLivre(livre:Livre){
     // console.log("------ response ----")
      this.navController.push(ModifyLivrePage,
          {
              'livre' : livre
          }
      )

  }

}
