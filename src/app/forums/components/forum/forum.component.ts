import { Component, OnInit } from '@angular/core';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { HttpService } from '../../../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IThems } from '../../../core/interfaces/theme.interface';
import { IResponse } from '../../../core/interfaces/response.interface';
import { TransfertService } from '../../../core/services/transfert.service';
import { IForums } from '../../../core/interfaces/forums.inteface';
import { ENavigation } from '../../../core/enums/navigation.enums';
import { INavigation } from '../../../core/interfaces/navigation.interface';


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  public id: string;
  public thems: IThems[]
  public navigation: INavigation[] = []

  constructor(
    private http: HttpService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private transfert: TransfertService
  ) {  }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.navigation.push({type: ENavigation.FORUM, value: this.id, url: this.router.url, stausPost: false})
    this.transfert.setNavigation(this.navigation)
    this.getThems()
    this.getForum()
  }

  getThems() {
    this.http.get(`${EApiUrls.FORUMS}/forum/${this.id}/thems`).subscribe((value: IResponse) =>{
      this.thems = value.data
    },
    error => {
      // error - объект ошибки
    });
  }

  getForum() {
    this.http.get(`${EApiUrls.FORUMS}/${this.id}`).subscribe((value: IForums) =>{
      this.transfert.setBackground(value.background)
    },
    error => {
      // error - объект ошибки
    });
  }

}
