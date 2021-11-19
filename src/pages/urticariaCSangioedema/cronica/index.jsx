import React from "react";
import { useHistory } from "react-router-dom";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";
import TextCardComponent from "../../../components/cards/TextCardComponent";

function UrticariaCronicaPage(){
    const history = useHistory();

    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Crónica", active:false}
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
        {title:"Temporalidad", to:"/urticaria-cs-angioedema/temporalidad"}
    ];
    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-xl sm:text-3xl m-5 text-secondary"}>
                <h1>Urticaria Crónica: habones con/sin angioedema</h1>
            </div>
            <div className={"text-justify p-4"}>
                <p>Dermatosis caracterizada por habón ("roncha"), bien delimitada, con palidez central y que blanquea
                    a la digitopresión, eritema reflejo alrededor y que se acompaña de prurito intenso.
                    Característicamente evanescente, con duración de la misma lesión generalmente menos de 24 a 36 horas.
                    Sin dejar lesiones residuales. Puede acompañarse o no de angioedema ("hinchazón").
                    <br/><br/>
                    Puede ser la presencia continua<br/>
                    o<br/>
                    recurrencia de lesiones / múltiples exacerbaciones.
                </p>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 md:grid-cols-2 gap-4 mb-4"}>
                <div>
                    <TextCardComponent title={"Inducible"}
                                       titleClass={"text-secondary text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/inducible")}>
                            Si
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"Espontánea"}
                                       titleClass={"text-secondary text-center"}>
                        <button
                            className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/cronica/espontanea")}>
                            Si
                        </button>
                    </TextCardComponent>
                </div>

                <div className={"col-span-1 sm:col-span-3 mt-2"}>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.goBack()}>
                        Volver
                    </button>
                </div>
            </div>
        </div>
    </ComplexLayout>;
}
export default React.memo(UrticariaCronicaPage);