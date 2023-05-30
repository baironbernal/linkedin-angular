import { Comment } from './models/comment';
import { Component, } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { Observable } from 'rxjs';
import { selectListItems } from './state/selectors/comments.selectors';
import { load } from './state/actions/comment.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  comments$: Observable<any> = this.store.select(selectListItems);

  constructor(private store: Store<AppState>) {}

  trackByItem(index: Number, item: Comment){
    return item.id;
  } 

  ngOnInit(): void {
    this.store.dispatch(load());
  }

  
}
