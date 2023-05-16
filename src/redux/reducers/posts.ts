import { ADD_POST, DELETE_POST, EDIT_POST, GET_POSTS } from "../../actions/actions";
import { DataPosts, PostsAction } from "./types/reducers";

const initialState: { posts: DataPosts } = {
    posts: {
        count: 0,
        next: process.env.REACT_APP_API_URL,
        previous: null,
        results: []
    }
}

export const posts = (state = initialState, action: PostsAction) => {
    switch (action.type) {
        // case GET_POSTS:
        //     return {
        //         ...state,
        //         posts: action.posts
        //     }
        case GET_POSTS:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    next: action.posts.next,
                    results: action.posts.next ? [
                        ...state.posts.results,
                        ...action.posts.results.filter(post =>
                            !state.posts.results.some(prevPost => post.id === prevPost.id)
                        )].sort((a, b) => {
                            const date1 = a.created_datetime as string;
                            const date2 = b.created_datetime as string;
                            const aDate = new Date(date1);
                            const bDate = new Date(date2);

                            return bDate.getTime() - aDate.getTime();
                        }) : action.posts
                }
            }
        case ADD_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    results: [action.post, ...state.posts.results]
                }
            }
        case EDIT_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    results: state.posts.results.map(post => post.id === action.post.id ? action.post : post)
                }
            }
        case DELETE_POST:
            return {
                ...state,
                posts: {
                    ...state.posts,
                    results: state.posts.results.filter(post => post.id !== action.post.id)
                }
            }
        default:
            return state;
    }
}