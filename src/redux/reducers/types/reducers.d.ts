import { IUser, IPost } from "../../../builders/types/builders";

export type RootState = ReturnType<typeof rootReducer>

// export interface PostAction {
//     type: 'FETCH_DATA' | 'RECEIVE_DATA';
//     username: string;
//     title: string;
//     content: string;
// }

// export type PostState = {
//     isLoading: boolean
// };

export interface UserAction {
    type: 'NEW_USER' | 'LOGOUT_USER';
    username: string;
}

export type UserState = {
    username: string
};

export type LoadingAction = {
    type: 'SET_LOADING';
    isLoading: boolean;
}

export interface DataPosts {
    count: number,
    next?: string,
    previous: null,
    results: IPost[]
}

export type PostsAction = {
    type: 'GET_POSTS' | 'UPDATE_POSTS' | 'ADD_POST' | 'EDIT_POST' | 'DELETE_POST',
    post: IPost,
    posts: DataPosts
}