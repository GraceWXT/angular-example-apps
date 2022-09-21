import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

const baseUrl = 'https://ng-complete-guide-798d4-default-rtdb.firebaseio.com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts = [];
  fetching = false;
  errorMessage = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe((errorMessage) => {
      this.errorMessage = errorMessage;
    });
    this.fetchPosts();
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }

  onCreatePost(postData: Post) {
    this.postService.createPost(postData);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onDismissError() {
    this.errorMessage = null;
  }

  private fetchPosts() {
    // Calling subscribe in the component since it needs the returned data
    this.fetching = true;
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.loadedPosts = posts;
        this.fetching = false;
        console.log('GET posts', posts);
      },
      (error) => {
        console.log('error', error);
        this.fetching = false;
        this.errorMessage = error.message;
      }
    );
  }
}
