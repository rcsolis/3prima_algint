import React from "react";

function ImageCardComponent({ imageName, imageName2, children }) {
	return (
		<div>
			<div className="card bg-white shadow-xl mb-4 p-4">
				<figure>
					<img src={imageName} className="md:hidden rounded-xl" alt="Algoritmo Interactivo" />
					<img src={imageName2} className="hidden md:block rounded-xl" alt="Algoritmo Interactivo" />
				</figure>
			</div>
			{children}
		</div>
	);
}

export default ImageCardComponent;
