import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../service/http.service';
import { IResponse } from '../../../core/interfaces/response.interface';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { IPost } from '../../../core/interfaces/post.interface';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  public forum_slug: ActivatedRoute;
  public them_slug: ActivatedRoute;
  public post_slug: ActivatedRoute;
  public post: IPost;
  constructor(private http: HttpService,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.forum_slug = this.activateRoute.snapshot.params['forum_slug'];
    this.them_slug = this.activateRoute.snapshot.params['them_slug'];
    this.post_slug = this.activateRoute.snapshot.params['post'];
    this.getPost()
  }

  getPost() {
    this.http.get(`${EApiUrls.FORUMS}/forum/${this.forum_slug}/them/${this.them_slug}/posts/${this.post_slug}`).subscribe((value: IPost) => {
      this.post = value
      console.log(this.post)
    },
    error => {

    });
  }

}
