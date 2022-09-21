import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

const baseUrl = 'https://ng-complete-guide-798d4-default-rtdb.firebaseio.com';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    // Send Http request
    console.log(postData);
    this.http
      .post<{ name: string }>(`${baseUrl}/posts.json`, postData)
      .subscribe((resData) => {
        console.log('POST resData', resData);
      });
  }

  fetchPosts() {
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
      });
  }
}
