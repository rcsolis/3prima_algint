import React from "react";
import FullScreenModalComponent from "../../components/modals/FullScreenModalComponent";
import { useHistory } from "react-router-dom";
import Image1 from "../../assets/images/dermatitiscontacto/dermatitiscontacto1.png";
import Image1s2 from "../../assets/images/dermatitiscontacto/dermatitiscontacto1s2x.png";
import Image2 from "../../assets/images/dermatitiscontacto/dermatitiscontacto2.png";
import Image2s2 from "../../assets/images/dermatitiscontacto/dermatitiscontacto2s2x.png";
import ImageCardComponent from "../../components/cards/ImageCardComponent";


function UrticariaAgudaDiagnosticosContactoModalPage(){
    const history = useHistory();
    const GoBack = ()=>{
        history.push("/urticaria-cs-angioedema/aguda/infeccion/diagnosticos");
    }
    return <FullScreenModalComponent>
        <div className={"w-full h-full bg-primary-gradient text-white rounded-2xl p-5"}>
            <div className={"text-right"}>
                <button className="btn btn-outline btn-circle btn-xs text-white" onClick={GoBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div className={"text-center mb-10"}>
                <h1 className={"font-bold text-lg sm:text-xl"}>Dermatitis por contacto</h1>
            </div>
            <div>
                <div className="w-full carousel">
                    <div id="slide1" className="relative w-full pt-20 carousel-item">
                        <ImageCardComponent imageName={Image1} imageName2={Image1s2}>
                            <div className={"text-center font-bold"}>
                                <p>Dermatitis Alérgica</p>
                            </div>
                        </ImageCardComponent>
                            <div
                                className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/contacto#slide2" className="btn btn-circle">❮</a>
                                <a href="/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/contacto#slide2" className="btn btn-circle">❯</a>
                            </div>
                    </div>
                    <div id="slide2" className="relative w-full pt-20 carousel-item">
                        <ImageCardComponent imageName={Image2} imageName2={Image2s2}>
                            <div className={"text-center font-bold"}>
                                <p>Dermatitis Irritativa</p>
                            </div>
                        </ImageCardComponent>
                        <div
                            className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/contacto#slide1" className="btn btn-circle">❮</a>
                            <a href="/urticaria-cs-angioedema/aguda/infeccion/diagnosticos/modal/contacto#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </FullScreenModalComponent>
}

export default React.memo(UrticariaAgudaDiagnosticosContactoModalPage);