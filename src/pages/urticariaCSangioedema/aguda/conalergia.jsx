import React from "react";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import TextCardComponent from "../../../components/cards/TextCardComponent";

function UrticariaConAlergiaPage(){
    const history = useHistory();
    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Aguda", active:true},
        {title: "Alergias y desencadenantes", active: false},
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
                <h1>Urticaria asociada con alergias o
                    desencadenantes conocidos</h1>
            </div>
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-4"}>
                <TextCardComponent title={"¿Asociación con el consumo de ciertos alimentos?"}
                titleClass={"text-center"}>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/aguda/alergia/alimentos")}>
                        Si
                    </button>
                </TextCardComponent>
                <TextCardComponent title={"¿Asociación con el uso de ciertos medicamentos?"}
                                   titleClass={"text-center"}>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/aguda/alergia/medicamentos")}>
                        Si
                    </button>
                </TextCardComponent>
                <div className={"col-span-1 sm:col-span-2"}>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/aguda")}>
                        Volver
                    </button>
                </div>
            </div>
        </div>
    </ComplexLayout>;
}

export default React.memo(UrticariaConAlergiaPage);