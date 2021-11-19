import React from "react";
import { useHistory } from "react-router-dom";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";

function UrticariaAngioedemaAbordajeSistemicoPage(){
    const history = useHistory();
    const pageSteps = [
        {title:"Angioedema sin habones", active:true},
        {title:"Abordaje inicial", active:true},
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Angioedema sin habones", to:"/urticaria-angioedema"},
    ];
    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-yellow-400 font-bold"}>
                <h1>Abordaje Inicial Angioedema sin habones</h1>
            </div>
            <div className={"p-4 mb-4"}>
                <p>Si su paciente responde a glucocorticoides sistémicos,
                primero se deberá descartar:<br/><br/>
                    - Enfermedad linfoproliferativa<br/>
                    - Enfermedad autoinmune
                </p>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-yellow-400"}>
                <h2>Recomendación</h2>
            </div>
            <div className={"p-4 mb-4"}>
                Algunos pacientes presentan angioedema como única manifestación.<br/>
                Continuar con abordaje inicial de Urticaria.
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4 my-4"}>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-angioedema/abordaje")}>
                        Volver
                    </button>
                </div>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/temporalidad")}>
                        Abordaje de Urticaria
                    </button>
                </div>
            </div>

        </div>
    </ComplexLayout>;
}
export default React.memo(UrticariaAngioedemaAbordajeSistemicoPage);