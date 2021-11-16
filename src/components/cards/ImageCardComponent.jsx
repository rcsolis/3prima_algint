import React from "react";

function ImageCardComponent({ imageName, imageName2, children }) {
	return (
		<div className={"h-full"}>
			<div className="card bg-white shadow-xl mb-4 p-4 h-full">
				<figure className={"max-h-full"}>
					<img src={imageName} className="md:hidden rounded-xl" alt="Algoritmo Interactivo" />
					<img src={imageName2} className="hidden md:block rounded-xl max-h-full" alt="Algoritmo Interactivo" />
				</figure>
			</div>
			{children}
		</div>
	);
}

export default ImageCardComponent;
