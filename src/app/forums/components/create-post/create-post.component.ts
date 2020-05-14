import { Component, OnInit } from '@angular/core';
import { INavigation } from '../../../core/interfaces/navigation.interface';
import { ENavigation } from '../../../core/enums/navigation.enums';
import { TransfertService } from '../../../core/services/transfert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  public navigation: INavigation[]; 
  public forum_slug: string;
  public them_slug: string;
  public nameComponent: string = "post";

  constructor(
    private transfert: TransfertService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.forum_slug = this.activateRoute.snapshot.params['forum_slug'];
    this.them_slug = this.activateRoute.snapshot.params['them_slug'];

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
    ]
    this.transfert.setNavigation(this.navigation)
  }

}
