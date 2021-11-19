import React from "react";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";

function UrticariaConAnafilaxiaPage(){
    const history = useHistory();
    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Aguda", active:true},
        {title: "Parte del cuadro clínico de anafilaxia", active: false},
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
        {title:"Temporalidad", to:"/urticaria-cs-angioedema/temporalidad"},
        {title:"Aguda", to:"/urticaria-cs-angioedema/aguda"},
    ];

    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                <h1>Urticaria como parte del cuadro
                    clínico de anafilaxia</h1>
            </div>
            <div className={"text-justify p-4"}>
                <p>Reacción de hipersensibilidad multisistémica grave y potencialmente fatal.</p>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                <h2>Recomendación</h2>
            </div>
            <div className={"text-justify p-4"}>
                <ul className={"list-decimal space-y-5 list-inside"}>
                    <li>
                        Manejo con primera línea de tratamiento. Adrenalina IM*.
                    </li>
                    <li>
                        En caso de persistir o progresión de sintomatología, referir al servicio de urgencias.
                    </li>
                    <li>
                        Una vez resuelta la urgencia médica, referir al alergólogo para determinar perfil de
                        sensibilización alérgica y completar el abordaje.
                    </li>
                </ul>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-4"}>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.goBack()}>
                        Volver
                    </button>
                </div>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/welcome")}>
                        Inicio del algoritmo
                    </button>
                </div>
                <div className={"col-span-1 sm:col-span-2 text-xs text-left italic"}>
                    <p>*IM (intramuscular).</p>
                </div>
            </div>
        </div>
    </ComplexLayout>
}

export default React.memo(UrticariaConAnafilaxiaPage);