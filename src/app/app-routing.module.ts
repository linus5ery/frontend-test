import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'allPosts', component: AllPostsComponent },
  { path: 'post', component: PostComponent },
  { path: '',   redirectTo: '/allPosts', pathMatch: 'full' }, // redirect to `allPosts`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
