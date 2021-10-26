import { Injectable } from '@angular/core';
import {ProduitModel} from "../model/ProduitModel";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: ProduitModel[];
  produit? : ProduitModel;

  constructor() {
    this.produits=[
      {id:1,nom:"Xiaomie",prix:800,dateCreation:"24/10/2021"},
      {id:2,nom:"MacBook air",prix:1050,dateCreation:"24/10/2021"},
      {id:3,nom:"MacBook pro",prix:2050,dateCreation:"24/10/2021"}
    ];
  }

  listProduits():ProduitModel[]{
    return this.produits;
  }

  ajouterProduit(produit:ProduitModel){
    this.produits.push(produit);
  }

  supprimerProd(produit:ProduitModel){
    const index =this.produits.indexOf(produit,0);
    if (index>-1){
      this.produits.splice(index,1);
    }
  }

  consulterProduit(id:number):ProduitModel{
    this.produit=this.produits.find(value =>
      value.id == id
    );
    return this.produit!;
  }

  miseAjourProd(produit:ProduitModel){
    this.supprimerProd(produit);
    this.ajouterProduit(produit);
    this.trierProduit();
  }

  trierProduit(){
    this.produits=this.produits.sort((n1,n2)=>{
      if (n1.id >n2.id){
        return 1;
      }
      if (n1.id <n2.id){
        return -1;
      }
      return 0;
    });
  }
}
