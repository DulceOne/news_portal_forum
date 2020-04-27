import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,  } from '@angular/forms';
import { HttpService } from '../../../service/http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EApiUrls } from '../../../core/enums/api-urls.enums';

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

  @Output() valueChange = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private activateRoute: ActivatedRoute,
    ) { 
    this.editorForm = this.fb.group({
      firstName : [''],
    });
  }

  ngOnInit() {
    this.forum_slug = this.activateRoute.snapshot.params['forum_slug'];
    this.them_slug = this.activateRoute.snapshot.params['them_slug'];
    this.post_slug = this.activateRoute.snapshot.params['post'];
  }

  onSubmitForm() {
    const controls = this.editorForm
    const comment = {
      content: controls.value.firstName,
      forum_slug: this.forum_slug,
      them_slug: this.them_slug,
      post_slug: this.post_slug
    }
    this.valueChange.emit();

    this.http.post(`${EApiUrls.FORUMS}/forum/them/post/comment`, comment).subscribe((value: {token: string}) =>{
      controls.reset()
    },
    error => {
      // error - объект ошибки
    });
  }
}
