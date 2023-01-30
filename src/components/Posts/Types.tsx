export interface PostType {
	id: number,
	id_string: string,
	post_url: string,
	slug: string,
	date: string,
	short_url: string,
	tags?: string[],
	summary?: string,
	title?: string,
	body?: string
}

export const postTypeValue: PostType = {
	id: 0,
	id_string: '',
	post_url: '',
	slug: '',
	date: '',
	short_url: '',
}

export interface PostsContextData {
    posts: PostType[];
    isLoading: boolean;
    fetchPosts: () => void;
}

export const postsContextValue: PostsContextData = {
	posts: [],
	isLoading: false,
	fetchPosts: () => null
}
