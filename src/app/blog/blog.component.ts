import { Component, OnInit } from '@angular/core';

import { BlogService } from './Services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

	posts: any = [];

  	constructor(private blogService: BlogService) { }

	ngOnInit() {

		// get the blog posts from the API
	  	this.blogService.getAllPosts().subscribe(posts => {
	  		this.posts = posts;
				posts.reverse();
	  	})

  }

}
