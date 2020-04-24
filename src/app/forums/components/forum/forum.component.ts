import { Component, OnInit } from '@angular/core';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { HttpService } from '../../../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IThems } from '../../../core/interfaces/theme.interface';
import { IResponse } from '../../../core/interfaces/response.interface';
import { TransfertService } from '../../../core/services/transfert.service'
import { IForums } from '../../../core/interfaces/forums.inteface'
@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  public id: ActivatedRoute;
  public thems: IThems[]

  constructor(
    private http: HttpService,
    private activateRoute: ActivatedRoute,
    private transfert: TransfertService
  ) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
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
      console.log(value.background)
    },
    error => {
      // error - объект ошибки
    });
  }

}
