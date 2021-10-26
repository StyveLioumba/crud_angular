import { Component, OnInit } from '@angular/core';
import {PostService} from "../service/post.service";
import {Post} from "../model/Post";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styles: [
  ]
})
export class AddPostComponent implements OnInit {
  newPost = new Post()

  constructor(
    private router:Router,
    private postService: PostService) { }

  ngOnInit(): void {
  }

  addPost(){
    this.postService.ajouterPost(this.newPost)
      .subscribe(result_post => {
        console.log(result_post);
      });
    this.router.navigate(['posts']).then(r =>{
     window.location.reload();
    });
  }

}
