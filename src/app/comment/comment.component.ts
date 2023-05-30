import { transitionAnimation } from './../animations/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Comment } from '../models/comment';
import { AppState } from '../state/app.state';
import { createInputReply, plusOrLess } from '../state/actions/comment.actions';
import { useAnimation } from '@angular/animations';
import {trigger,transition} from '@angular/animations';
import { editReplyngTo } from '../state/actions/replyng.actions';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['../shared/comments-styles.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      transition(':enter', [
        useAnimation(transitionAnimation)
      ]),
    ])
  ],
})
export class CommentComponent implements OnInit {

  public newReply: any = '';
  constructor(private store: Store<AppState>) { }

  @Input() comment!: Comment;

  reply(username: any, commentId: number = 0) {
    this.store.dispatch(createInputReply({username, commentId}))
    this.store.dispatch(editReplyngTo({username}))
  }

  plusOrLess(commentId: number, operation: number) {
    this.store.dispatch(plusOrLess({commentId, operation}))
  }

  ngOnInit(): void {}

}
