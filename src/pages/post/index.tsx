import React from "react";
import fs from 'fs'; // access to the files
import { join } from 'path';

interface Props {
}

const Post: React.FC<Props> = () => {

	// const postsDirectory = join(process.cwd(), './post/posts/');

	// function getMarkdownsFiles() {
	// 	/**
	// 	 * Essa função diz, leia o nome de
	// 	 * todos os arquivos dentro da pasta
	// 	 * que eu especifiquei na variável
	// 	 * postsDirectory e me retorne eles
	// 	 * em uma array.
	// 	 */
	// 	return fs.readdirSync(postsDirectory);
	// }

	return (
		<article className='box p-4'>
			{/* {getMarkdownsFiles()} */}
		</article>
	)
}

export default Post;