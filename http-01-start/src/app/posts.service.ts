import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Post } from './post.model';

const baseUrl = 'https://ng-complete-guide-798d4-default-rtdb.firebaseio.com';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPost(postData: Post) {
    // Send Http request
    // Calling subscribe in the service since the component doesn't care the resData
    // It is only needed to make sure the req gets sent
    console.log(postData);
    this.http
      .post<{ name: string }>(`${baseUrl}/posts.json`, postData)
      .subscribe(
        (resData) => {
          console.log('POST resData', resData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: Post }>(`${baseUrl}/posts.json`).pipe(
      map((resData) => {
        const postsArray: Post[] = [];
        for (const key in resData) {
          // Condition to make true it's not accessing property of prototype
          if (resData.hasOwnProperty(key)) {
            postsArray.push({ id: key, ...resData[key] });
          }
        }
        return postsArray;
      }),
      catchError((errorRes) => {
        // Some generic error handling tasks, e.g. logging, sending to server, etc.
        // throwError creates an Observable so that the error can still be subscribed outside the service
        return throwError(errorRes);
      })
    );
  }

  deletePosts() {
    return this.http.delete(`${baseUrl}/posts.json`);
  }
}
