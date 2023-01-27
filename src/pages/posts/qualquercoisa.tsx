import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
	id: number,
	title: string,
	body: string
}

export interface PostsContextData {
    posts: Props[];
    isLoading: boolean;
    fetchPosts: () => void;
    // removePost: (postId: number) => void;
	getPost: (postId: number) => void;
}

export const postsContextDefaultValue: PostsContextData = {
	posts: [],
	isLoading: false,
	fetchPosts: () => null,
	// removePost: () => null,
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
		return getPost(postId)
	}, [getPost])
	
	return {
		// handlePostRemove,
		posts,
		singlePost
	}
}

const PostsList = () => {
	const { posts, singlePost } = usePostsListManagement();
	const [ clickedPost, setclickedPost ] = useState<Props>();
	usePostsLoading();

	const renderPost = useCallback((post: Props) => () => {
		singlePost(post.id)
		setclickedPost(post)
	}, [singlePost, setclickedPost]);

	function list(post: Props) {
		return (
			<>
				<article className='box p-4 mb-4' key={post.id} onClick={renderPost(post)}>
					<h2 className='title white'>{post.title}</h2>
					<p className='text white'>{post.body}</p>
				</article>
			</>
		)
	}

	function single(post: Props) {
		return (
			<article className='box p-4 mb-4' key={post.id}>
				<h2 className='title white'>{post.title}</h2>
				<p className='text white'>{post.body}</p>
			</article>
		)
	}
	return (
		<>
			{posts.map((post) => {
				list(post)
			})}
		</>
	)
}

function usePostsContextValue(): PostsContextData {
	const [posts, setPosts] = useState<Props[]>([]);
	const [post, setPost] = useState<Props[]>([]);
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

	const removePost = useCallback((postId: number) => {
		setIsLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
			method: 'DELETE'
		})
		.then(() => {
			const newPosts = [...posts];
			const removedPostIndex = newPosts.findIndex(post => post.id === postId);
			if (removedPostIndex > -1) {
				newPosts.splice(removedPostIndex, 1);
			}
			setPosts(newPosts);
		})
		.finally(() => {
			setIsLoading(false);
		})
	}, [setPosts, posts]);

	const getPost = useCallback((postId: number) => {
		setIsLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then(response => response.json())
			.then((fetchedPost) => {
				setPost(fetchedPost)
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [setPost])

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
	const post = usePostsContextValue();
	return (
		<PostsContext.Provider value={postsContextValue}>
			<PostsList />
		</PostsContext.Provider>
	);
}

export default Posts;