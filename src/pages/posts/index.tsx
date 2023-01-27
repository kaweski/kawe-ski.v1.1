import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import CREDENTIALS from "./tumblr.credentials";
import parse from 'html-react-parser';
import Tag from "../../components/tag";
import './posts.scss';
import Button from "../../components/button";
import Icon from '../../media/go-link.svg';

export interface PropsPost {
	id: number,
	post_url: string,
	slug: string,
	timestamp: number,
	date: string,
	tags: string[],
	short_url: string,
	summary: string,
	title: string,
	body: string
}

interface PostsContextData {
    posts: PropsPost[];
    isLoading: boolean;
    fetchPosts: () => void;
}

const postsContextDefaultValue: PostsContextData = {
	posts: [],
	isLoading: false,
	fetchPosts: () => null,
}

const PostsContext = createContext<PostsContextData>(postsContextDefaultValue);

const formatDate = (dateString: string) => {
	return new Date(dateString).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric"})
}

const TumblrPosts = () => {
	const { posts } = useContext(PostsContext);
	const { fetchPosts } = useContext(PostsContext);

	useEffect(() => {
		fetchPosts();
	}, [fetchPosts])

	return (
		<>
			{posts.map(post => {
				return (
					<article className='box mb-10 flex flex-col' key={post.id}>
						<div className='post-header py-4 px-5 mb-5 flex flex-row justify-between items-start'>
							<h1 className="post-title title lightgray">
								{post.summary}
							</h1>
							<div className="post-date pl-4">
								<Tag text={formatDate(post.date)}/>
							</div>
						</div>
						<div className='text lightgray post-body px-5 pb-4'>
							{parse(post.body)}
						</div>
						<div className="post-footer p-5 flex flex-row justify-between items-center">
							<ul className="post-tags flex flex-row items-end">
								{post.tags.map((tag) => <li><Tag text={tag}/></li>)}
							</ul>
							<Button url={`${post.slug}`} icon={true} classes='button-white button-dark' content={Icon} external={false} />
						</div>
					</article>
				)
			})}
		</>
	)
}

function usePostsContextValue(): PostsContextData {
	const [posts, setPosts] = useState<PropsPost[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const fetchPosts = useCallback(() => {
		setIsLoading(true);
		fetch(`https://api.tumblr.com/v2/blog/kaweski/posts?api_key=${CREDENTIALS.consumer_key}`,
			{ method: 'GET' })
			.then(response => response.json())
			.then((fetchedPosts) => {
				setPosts(fetchedPosts.response.posts);
			})
			.finally(() => {
				setIsLoading(false);
			})
	}, [setPosts]);


	// const getPost = useCallback(() => {
	// 	setIsLoading(true);
	// 	fetch(`https://api.tumblr.com/v2/blog/kaweski/posts?api_key=${CREDENTIALS.consumer_key}`,
	// 		{ method: 'GET' })
	// 		.then(response => response.json())
	// 		.then((fetchedPost) => {
	// 			fetchedPost.response.posts.filter((post) => post.slug)
	// 			setPost(fetchedPost);
	// 		})
	// 		.finally(() => {
	// 			setIsLoading(false);
	// 		})
	// }, [setPost]);

	return {
		posts,
		isLoading,
		fetchPosts
	}
}

//
function Posts() {
	const postsContextValue = usePostsContextValue();
	return (
		<PostsContext.Provider value={postsContextValue}>
			<TumblrPosts />
		</PostsContext.Provider>
	);
}

export default Posts;