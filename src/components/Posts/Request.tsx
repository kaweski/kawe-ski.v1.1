import { useCallback, useState } from 'react'
import { PostsContextData, PostType } from './Types'
import FakeContent from '../../assets/posts.json'
// import { API_KEY } from './Credential'
// import { useLocation } from 'react-router-dom'

export function UpdatePostsList(): PostsContextData {
	const [posts, setPosts] = useState<PostType[]>([])
	const [isLoading, setIsLoading] = useState(false)

	/**
	 * loads all posts from tumblr
	 */
	const fetchPosts = useCallback(() => {
		setIsLoading(true)
		// fetch(`https://api.tumblr.com/v2/blog/kaweski/posts?api_key=${API_KEY}`,
		// 	{ method: 'GET' })
		// 	.then(response => response.json())
		// 	.then((fetchedPosts) => {
		// 		setPosts(fetchedPosts.response.posts)
		// 	})
		// 	.finally(() => {
		// 		setIsLoading(false);
		// 	})
		setPosts(FakeContent.response.posts)
		setIsLoading(false);
	}, [setPosts])

	return {
		posts,
		isLoading,
		fetchPosts
	}
}
