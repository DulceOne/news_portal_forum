import { Component, OnInit } from '@angular/core';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { HttpService } from '../../../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IThems } from '../../../core/interfaces/theme.interface';
import { IResponse } from '../../../core/interfaces/response.interface';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

  public id: ActivatedRoute;
  public thems: IThems[]

  constructor(private http: HttpService,private activateRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.params['id'];
    this.getThems()
  }

  getThems() {
    this.http.get(`${EApiUrls.FORUMS}/forum/${this.id}/thems`).subscribe((value: IResponse) =>{
      this.thems = value.data
    },
    error => {
      // error - объект ошибки
    });
  }

}
