import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

const baseUrl = 'https://ng-complete-guide-798d4-default-rtdb.firebaseio.com';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http
      .post<{ name: string }>(`${baseUrl}/posts.json`, postData)
      .subscribe((resData) => {
        console.log('POST resData', resData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts;
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get<{ [key: string]: Post }>(`${baseUrl}/posts.json`)
      .pipe(
        map((resData) => {
          const postsArray: Post[] = [];
          for (const key in resData) {
            // Condition to make true it's not accessing property of prototype
            if (resData.hasOwnProperty(key)) {
              postsArray.push({ id: key, ...resData[key] });
            }
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        console.log('GET posts', posts);
        this.loadedPosts = posts;
      });
  }
}
