import React from "react";

function ImageCardModalComponent({ imageName, imageName2, children }) {
	return (
		<div className="h-full">
			<div className="card
			bg-white
			shadow-xl
			mb-4
			p-4
			h-auto
			lg:max-h-96
			lg:mx-auto
			lg:w-max
			lg:max-w-5xl">
				<figure className={""}>
					<img src={imageName}
						 className="lg:hidden
						  rounded-xl
						  object-contain"
						 alt="Algoritmo Interactivo" />
					<img src={imageName2}
						 className="hidden
						 lg:block
						 rounded-xl
						 lg:max-h-96
						 max-h-96
						 object-contain" alt="Algoritmo Interactivo" />
				</figure>
			</div>
			{children}
		</div>
	);
}

export default ImageCardModalComponent;
