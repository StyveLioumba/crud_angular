import { Component, OnInit } from '@angular/core';
import {ProduitModel} from "../model/ProduitModel";
import {ProduitService} from "../service/produit.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits: ProduitModel[];

  constructor(private produitService:ProduitService) {
    this.produits=produitService.listProduits();
  }

  ngOnInit(): void {
  }

  supprimerProduit(produit:ProduitModel){
    let conf = confirm("Êtes-vous sur de vouloir supprimer "+ produit.nom +" ?");
    if (conf){
      this.produitService.supprimerProd(produit);
    }
  }

}
