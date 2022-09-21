import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';

const baseUrl = 'https://ng-complete-guide-798d4-default-rtdb.firebaseio.com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  fetching = false;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    this.postService.fetchPosts();
  }

  onCreatePost(postData: Post) {
    this.postService.createPost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.postService.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }
}
