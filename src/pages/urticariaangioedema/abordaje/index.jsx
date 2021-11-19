import React from "react";
import { useHistory } from "react-router-dom";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";
import TextCardComponent from "../../../components/cards/TextCardComponent";

function UrticariaAngioedemaAbordajePage(){
    const history = useHistory();
    const pageSteps = [
        {title:"Angioedema sin habones", active:true},
        {title:"Abordaje inicial", active:false},
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Angioedema sin habones", to:"/urticaria-angioedema"},
    ];
    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-yellow-400 font-bold"}>
                <h1>Abordaje Inicial
                    Angioedema sin habones</h1>
            </div>
            <TextCardComponent text={"Mi paciente cuenta con antecedente heredofamiliar de angioedema hereditario y/o su cuadro se acompaña de síntomas sistémicos (artralgias/artritis, fiebre, dolor abdominal u otros síntomas gastrointestinales) y/o no ha respondido a tratamiento con antihistamínicos o glucocorticoides sistémicos."}
                               titleClass={"text-center"}>
                <button
                    className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                    onClick={() => history.push("/urticaria-angioedema/diagnostico")}>
                    Seleccionar
                </button>
            </TextCardComponent>
            <div className={"grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-4 my-4"}>
                <TextCardComponent text={"¿Está asociado al uso de algún medicamento como AINE o IECA?"}
                                   titleClass={"text-center"}>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/aguda/alergia/medicamentos")}>
                        Si
                    </button>
                </TextCardComponent>
                <TextCardComponent text={"¿Responde a antihistamínicos?"}
                                   titleClass={"text-center"}>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-angioedema/abordaje/antihistaminicos")}>
                        Si
                    </button>
                </TextCardComponent>
                <TextCardComponent text={"¿Responde a glucocorticoide sistémico?"}
                                   titleClass={"text-center"}>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-angioedema/abordaje/sistemico")}>
                        Si
                    </button>
                </TextCardComponent>
            </div>
            <div className={"mb-4"}>
                <button
                    className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                    onClick={() => history.push("/urticaria-angioedema")}>
                    Volver
                </button>
            </div>
        </div>
    </ComplexLayout>;
}
export default React.memo(UrticariaAngioedemaAbordajePage);