import React from "react";
import FullScreenModalComponent from "../../../components/modals/FullScreenModalComponent";
import { useHistory } from "react-router-dom";
import Image1 from "../../../assets/images/cronica/vasculitica.png"
import Image1s2 from "../../../assets/images/cronica/vasculitica@2x.png";
import ImageCardComponent from "../../../components/cards/ImageCardComponent";


function UrticariaCronicaDiagnosticosVasculiticaPage(){
    const history = useHistory();
    const GoBack = ()=>{
        history.push("/urticaria-cs-angioedema/cronica/diagnosticos");
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
                <h1 className={"font-bold text-lg sm:text-xl"}>
                    Urticaria vasculítica
                </h1>
            </div>
            <div>
                <ImageCardComponent imageName={Image1} imageName2={Image1s2}>
                    <div className={"text-center font-bold"}>
                        <p>
                            Lesiones con duración mayor de 24 a 36 horas, lesiones con hiperpigmentación
                            residual, dolor, ardor, puede acompañarse de púrpura no trombocitopénica
                            y eritema en palmas y plantas, así como datos de mucositis.
                        </p>
                    </div>
                </ImageCardComponent>
            </div>
        </div>
    </FullScreenModalComponent>
}

export default React.memo(UrticariaCronicaDiagnosticosVasculiticaPage);