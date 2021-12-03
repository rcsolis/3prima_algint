import React from "react";

function ImageCardSliderComponent({ imageName, imageName2, children }) {
    return (
        <div className={"mx-auto h-full"}>
            <div className="card
            bg-white
            shadow-xl
            p-4
            h-auto
            md:mx-auto
            md:max-h-96
            md:w-4/5
            md:max-w-3xl
            lg:max-w-5xl">
                <figure className={""}>
                    <img src={imageName} className="lg:hidden
                     rounded-xl
                     object-contain"
                         alt="Algoritmo Interactivo" />
                    <img src={imageName2} className="hidden
                    lg:block
                    rounded-xl
				    max-h-96
                    object-contain" alt="Algoritmo Interactivo" />
                </figure>
            </div>
            {children}
        </div>
    );
}

export default ImageCardSliderComponent;
