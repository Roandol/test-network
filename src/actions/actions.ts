import { Dispatch } from "react";
import { api } from "../axiosMain";
import { IPost } from "../builders/types/builders";
import { AnyAction } from "redux";
import { DataPosts } from "../redux/reducers/types/reducers";

export const NEW_USER = 'NEW_USER';

export function newUser(username: string) {
    return {
        type: NEW_USER,
        username
    }
}

export const LOGOUT_USER = 'LOGOUT_USER';

export function logoutUser() {
    return {
        type: LOGOUT_USER
    }
}

export const GET_POSTS = 'GET_POSTS';

function getData(posts: DataPosts) {
    return {
        type: GET_POSTS,
        posts
    }
}

export const ADD_POST = 'ADD_POST';

export function addPost(post: IPost) {
    return {
        type: ADD_POST,
        post
    }
}

export const EDIT_POST = 'EDIT_POST';

export function editPost(post: IPost) {
    return {
        type: EDIT_POST,
        post
    }
}

export const DELETE_POST = 'DELETE_POST';

export function deletePost(post: IPost) {
    return {
        type: DELETE_POST,
        post
    }
}

export function getPosts(next: string = '') {
    const url = next;
    const parts = url.split("/");
    const lastPart = parts.pop();

    const data = api.get(lastPart ? lastPart : '');

    return (dispatch: Dispatch<AnyAction>) => data.then(response => dispatch(getData(response.data)));

}

export function postData(post: IPost) {
    api.post('', { username: post.username, title: post.title, content: post.content });

    return (dispatch: Dispatch<AnyAction>) =>
        api.get('').then(response => {
            console.log(response.data)
            dispatch(getData(response.data))
        });
}

export function patchData(post: IPost) {
    return (dispatch: Dispatch<AnyAction>) =>
        api.patch(`/${post.id}/`, { title: post.title, content: post.content })
            .then(() => dispatch(editPost(post)));
}

export function deleteData(post: IPost) {
    return (dispatch: Dispatch<AnyAction>) =>
        api.delete(`/${post.id}/`, {})
            .then(() => dispatch(deletePost(post)))
            .catch((error) => {
                console.error(error);
                setInterval(() => deleteData(post), 3000)
            });
}