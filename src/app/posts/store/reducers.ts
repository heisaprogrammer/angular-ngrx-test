import { PostsState } from "../interfaces/posts-state.interface";
import { createReducer, on } from "@ngrx/store";
import * as actions from './actions';

export const initialState: PostsState = {
  isLoading: false,
  error: null,
  posts: []
};

export const reducers = createReducer(
  initialState,
  on(actions.getPosts, (state) => {
    return {
      ...state,
      isLoading: true
    }
  }),
  on(actions.getPostsSuccess, (state, action) => {
    return {
      ...state,
      isLoading: false,
      posts: action.posts
    }
  }),
  on(actions.getPostsFailure, (state, action) => {
    return {
      ...state,
      isLoading: false,
      error: action.error
    }
  }),

)
