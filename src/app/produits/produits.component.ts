import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html'
})
export class ProduitsComponent implements OnInit {

  produits: String[] = [];

  constructor() {
    this.produits=[
      "Huawei",
      "Xiaomie",
      "MacBook air"
    ];
  }

  ngOnInit(): void {
  }

}
