import { Component, OnInit } from '@angular/core';
import {ProduitModel} from "../model/ProduitModel";
import {ProduitService} from "../service/produit.service";

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
})
export class AddProduitComponent implements OnInit {

  newProduit = new ProduitModel();

  message!:String;

  constructor(private produitService:ProduitService) {
  }

  ngOnInit(): void {
  }

  addProduit(){
    this.produitService.ajouterProduit(this.newProduit);
    this.message="Produit "+this.newProduit.nom+" ajouté avec succès !";
  }

}
