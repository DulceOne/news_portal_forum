import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../service/http.service';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { IResponse } from '../../../core/interfaces/response.interface';
import { IPost } from '../../../core/interfaces/post.interface';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public forum_slug: ActivatedRoute;
  public them_slug: ActivatedRoute;
  public posts: IPost[]

  constructor(private http: HttpService,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.forum_slug = this.activateRoute.snapshot.params['forum_slug'];
    this.them_slug = this.activateRoute.snapshot.params['them_slug'];
    this.getPosts()
  }

  getPosts() {
    this.http.get(`${EApiUrls.FORUMS}/forum/${this.forum_slug}/them/${this.them_slug}/posts`).subscribe((value: IResponse) => {
      this.posts = value.data
    },
    error => {

    });
  }

}
