// import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import React from "react";
// import { PropsPost } from "../posts";

// export interface PostContextData {
// 	post: PropsPost;
// 	getPost: (postId: number) => void;
// 	isLoading: boolean;
// }

// export const postContentDefaultValue: PostContextData = {
// 	post: { id: 0, body: '', title: '' },
// 	getPost: () => null,
// 	isLoading: false,
// }

// export const PostContext = createContext<PostContextData>(postContentDefaultValue);

// function usePostLoading() {
// 	const { getPost, post } = useContext(PostContext);

// 	useEffect(() => {
// 		getPost(post.id)
// 	}, [getPost])

// 	return {
// 		post,
// 		getPost
// 	}
// }

// function usePostContentValueE(): PostContextData {
// 	const [ post, setPost] = useState<PropsPost>();
// 	const [ isLoading, setIsLoading ] = useState(false);

// 	const getPost = useCallback((postId: number) => {
// 		setIsLoading(true);
// 		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
// 			.then(response => response.json())
// 			.then((fetchedPost: PropsPost) => {
// 				setPost(fetchedPost);
// 			})
// 			.finally(() => {
// 				setIsLoading(false);
// 			});
// 	}, [setPost, post])

// 	return {
// 		post,
// 		getPost,
// 		isLoading
// 	}
// }

const Post: React.FC = () => {
	// const context: PropsPost = useContext<PropsPost>(PostContext);
	
	return (
		// <PostContext.Provider value={postContentDefaultValue}>
		// 	<div key={context.id}>
		// 		<h2 className='title white'>{context.title}</h2>
		// 		<p className='text white'>{context.body}</p>
		// 	</div>
		// </PostContext.Provider>
		<></>
	);
}

export default Post;