import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../service/http.service';
import { IUser } from'../../interfaces/user.interface'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public popUp: boolean = false;
  public user: IUser;

  constructor(private http: HttpService,) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() {
    this.http.get(`v1/secure/profile`).subscribe((value: IUser) => {
      this.user = value
    },
    error => {

    });
  }

  clearStorrage() {
    localStorage.removeItem('token');
    this.getUser()
  }

}
