import React, { createContext, useContext, useEffect, useState } from "react";
import parse from 'html-react-parser';
import { formatDate } from "../Utils";
import Box from "../Box";
import { PostsContextData, postsContextValue, PostType } from './Types'
import { UpdatePostsList } from "./Request";
import { Link, useLocation } from "react-router-dom";

const PostsContext = createContext<PostsContextData>(postsContextValue);

const Render: React.FC = () => {
	const { posts } = useContext(PostsContext)
	const { fetchPosts } = useContext(PostsContext)
	const location = useLocation()
	const [ currentPost, setCurrentPost ] = useState<PostType | null>()

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts])

	useEffect(() => {
		const filteredPost = posts.filter(post => location.pathname.includes(post.slug))
		setCurrentPost(filteredPost[0])
	}, [location, posts])

	return (
		<>
			{currentPost
				?
					<>
						<Link to="/posts">Back</Link>
						<Box>
							<p>{formatDate(currentPost.date)}</p>
							<h2>{currentPost.summary}</h2>
							{currentPost.body ? <div>{parse(currentPost.body)}</div> : ''}
							{currentPost.tags?.map((tag, key) => <span key={key}>{tag}</span>)}
						</Box>
					</>
				: posts.map((post, key) => {
					return (
						<Box key={key}>
							<p>{formatDate(post.date)}</p>
							<h2>{post.summary}</h2>
							{post.body ? <div>{parse(post.body)}</div> : ''}
							<Link to={post.slug}>read more</Link>
						</Box>
					)
				})
			}
		</>
	)
}

function Posts() {
	const postsContextValue = UpdatePostsList();
	return (
		<PostsContext.Provider value={postsContextValue}>
			<Render />
		</PostsContext.Provider>
	);
}

export default Posts;