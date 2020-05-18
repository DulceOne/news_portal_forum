import { Component, OnInit } from '@angular/core';
import { TransfertService } from '../core/services/transfert.service';
import { INavigation } from '../core/interfaces/navigation.interface';
import { ENavigation } from '../core/enums/navigation.enums';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss']
})
export class ForumsComponent implements OnInit {
  public id: string;
  public navigation: INavigation[]; 
  public statusPost: boolean;
  public url: INavigation[];

  constructor(
    private activateRoute: ActivatedRoute,
    private transfert: TransfertService
  ) { }


  ngOnInit() {
    this.transfert.navCust.subscribe((result: INavigation[]) => {
      this.navigation = result
      this.statusCreatePost()
      this.getUrl()
      console.log(this.navigation)
    })
  }

  statusCreatePost() {
    this.statusPost = this.navigation.some(item => {
      return item.stausPost === true
    })
  }

  homeRouter() {
    this.transfert.setNavigation([])
  }

  getUrl() {
    this.url = this.navigation.filter(item => {
      return item.type ===  ENavigation.THEM
    })
  }

  createPostRouter() {
    this.statusPost = false
  }


}
