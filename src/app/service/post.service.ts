import { Injectable } from '@angular/core';
import {Post} from "../model/Post";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers:new HttpHeaders(
    {
      'Content-Type':'application/json'
    }
  )
};

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts!: Post;
  apiURL: string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http: HttpClient) { }

  listPost():Observable<Post[]>{
    return this.http.get<Post[]>(this.apiURL);
  }

  ajouterPost(post : Post):Observable<Post>{
    return this.http.post<Post>(
      this.apiURL,
      post,
      httpOptions
    );
  }

  supprimerPost(id:number){
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url,httpOptions);
  }

  consulterPost(id:number) : Observable<Post>{
    const url = `${this.apiURL}/${id}`;

    return this.http.get<Post>(url);
  }

  updatePost(post: Post):Observable<Post>{
    const url = `${this.apiURL}/${post.id}`;
    return this.http.put<Post>(url,post,httpOptions);
  }


}
