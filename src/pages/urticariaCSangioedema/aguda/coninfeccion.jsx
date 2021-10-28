import React from "react";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";

function UrticariaConInfeccionPage() {
    const history = useHistory();
    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Aguda", active:true},
        {title: "Parte del cuadro clínico de infección", active: false},
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
        {title:"Temporalidad", to:"/urticaria-cs-angioedema/temporalidad"},
        {title:"Aguda", to:"/urticaria-cs-angioedema/aguda"},
    ];
    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                <h1>Urticaria como parte del cuadro
                    clínico de un proceso infeccioso</h1>
            </div>
            <div className={"text-justify p-4"}>
                <p>
                    Durante un proceso infeccioso agudo o subagudo se han identificado
                    diferentes microorganismos (agentes virales, bacterianos, hongos y parásitos
                    que pueden desencadenar el cuadro clínico de urticaria aguda.
                </p>
            </div>
            <div className={"text-center text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                <h2>Recomendación</h2>
            </div>
            <div className={"text-justify p-4"}>
                <ul className={"list-decimal space-y-5 list-inside"}>
                    <li>
                        Manejo sintomático según corresponda.
                    </li>
                </ul>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-4"}>
                <div>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/aguda/infeccion/abordaje")}>
                        Abordaje Terapéutico
                    </button>
                </div>
                <div>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/aguda/infeccion/diagnosticos")}>
                        Diagnósticos Diferenciales
                    </button>
                </div>
            </div>
        </div>
    </ComplexLayout>;
}

export default React.memo(UrticariaConInfeccionPage);