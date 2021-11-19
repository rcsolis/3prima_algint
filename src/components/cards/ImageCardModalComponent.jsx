import React from "react";

function ImageCardModalComponent({ imageName, imageName2, children }) {
	
	return (
		<div className="h-full">
			<div className="card bg-white shadow-xl
			mb-4 p-4 h-auto
			lg:h-full lg:mx-auto lg:w-4/5
			lg:max-w-5xl">
				<figure className={"max-h-full"}>
					<img src={imageName}
						 className="lg:hidden
						  rounded-xl
						  h-full object-contain"
						 alt="Algoritmo Interactivo" />
					<img src={imageName2}
						 className="hidden
						 lg:block rounded-xl
						 h-full object-contain" alt="Algoritmo Interactivo" />
				</figure>
			</div>
			{children}
		</div>
	);
}

export default ImageCardModalComponent;
