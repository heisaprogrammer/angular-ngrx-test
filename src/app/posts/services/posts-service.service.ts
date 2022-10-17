import { Injectable } from '@angular/core';
import { delay, Observable, of } from "rxjs";
import { PostInterface } from "../interfaces/all-interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  constructor() { }

  gePosts(): Observable<PostInterface[]> {
    const posts = [
      {id: '1', title: 'First post'},
      {id: '2', title: 'Second post'},
      {id: '3', title: 'Third post'},
    ]
    return of(posts).pipe(delay(1000));
  }
}
