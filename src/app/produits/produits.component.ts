import { Component, OnInit } from '@angular/core';
import {ProduitModel} from "../model/ProduitModel";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits: ProduitModel[] = [];

  constructor() {
    this.produits=[
      {id:1,nom:"Xiaomie",prix:800,dateCreation:new Date()},
      {id:1,nom:"MacBook air",prix:1050,dateCreation:new Date()},
      {id:1,nom:"MacBook pro",prix:2050,dateCreation:new Date()}
    ];
  }

  ngOnInit(): void {
  }

}
