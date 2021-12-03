import React from "react";

function ImageCardComponent({ imageName, imageName2, children, hasbutton }) {

	return (
		<div className={!hasbutton && "h-full"}>
			<div className="card
			bg-white
			shadow-xl
			mb-4
			p-4
			h-auto
			lg:max-h-96
			lg:mx-auto
			lg:w-4/5
			lg:max-w-5xl">
				<figure className={""}>
					<img src={imageName} className="lg:hidden rounded-xl" alt="Algoritmo Interactivo" />
					<img src={imageName2}
						 className="hidden
						 lg:block
						 rounded-xl
						 lg:max-h-96
						 max-h-96
						 object-contain"
						 alt="Algoritmo Interactivo" />
				</figure>
			</div>
			{children}
		</div>
	);
}

export default ImageCardComponent;
