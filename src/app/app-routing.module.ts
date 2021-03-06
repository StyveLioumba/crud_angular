import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProduitsComponent} from "./produits/produits.component";
import {AddProduitComponent} from "./add-produit/add-produit.component";
import {UpdateProduitComponent} from "./update-produit/update-produit.component";
import {PostComponent} from "./post/post.component";
import {AddPostComponent} from "./add-post/add-post.component";
import {UpdatePostComponent} from "./update-post/update-post.component";

const routes: Routes = [
  {path:"produits",component:ProduitsComponent},
  {path:'add-produit',component:AddProduitComponent},
  {path:'update-produit/:id',component:UpdateProduitComponent},
  {path:'update-post/:id',component:UpdatePostComponent},
  {path:'posts',component:PostComponent},
  {path:'add-post',component:AddPostComponent},
  {path:"",redirectTo:"produits",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
