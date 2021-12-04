import React from "react"
import TextBreadcumsComponent from "../../components/navigation/TextBreadcumsComponent";
import { useHistory } from "react-router-dom";
import ComplexLayout from "../../components/layouts/ComplexLayout";
import Dialog from "../../components/dialog";

function UrticariaAngioedemaTratamientoPage(){
    const history = useHistory();
    const [openModal, setOpenModal] = React.useState(false);

    const pageSteps = [
        {title:"Angioedema sin habones", active:true},
        {title:"Abordaje inicial", active:true},
        {title:"Angioedema Hereditario", active:true},
        {title:"Criterios de referencia", active:false}
    ];

    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Angioedema sin habones", to:"/urticaria-angioedema"},
        {title:"Abordaje", to:"/urticaria-angioedema/abordaje"},
    ];
    return <ComplexLayout steps={pageSteps}>
        <Dialog show={openModal} setShow={setOpenModal}/>
        <div className={"w-full mb-4"}>
            <TextBreadcumsComponent links={breadcums}/>
            <div className={"text-center text-2xl sm:text-3xl m-5 text-yellow-400 font-bold"}>
                <h1>Angioedema sin habones</h1>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-yellow-400 font-bold"}>
                <h2>Criterios para Referir</h2>
            </div>
            <div className={"p-4 mb-4"}>
                <p>
                    - Paciente con Angioedema Hereditario<br/>
                    - Paciente con síndrome linfoproliferativo<br/>
                    - Paciente con patología autoinmune<br/>
                    - Paciente con angioedema poco o mal controlada a pesar de manejo establecido<br/>
                    - Paciente con angioedema refractaria a tratamiento
                </p>
            </div>
            <div className={"text-xl sm:text-2xl m-5 text-yellow-400 font-bold"}>
                <h2>Recomendación</h2>
            </div>
            <div className={"p-4 mb-4"}>
                <p>Considerar que algunos pacientes con <strong>URTICARIA</strong> presentan angioedema como única
                    manifestación (angioedema sin habones).</p>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-4 my-4"}>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-cs-angioedema/temporalidad")}>
                        Abordaje de Urticaria
                    </button>
                </div>
                <div>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => setOpenModal(true)}>
                        Inicio del Algoritmo
                    </button>
                </div>
                <div>
                    <button
                        className={"btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-angioedema/cuestionarios")}>
                        Cuestionarios de Apoyo
                    </button>
                </div>
            </div>
        </div>
    </ComplexLayout>;
}

export default React.memo(UrticariaAngioedemaTratamientoPage);