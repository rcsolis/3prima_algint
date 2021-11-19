import React from "react";

function ImageCardSliderComponent({ imageName, imageName2, children }) {
    return (
        <div className={"mx-auto h-full"}>
            <div className="card bg-white shadow-xl
            p-4 h-auto mx-auto
            lg:h-auto lg:w-4/5 lg:max-w-5xl">
                <figure className={"max-h-full"}>
                    <img src={imageName} className="lg:hidden
                     rounded-xl
                     h-full object-contain"
                         alt="Algoritmo Interactivo" />
                    <img src={imageName2} className="hidden
                    lg:block rounded-xl
                    h-full object-contain" alt="Algoritmo Interactivo" />
                </figure>
            </div>
            {children}
        </div>
    );
}

export default ImageCardSliderComponent;
