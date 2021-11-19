import React from "react"
import TextBreadcumsComponent from "../../components/navigation/TextBreadcumsComponent";
import { useHistory } from "react-router-dom";
import ComplexLayout from "../../components/layouts/ComplexLayout";

function UrticariaAngioedemaDiagnosticoPage(){
    const history = useHistory();
    const pageSteps = [
        {title:"Angioedema sin habones", active:true},
        {title:"Abordaje inicial", active:true},
        {title:"Angioedema Hereditario", active:false},
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Angioedema sin habones", to:"/urticaria-angioedema"},
        {title:"Abordaje", to:"/urticaria-angioedema/abordaje"},
    ];
    return <ComplexLayout steps={pageSteps}>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-yellow-400 font-bold"}>
                <h1>Angioedema Hereditario</h1>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-yellow-400 font-bold"}>
                <h2>Abordaje Diagnóstico</h2>
            </div>
            <div className={"p-4 mb-4"}>
                <p>- Niveles séricos C3 Y C4 del complemento</p>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-yellow-400 font-bold"}>
                <h2>Realizar por especialista</h2>
            </div>
            <div className={"p-4 mb-4"}>
                <p>- Solicitar Inhibidor C1 esterasa cuantitativo y funcional</p>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-yellow-400 font-bold"}>
                <h2>Abordaje de patología autoinmune</h2>
            </div>
            <div className={"p-4 mb-4"}>
                <p>
                    - Anticuerpos antinucleares<br/>
                    - Biometría hemática
                </p>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-yellow-400 font-bold"}>
                <h2>Sospecha de síndrome linfoproliferativo</h2>
            </div>
            <div className={"p-4 mb-4"}>
                <p>
                    - Referir al especialista a la brevedad
                </p>
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
                        onClick={() => history.push("/urticaria-angioedema/tratamiento")}>
                        Criterios de Referencia
                    </button>
                </div>
            </div>
        </div>
    </ComplexLayout>;
}

export default React.memo(UrticariaAngioedemaDiagnosticoPage);