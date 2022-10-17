import { PostInterface } from "./all-interfaces";

export interface PostsState {
  isLoading: boolean;
  posts: PostInterface[];
  error: string | null;
}
