import React from "react";
import TextBreadcumsComponent from "../../components/navigation/TextBreadcumsComponent";
import ComplexLayout from "../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextCardComponent from "../../components/cards/TextCardComponent";

function TemporalidadPage(){
    const history = useHistory();
    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:false},
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
    ];

    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full"}>
            <TextBreadcumsComponent links={breadcums} />
            <div className={"text-center text-xl m-5"}>
                <p>Seleccione la temporalidad de los síntomas</p>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-2 sm:grid-rows-2 gap-4"}>
                <div className={"col-span-1"}>
                    <TextCardComponent title={"URTICARIA AGUDA"} text={"Menos de 5 semanas"} titleClass={"text-primary"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/aguda")}>
                            Seleccionar
                        </button>
                    </TextCardComponent>
                </div>
                <div className={"col-span-1"}>
                    <TextCardComponent title={"URTICARIA CRÓNICA"} text={"Más de 6 semanas"} titleClass={"text-primary"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica")}>
                            Seleccionar
                        </button>
                    </TextCardComponent>
                </div>
                <div className={"col-span-1 sm:col-span-2 mt-2"}>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema")}>
                        Volver
                    </button>
                </div>
            </div>
        </div>
    </ComplexLayout>
}

export default React.memo(TemporalidadPage);