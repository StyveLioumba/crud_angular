import { Component, OnInit } from '@angular/core';
import {ProduitModel} from "../model/ProduitModel";
import {ProduitService} from "../service/produit.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: [
  ]
})
export class UpdateProduitComponent implements OnInit {

  currentProduit = new ProduitModel();

  constructor(
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private produitService:ProduitService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.id);
    let id = this.activatedRoute.snapshot.params.id;
    this.currentProduit = this.produitService.consulterProduit(id);
  }

  updateProduit(){
    //console.log(this.currentProduit);
    this.produitService.miseAjourProd(this.currentProduit);
    //redirection
    this.router.navigate(["produits"]);
  }

}
