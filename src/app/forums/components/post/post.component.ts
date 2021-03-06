import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../service/http.service';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { IPost } from '../../../core/interfaces/post.interface';
import { TransfertService } from '../../../core/services/transfert.service';
import { IForums } from '../../../core/interfaces/forums.inteface';
import { IComment } from '../../../core/interfaces/comment.interface';
import { IResponse } from '../../../core/interfaces/response.interface';
import { ENavigation } from '../../../core/enums/navigation.enums';
import { INavigation } from '../../../core/interfaces/navigation.interface';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {
  public forum_slug: string;
  public them_slug: string;
  public post_slug: string;
  public post: IPost;
  public comments: IComment[];
  public navigation: INavigation[] = []


  constructor(
    private http: HttpService,
    private activateRoute: ActivatedRoute,
    private transfert: TransfertService
  ) { }

  ngOnInit() {
    this.forum_slug = this.activateRoute.snapshot.params['forum_slug'];
    this.them_slug = this.activateRoute.snapshot.params['them_slug'];
    this.post_slug = this.activateRoute.snapshot.params['post'];
    this.navigation = [
      {
        type: ENavigation.FORUM, 
        value: this.forum_slug,
        url: `/forums/forum/${this.forum_slug}`,
        stausPost: false
      },
      {
        type: ENavigation.THEM, 
        value: this.them_slug,
        url: `/forums/forum/${this.forum_slug}/them/${this.them_slug}`
      },
      {
        type: ENavigation.POST, 
        value: this.post_slug,
        url: `/forums/forum/${this.forum_slug}/them/${this.them_slug}/${this.post_slug}`
      },
    ]
    this.transfert.setNavigation(this.navigation)
    this.getPost()
    this.getForum()
  }

  getPost() {
    this.http.get(`${EApiUrls.FORUMS}/forum/${this.forum_slug}/them/${this.them_slug}/posts/${this.post_slug}`).subscribe((value: IPost) => {
      this.post = value
      this.getComments()
    },
    error => {

    });
  }

  getForum() {
    this.http.get(`${EApiUrls.FORUMS}/${this.forum_slug}`).subscribe((value: IForums) =>{
      this.transfert.setBackground(value.background)
    },
    error => {
      // error - объект ошибки
    });
  }

  getComments() {
    this.http.get(`${EApiUrls.FORUMS}/forum/${this.forum_slug}/them/${this.them_slug}/posts/${this.post_slug}/comments`).subscribe((value: IResponse) => {
     this.comments = value.data
    },
    error => {

    });
  }

}
