import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { Comment } from '../models/comment';
import { create, reply } from '../state/actions/comment.actions';
import { trigger, transition, useAnimation } from '@angular/animations';
import { transitionAnimation } from '../animations/animations';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reply-input',
  templateUrl: './reply-input.component.html',
  styleUrls: ['../shared/comments-styles.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      transition(':enter', [
        useAnimation(transitionAnimation)
      ]),
    ])
  ],
})
export class ReplyInputComponent implements OnInit {
  replyingToSus: Subscription = new Subscription();
  replyingTo!: any;
  txtInput: FormControl;
  replyId!: number;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }
  
  @Input() commentId!: number;
  ngOnInit(): void {
    if (this.commentId) {
      this.replyingToSus = this.store.select('replyngTo').subscribe(replyngTo => this.replyingTo = replyngTo.username)
    }
  }

  ngOnDestroy() {
    this.replyingToSus.unsubscribe()
  }

  addComment() {
    if(this.txtInput.invalid) { return; }
    if(!this.commentId)  this.store.dispatch(create({comment: new Comment(Math.random(),this.txtInput.value, "bairp",  1)}));
    else this.store.dispatch(reply({ content: this.txtInput.value, commentId: this.commentId  }));
    this.txtInput.reset();
  }

}
