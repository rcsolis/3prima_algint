import React from "react";
import FullScreenModalComponent from "../../../components/modals/FullScreenModalComponent";
import { useHistory } from "react-router-dom";
import Image1 from "../../../assets/images/cronica/buloso.png"
import Image1s2 from "../../../assets/images/cronica/buloso@2x.png";
import ImageCardModalComponent from "../../../components/cards/ImageCardModalComponent";


function UrticariaCronicaDiagnosticosBulosoPage(){
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
                    Pénfigo buloso
                </h1>
            </div>
            <div className={"max-w-full h-auto"}>
                <ImageCardModalComponent imageName={Image1} imageName2={Image1s2}>
                    <div className={"text-center font-bold"}>
                        <p>
                            Estadio preampolloso.
                        </p>
                    </div>
                </ImageCardModalComponent>
            </div>
        </div>
    </FullScreenModalComponent>
}

export default React.memo(UrticariaCronicaDiagnosticosBulosoPage);