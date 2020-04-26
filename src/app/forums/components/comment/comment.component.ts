import { Input, Component, OnInit } from '@angular/core';
import { IComment } from '../../../core/interfaces/comment.interface';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() comment: IComment

  constructor() { }

  ngOnInit() {
    console.log(this.comment)
  }

}
