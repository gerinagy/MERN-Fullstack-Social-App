import * as api from '../../api'
import { CREATE, DELETE, FETCH_ALL, UPDATE, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from "../../constans/actionTypes"

// Action Creators
export const getPosts = (page) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchPosts(page)

        dispatch({ type: FETCH_ALL, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery)

        dispatch({ type: FETCH_BY_SEARCH, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.createPost(post)

        dispatch({ type: CREATE, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)

        dispatch({ type: DELETE, payload: id })
    } catch (error) {
        console.log(error)
    }
}

export const likePost = (id) => async (dispatch) => {
    const user = JSON.parse(localStorage.getItem('profile'))

    try {
        const { data } = await api.likePost(id, user?.token)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error)
    }
}