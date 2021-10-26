import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post.service";
import {Post} from "../model/Post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
  ]
})
export class PostComponent implements OnInit {
  posts! : Post[];

  constructor(
    private router : Router,
    private postService : PostService) { }

  ngOnInit(): void {
    this.postService.listPost().subscribe(result_posts => {
      console.log(result_posts);

      this.posts = result_posts;
    });
  }

  suppPost(post:Post){
    let conf = confirm("Êtes vous sur de supprimer ce poste "+post.title+"?");
    if (conf){
      this.postService.supprimerPost(post.id).subscribe(value => {
        console.log("post supprimeé");
        this.supprimerProduitDuTableau(post);
      })
    }
  }

  supprimerProduitDuTableau(post:Post){
    this.posts.forEach((value, index) => {
      if (post.id === value.id){
        this.posts.splice(index,1);
      }
    });
  }

}
