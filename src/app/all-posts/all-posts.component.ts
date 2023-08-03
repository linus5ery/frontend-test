import { Component } from '@angular/core';
declare var require: any;
var axios = require('axios')

interface Posts {
  userId: String,
  id: String,
  title: String,
  body: String,
}

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss']
})
export class AllPostsComponent {
  posts: Posts[] = [];

  ngOnInit() {
    this.fetchAllPosts();
  }

  fetchAllPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response: any) => {
      this.posts = response.data;
    })
  }
}
