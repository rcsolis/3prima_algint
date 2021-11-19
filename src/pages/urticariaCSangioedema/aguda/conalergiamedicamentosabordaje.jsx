import React from "react";
import ComplexLayout from "../../../components/layouts/ComplexLayout";
import { useHistory } from "react-router-dom";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";

function UrticariaConAlergiaMedicamentosAbordajePage() {
    const history = useHistory();
    const pageSteps = [
        {title:"Urticaria: habones con/sin angioedema", active:true},
        {title:"Aguda", active:true},
        {title: "Alergias y desencadenantes", active: true},
        {title: "Asociada a medicamentos", active: true},
        {title: "Abordaje Terapéutico", active:false}
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Urticaria: habones c/s angioedema", to:"/urticaria-cs-angioedema"},
        {title:"Temporalidad", to:"/urticaria-cs-angioedema/temporalidad"},
        {title:"Aguda", to:"/urticaria-cs-angioedema/aguda"},
        {title:"Alergias y desencadenantes", to:"/urticaria-cs-angioedema/aguda/alergia"},
        {title:"Medicamentos", to:"/urticaria-cs-angioedema/aguda/alergia/medicamentos"},
    ];
    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                <h1>Abordaje Terapéutico</h1>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-secondary font-bold"}>
                <h2>De acuerdo a gravedad</h2>
            </div>
            <div className={"text-justify p-4 space-y-4"}>
                <p><strong>Leve:</strong> Antihistamínicos de 2da generación, dosis habitual.</p>
                <p><strong>Moderado:</strong> Antihistamínicos de 2da generación (incrementar dosis habitual x2, x3 o máximo x4).</p>
                <p><strong>Grave:</strong> Antihistamínicos de 2da generación (incrementar dosis habitual x2, x3 o máximo x4).
                    Más ciclo corto de esteroide sistémico (dosis equivalente a prednisona/prednisolona 1 mg/kg/día).</p>
                <p><strong>En servicio de urgencias,</strong> si se administra manejo parenteral:<br/>
                    - Antihistamínico IV* de 1ra generación (difenhidramina, cloropiramina)<br/>
                    - Metilprednisolona 1 mg/kg/dosis
                </p>
                <p>
                    NO utilizar esteroide de depósito (betametasona, dexametasona)<br/>
                    Considerar dieta baja en alimentos histaminérgicos (indicación por especialista)
                </p>
            </div>

            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-2 gap-4"}>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/aguda/alergia/medicamentos")}>
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
                    <p>*IV (intravenoso).</p>
                </div>
            </div>

        </div>
    </ComplexLayout>;
}

export default React.memo(UrticariaConAlergiaMedicamentosAbordajePage);