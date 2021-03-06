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
import { CommentComponent } from './components/comment/comment.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorComponent } from '../core/libs/editor/editor.component';
import { HeaderComponent } from '../core/Ui/header/header.component';
import { CreatePostComponent } from './components/create-post/create-post.component'


const routes: Routes = [
  {
    path:'',
    component: ForumsComponent,
     children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'forums',
      },
      {
        path: 'forums', 
        component: ForumItemComponent
      },
      {
        path: 'login', 
        component: LoginComponent
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
      {
        path: 'forums/forum/:forum_slug/them/:them_slug/create/post', 
        component: CreatePostComponent
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
    PostComponent,
    CommentComponent,
    LoginComponent,
    EditorComponent,
    HeaderComponent,
    CreatePostComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ForumsModule { }
