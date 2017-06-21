import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../Services/blog.service';

@Component({
  selector: 'app-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css']
})
export class SinglePostComponent implements OnInit {
  id: any;
  private sub: any;
  post: any;
  blogApi = 'http://localhost:8000/api/blog';

  constructor(private blogService: BlogService,
              private route: ActivatedRoute,
              private http: Http) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       //this.post = this.blogService.getSinglePost(this.id);
    });

    let singlePost;
    const posts = this.http.get(this.blogApi).map(res => res.json());

    posts.subscribe(post => {
      this.post = post;
      for (var i = 0; i < post.length; i++) {
        if (post[i]._id === this.id) {
           post = post[i];
        }
      }
      return post;
    });
  } 

}
