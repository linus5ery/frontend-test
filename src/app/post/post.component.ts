import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare var require: any;
var axios = require('axios')

interface Comments {
  postId: String,
  id: String,
  name: String,
  email: String,
  body: String,
}

interface Post {
  userId: String,
  id: String,
  title: String,
  body: String,
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  id: string = "";
  post: any;
  comments: Comments[] = [];
  comments_filter: Comments[] = [];
  comment_search: string = "";

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.id = String(this.route.snapshot.paramMap.get('id'));
    if(this.id == "null") {
      this.id = "";
    }
    if(this.id != "") {
      this.getPost(this.id);
    }
  }

  searchPost() {
    if(this.id != "") {
      this.getPost(this.id);
    }
  }

  getPost(id: String) {
    this.post = null;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .then((response: any) => {
      this.post = response.data;
    });
    

    axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
    .then((response: any) => {
      this.comments = response.data;
      this.comments_filter = response.data;
    })
  }

  filterComment() {
    this.comments_filter = this.comments.filter(comment => 
      comment.name.includes(this.comment_search) || 
        comment.email.includes(this.comment_search) ||
        comment.body.includes(this.comment_search)
    );
  }
}
