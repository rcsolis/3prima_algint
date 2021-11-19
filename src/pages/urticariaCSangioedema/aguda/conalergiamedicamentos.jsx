import React from "react";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";

function UrticariaConAlergiaMedicamentosPage() {
    const history = useHistory();
    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Aguda", active:true},
        {title: "Alergias y desencadenantes", active: true},
        {title: "Asociada a medicamentos", active: false},
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
        {title:"Temporalidad", to:"/urticaria-cs-angioedema/temporalidad"},
        {title:"Aguda", to:"/urticaria-cs-angioedema/aguda"},
        {title:"Alergias y desencadenantes", to:"/urticaria-cs-angioedema/aguda/alergia"},
    ];
    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                <h1>Urticaria asociada a medicamentos</h1>
            </div>
            <div className={"text-justify p-4"}>
                <p>
                    Reacción adversa desencadenada por un antígeno medicamentoso
                    específico (sustancia activa o vehículo), independiente de la dosis.<br/>
                    Es reproducible (es decir siempre que se expone se presentan los síntomas).<br/><br/>
                    Se identifica como alergia cuando es mediada por mecanismos inmunológicos
                    o como intolerancia cuando se trata de una inflamación tras el consumo de AINES o IECA*.
                </p>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                <h2>Recomendación</h2>
            </div>
            <div className={"text-justify p-4"}>
                <ul className={"list-decimal space-y-5 list-inside"}>
                    <li>
                        Evitar desencadenante.
                    </li>
                    <li>
                        Referir al alergólogo para determinar perfil de sensibilización alérgica y/o
                        prueba de provocación en caso necesario, así como indicar alternativas
                        terapéuticas.
                    </li>
                    <li>
                        Considerar que algunos pacientes presentan angioedema como única manifestación.
                    </li>
                </ul>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-4"}>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/aguda/alergia/medicamentos/abordaje")}>
                        Abordaje Terapéutico
                    </button>
                </div>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/aguda/infeccion/diagnosticos")}>
                        Diagnósticos Diferenciales
                    </button>
                </div>
                <div className={"col-span-1 sm:col-span-2 text-xs text-left italic"}>
                    <p>*AINEs (antiinflamatorios no esteroideos. IECAs (Inhibidores de la enzima convertidora de angiotensina)</p>
                </div>
            </div>
        </div>
    </ComplexLayout>;
}

export default React.memo(UrticariaConAlergiaMedicamentosPage);