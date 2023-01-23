import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export interface PropsPost {
	id: number,
	title: string,
	body: string
}

export interface PostsContextData {
    posts: PropsPost[];
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

	usePostsLoading();

	function render(post: PropsPost) {
		const slug = post.title.replaceAll(' ', '-')
		return (
			<div>
				<h2 className='title white'>{post.title}</h2>
				<p className='text white'>{post.body}</p>
				<Link className='button button-dark text white button-orange' onClick={singlePost(post.id)} to={slug}>
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
	const [posts, setPosts] = useState<PropsPost[]>([]);
	let [post, setPost] = useState<PropsPost[]>([]);
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

	const getPost = useCallback((postId: number) => {
		setIsLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then(response => response.json())
			.then((fetchedPost) => {
				setPost(fetchedPost);
			})
			.finally(() => {
				setIsLoading(false);
			});
			// eslint-disable-next-line
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