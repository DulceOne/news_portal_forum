import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../service/http.service';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { IResponse } from '../../../core/interfaces/response.interface';
import { IPost } from '../../../core/interfaces/post.interface';
import { TransfertService } from '../../../core/services/transfert.service';
import { IForums } from '../../../core/interfaces/forums.inteface';
import { INavigation } from '../../../core/interfaces/navigation.interface';
import { ENavigation } from '../../../core/enums/navigation.enums';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public forum_slug: string;
  public them_slug: string;
  public posts: IPost[]
  public navigation: INavigation[]; 

  constructor(
    private http: HttpService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private transfert: TransfertService
    ) { }

  ngOnInit() {
    this.forum_slug = this.activateRoute.snapshot.params['forum_slug'];
    this.them_slug = this.activateRoute.snapshot.params['them_slug'];
    this.getPosts()
    this.getForum()
    this.navigation = [
      {
        type: ENavigation.FORUM, 
        value: this.forum_slug,
        url: `/forums/forum/${this.forum_slug}`,
        stausPost: true
      },
      {
        type: ENavigation.THEM, 
        value: this.them_slug,
        url: `/forums/forum/${this.forum_slug}/them/${this.them_slug}`
      }
    ]
    this.transfert.setNavigation(this.navigation)
  }

  getPosts() {
    this.http.get(`${EApiUrls.FORUMS}/forum/${this.forum_slug}/them/${this.them_slug}/posts`).subscribe((value: IResponse) => {
      this.posts = value.data
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

  

}
