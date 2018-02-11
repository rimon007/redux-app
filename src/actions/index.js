export const GET_POSTS = 'GET_POSTS'
export const SET_SORTING = 'SET_SORTING'

import * as PostApiUtil from '../utils/post_api_util'

export const getPosts = posts => ({
	type: GET_POSTS,
	posts
})

export const setSorting = sortBy => ({
	type: SET_SORTING,
	sortBy
})