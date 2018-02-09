/**
 * Created by jawad on 30/05/2017.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
//import {elementAt} from "rxjs/operator/elementAt";

@Injectable()
export class APIService{
      http:any;
      dataSourceUrl: String;
      categories:string;
      constructor(http:Http){
      this.http = http;
      this.dataSourceUrl = "http://192.168.1.8:8000/api";
    }

    getLivres(){
      return this.http.get(this.dataSourceUrl + "/livres").map(res => res.json());
    }

    postLivre(livre){
      return this.http.post(this.dataSourceUrl + "/livres", {'livre' : livre})
    }

    getCategories(){
      return this.http.get(this.dataSourceUrl + "/categories").map(res => res.json());
    }
    getLivreByKeyword(keyword){
        return this.http.get(this.dataSourceUrl + "/livres/chercher?keyword=" + keyword).map(res => res.json());
    }
    putLivre(livre){
       // console.log(livre)
      return this.http.put(this.dataSourceUrl + "/livres/" + livre.id, livre).map(res => res.json());
    }

}
