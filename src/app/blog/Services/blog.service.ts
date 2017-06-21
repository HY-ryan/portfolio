import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

const blogApi = 'http://localhost:8000/api/blog';

@Injectable()
export class BlogService {
  post: any;

  constructor(private http: Http) { }

  getAllPosts() {
  	return this.http.get(blogApi)
  		.map(res => res.json());
  }

  getSinglePost(id) {
    let singlePost;
    const posts = this.http.get(blogApi).map(res => res.json());

    posts.subscribe(post => {
      this.post = post;
      for (var i = 0; i < post.length; i++) {
        if (post[i]._id === id) {
           singlePost = post[i];
        }
      }
      console.log(singlePost);
      return singlePost;
    });
  }
  

}
