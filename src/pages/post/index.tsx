import React, { useContext, useEffect } from "react";
import { PostsContext } from "../posts";


function usePostsLoading() {
    const { fetchPosts } = useContext(PostsContext);

    useEffect(() => {
        console.log(fetchPosts);
        fetchPosts();
    }, [fetchPosts])
}

const RenderPost = () => {
	usePostsLoading();
	return (
		<>
		</>
	)
}

//
function Post() {
	return (
        <RenderPost />
	);
}

export default Post;