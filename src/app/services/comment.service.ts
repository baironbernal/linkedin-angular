import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { informacion } from 'src/assets/data';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  constructor() { }

  getDataApi(): Observable<Comment[]> {
    
    return of(informacion.comments.sort().reverse())
  }
}
