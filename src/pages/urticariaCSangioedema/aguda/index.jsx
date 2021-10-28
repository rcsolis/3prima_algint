import React from "react";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import TextCardComponent from "../../../components/cards/TextCardComponent";

function UrticariaAgudaPage(){
    const history = useHistory();

    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Aguda", active:false}
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
        {title:"Temporalidad", to:"/urticaria-cs-angioedema/temporalidad"}
    ];

    const openCriterios = (e)=>{
        e.preventDefault();
        history.push("/urticaria-cs-angioedema/aguda/modal");
    };
    const actions = <a className="text-accent" onClick={(e)=>openCriterios(e)}>Ver criterios de anafilaxia</a>;

    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-xl sm:text-3xl m-5 text-secondary"}>
                <h1>Urticaria Aguda: habones con/sin angioedema</h1>
            </div>
            <div className={"text-justify p-4"}>
                <p>Dermatosis caracterizada por habón ("roncha"), bien delimitada, con palidez central y que blanquea a
                    la digitopresión, eritema reflejo alrededor y que se acompaña de prurito intenso. Característicamente
                    evanescente, con duración de la misma lesión generalmente menos de 24 a 36 horas. Sin dejar lesiones
                    residuales. Puede acompañarse o no de angioedema ("hinchazón").
                </p>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-4 mb-4"}>
                <div>
                    <TextCardComponent title={"¿Cumple con criterio de anafilaxia?"}
                                       text={"Urticaria como parte del cuadro clínico de anafilaxia"}
                                       titleClass={"text-secondary"}
                                       actions={actions}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/aguda/anafilaxia")}>
                            Si
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"¿Cursa con proceso infeccioso?"}
                                       text={"Urticaria como parte del cuadro clínico de un proceso infeccioso"}
                                       titleClass={"text-secondary"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/aguda/infeccion")}>
                            Si
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"¿Tiene antecedente alérgicos? ó ¿Encuentra algún desencadenante ?"}
                                       titleClass={"text-secondary"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-cs-angioedema/aguda/alergia")}>
                            Si
                        </button>
                    </TextCardComponent>
                </div>
                <div className={"col-span-1 sm:col-span-3"}>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.goBack()}>
                        Volver
                    </button>
                </div>
            </div>
        </div>
    </ComplexLayout>;
}
export default React.memo(UrticariaAgudaPage);