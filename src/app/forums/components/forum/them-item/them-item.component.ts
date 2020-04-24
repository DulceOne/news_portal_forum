import { Input, Component, OnInit } from '@angular/core';
import { IThems } from '../../../../core/interfaces/theme.interface';

@Component({
  selector: 'app-them-item',
  templateUrl: './them-item.component.html',
  styleUrls: ['./them-item.component.scss']
})
export class ThemItemComponent implements OnInit {
 @Input() them: IThems

  constructor() { }

  ngOnInit() {
  }

  

}
 