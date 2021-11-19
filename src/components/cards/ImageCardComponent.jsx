import React from "react";

function ImageCardComponent({ imageName, imageName2, children, hasbutton }) {
	return (
		<div className={!hasbutton && "h-full"}>
			<div className="card bg-white shadow-xl mb-4 p-4 h-auto">
				<figure className={"max-h-full"}>
					<img src={imageName} className="lg:hidden rounded-xl" alt="Algoritmo Interactivo" />
					<img src={imageName2} className="hidden lg:block rounded-xl" alt="Algoritmo Interactivo" />
				</figure>
			</div>
			{children}
		</div>
	);
}

export default ImageCardComponent;
