import React from "react";
import { useParams } from "react-router-dom";


const Post = () => {

    let {post} = useParams();

	return (
        <article className='box p-4 mb-4'>
            <h2 className='title white'>{post}</h2>
            <div className='text white'>body</div>
        </article>
	);
}

export default Post;