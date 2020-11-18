import React, { useContext } from 'react';
import Image from './../components/Image';
import { getClass } from './../utils/index';
import { Context } from '../Context.js';

function Photos() {
	const { allPhotos } = useContext(Context);
	const imageElements = allPhotos.map((img, index) => (
		<Image
			key={img.id}
			img={img}
			className={getClass(index)}
		/>
	));
	return (
		<main className="photos">
			<h1>Images go here</h1>
			{imageElements}
		</main>
	);
}

export default Photos;
