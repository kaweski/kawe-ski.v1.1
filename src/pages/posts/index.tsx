import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface Props {
	id: number,
	title: string,
	body: string
}

export interface PostsContextData {
    posts: Props[];
    isLoading: boolean;
    fetchPosts: () => void;
	getPost: (postId: number) => void;
}

export const postsContextDefaultValue: PostsContextData = {
	posts: [],
	isLoading: false,
	fetchPosts: () => null,
	getPost: () => null
}

export const PostsContext = createContext<PostsContextData>(postsContextDefaultValue);

function usePostsLoading() {
	const { fetchPosts } = useContext(PostsContext);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts])
}

function usePostsListManagement() {
	const { posts, getPost } = useContext(PostsContext);
	
	// const handlePostRemove = useCallback((postId: number) => () => {
	// 	removePost(postId);
	// }, [removePost]);
	
	const singlePost = useCallback((postId: number) => () => {
		getPost(postId)
	}, [getPost])
	
	return {
		posts,
		singlePost
	}
}

const PostsList = () => {
	const { posts, singlePost } = usePostsListManagement();
	const location = useLocation();

	usePostsLoading();

	useEffect(() => {
		console.log(singlePost)
	}, [singlePost])

	function render(post: Props) {
		return (
			<div>
				<h2 className='title white'>{post.title}</h2>
				<p className='text white'>{post.body}</p>
				<Link className='button button-dark text white button-orange' onClick={singlePost(post.id)} to={`posts/${location.pathname}`}>
					<span className='content align-middle justify-center flex'>read more</span>
				</Link>
			</div>
		)
	}

	return (
		<>
			{posts.map(post => (
				<article className='box p-4 mb-4' key={post.id}>
					{render(post)}
				</article>
			))}
		</>
	)
}

function usePostsContextValue(): PostsContextData {
	const [posts, setPosts] = useState<Props[]>([]);
	let [post, setPost] = useState<Props[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchPosts = useCallback(() => {
		setIsLoading(true);
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then((fetchedPosts) => {
				setPosts(fetchedPosts);
			})
			.finally(() => {
				setIsLoading(false);
			})
	}, [setPosts]);

	// const removePost = useCallback((postId: number) => {
	// 	setIsLoading(true);
	// 	fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
	// 		method: 'DELETE'
	// 	})
	// 	.then(() => {
	// 		const newPosts = [...posts];
	// 		const removedPostIndex = newPosts.findIndex(post => post.id === postId);
	// 		if (removedPostIndex > -1) {
	// 			newPosts.splice(removedPostIndex, 1);
	// 		}
	// 		setPosts(newPosts);
	// 	})
	// 	.finally(() => {
	// 		setIsLoading(false);
	// 	})
	// }, [setPosts, posts]);

	const getPost = useCallback((postId: number) => {
		setIsLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then(response => response.json())
			.then((fetchedPost) => {
				setPost(fetchedPost);
				console.log(fetchedPost);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [setPost, post])

	return {
		posts,
		isLoading,
		fetchPosts,
		getPost
	}
}

//
function Posts() {
	const postsContextValue = usePostsContextValue();
	return (
		<PostsContext.Provider value={postsContextValue}>
			<PostsList />
		</PostsContext.Provider>
	);
}

export default Posts;