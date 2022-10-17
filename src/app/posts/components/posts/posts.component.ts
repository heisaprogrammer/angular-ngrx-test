import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { getPosts } from "../../store/actions";
import { isLoadingSelector, postsSelector } from "../../store/selectors";
import { Observable } from "rxjs";
import { AppStateInterface } from "../../../types/app-state.interface";
import { PostInterface } from "../../interfaces/all-interfaces";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public posts$: Observable<PostInterface[]>;

  constructor(
    private readonly store: Store<AppStateInterface>
  ) {
    this.isLoading$ = this.store.select(isLoadingSelector);
    this.posts$ = this.store.select(postsSelector);
  }

  ngOnInit(): void {
    this.store.dispatch(getPosts());
  }

}
