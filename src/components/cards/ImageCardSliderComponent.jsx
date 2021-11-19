import React from "react";

function ImageCardSliderComponent({ imageName, imageName2, children }) {
    return (
        <div className={"mx-auto h-full"}>
            <div className="card bg-white shadow-xl p-4 h-auto mx-auto ">
                <figure className={"h-auto max-h-full"}>
                    <img src={imageName} className="md:hidden rounded-xl" alt="Algoritmo Interactivo" />
                    <img src={imageName2} className="hidden md:block rounded-xl" alt="Algoritmo Interactivo" />
                </figure>
            </div>
            {children}
        </div>
    );
}

export default ImageCardSliderComponent;
