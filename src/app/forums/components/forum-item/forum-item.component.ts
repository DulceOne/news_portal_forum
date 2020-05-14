import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../service/http.service';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { IForums } from '../../../core/interfaces/forums.inteface';
import { IResponse } from '../../../core/interfaces/response.interface';
import { TransfertService } from '../../../core/services/transfert.service'

@Component({
  selector: 'app-forum-item',
  templateUrl: './forum-item.component.html',
  styleUrls: ['./forum-item.component.scss']
})
export class ForumItemComponent implements OnInit {
  public forums: IForums[] 

  constructor(private http: HttpService, private transfert: TransfertService) { }

  ngOnInit() {
    this.getForums()
  }

  getForums() { 
    this.http.get(EApiUrls.FORUMS).subscribe((value: IResponse) =>{
      this.forums = value.data
      this.transfert.setBackground("none")
    },
    error => {
      // error - объект ошибки
    });
  }

}
