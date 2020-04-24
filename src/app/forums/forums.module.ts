import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ForumsComponent } from './forums.component';
import { ForumComponent } from './components/forum/forum.component';
import { ForumItemComponent } from './components/forum-item/forum-item.component';
import { ThemItemComponent } from './components/forum/them-item/them-item.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostItemComponent } from './components/posts/post-item/post-item.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  {
    path:'',
    component: ForumsComponent,
     children: [
      {
        path: 'forums', 
        component: ForumItemComponent
      },
      {
        path: 'forums/forum/:id', 
        component: ForumComponent
      },
      {
        path: 'forums/forum/:forum_slug/them/:them_slug', 
        component: PostsComponent
      },
      {
        path: 'forums/forum/:forum_slug/them/:them_slug/:post', 
        component: PostComponent
      },
    ]
  },
];

@NgModule({
  declarations: [
    ForumsComponent,
    ForumComponent,
    ForumItemComponent,
    ThemItemComponent,
    PostsComponent,
    PostItemComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForumsModule { }
