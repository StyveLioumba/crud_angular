import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post.service";
import {Post} from "../model/Post";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styles: [
  ]
})
export class UpdatePostComponent implements OnInit {
  currentPost = new Post();

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private postService:PostService) { }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.params.id;
    this.postService.consulterPost(id).subscribe(value => {
      this.currentPost = value;
    });
  }
  miseAjourPost(){
    this.postService.updatePost(this.currentPost).subscribe(value => {
      this.router.navigate(['posts']);
    },error => {
      alert("Probleme lors de la modification");
    });
  }


}
