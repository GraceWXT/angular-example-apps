import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(`${baseUrl}/posts.json`, postData).subscribe((resData) => {
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
    this.http.get(`${baseUrl}/posts.json`).subscribe((resData) => {
      console.log('GET resData', resData);
    });
  }
}
