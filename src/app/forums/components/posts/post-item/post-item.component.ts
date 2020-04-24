import { Input, Component, OnInit } from '@angular/core';
import { IPost } from '../../../../core/interfaces/post.interface';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() post: IPost

  constructor() { }

  ngOnInit() {
  }

}
