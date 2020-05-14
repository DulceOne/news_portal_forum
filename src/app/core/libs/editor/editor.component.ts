import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,  } from '@angular/forms';
import { HttpService } from '../../../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EApiUrls } from '../../../core/enums/api-urls.enums';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  editorForm: FormGroup;
  public forum_slug: ActivatedRoute;
  public them_slug: ActivatedRoute;
  public post_slug: ActivatedRoute;
  public date = new Date();

  @Input() nameComponent: string;
  @Output() valueChange = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private activateRoute: ActivatedRoute ,
    ) { 
    this.editorForm = this.fb.group({
      firstName : [''],
      title : [''],
    });
  }

  ngOnInit() {
    this.forum_slug = this.activateRoute.snapshot.params['forum_slug'];
    this.them_slug = this.activateRoute.snapshot.params['them_slug'];
    this.post_slug = this.activateRoute.snapshot.params['post'];
  }

  onSubmitForm() {
    if(this.nameComponent) {
      const controls = this.editorForm
      const post = {
        name: controls.value.title,//name eto title?
        content: controls.value.firstName,
        author: "test",
        date: this.date,
        forum_slug: this.forum_slug,
        them_slug: this.them_slug,
        slug: controls.value.title,
      }
      this.http.post(`${EApiUrls.FORUMS}/forum/them/post`, post).subscribe((value: {token: string}) =>{
        controls.reset()
      },
      error => {
        // error - объект ошибки
      });
    }
    else {
      const controls = this.editorForm
      const comment = {
        content: controls.value.firstName,
        forum_slug: this.forum_slug,
        them_slug: this.them_slug,
        post_slug: this.post_slug
      }
  
      this.http.post(`${EApiUrls.FORUMS}/forum/them/post/comment`, comment).subscribe((value: {token: string}) =>{
        controls.reset()
        this.valueChange.emit();
      },
      error => {
        // error - объект ошибки
      });

    }
  }
}
