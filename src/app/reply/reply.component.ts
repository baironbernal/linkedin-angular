import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { createInputReply, reply } from '../state/actions/comment.actions';
import { Reply } from '../models/reply';
import { editReplyngTo } from '../state/actions/replyng.actions';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['../shared/comments-styles.component.scss']
})
export class ReplyComponent implements OnInit {

  public newReply: any = '';
  constructor(private store: Store<AppState>) { }
  
  @Input() reply!: Reply;
  @Input() commentId!: number;

  answerReply(username: any, commentId: number) {
    this.store.dispatch(createInputReply({username, commentId}))
    this.store.dispatch(editReplyngTo({username}))
  }

  ngOnInit(): void {
  }

}
