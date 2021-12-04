import React from "react";
import SimpleLayout from "../../../components/layouts/SimpleLayout";
import TextBreadcumsComponent from "../../../components/navigation/TextBreadcumsComponent";
import { useHistory } from "react-router-dom";
import TextCardComponent from "../../../components/cards/TextCardComponent";
import Dialog from "../../../components/dialog";


function UrticariaCronicaCuestionariosPage(){
    const history = useHistory();
    const [openModal, setOpenModal] = React.useState(false);

    const breadcums = [
        {title: "Inicio", to: "/welcome"}, {title: "Selección", to: "/home"},
        {title: "Urticaria: habones c/s angioedema", to: "/urticaria-cs-angioedema"},
        {title: "Temporalidad", to: "/urticaria-cs-angioedema/temporalidad"},
        {title: "Crónica", to: "/urticaria-cs-angioedema/cronica"},
    ];
    return <SimpleLayout>
        <div className={"w-full"}>
            <Dialog show={openModal} setShow={setOpenModal}/>
            <TextBreadcumsComponent links={breadcums} />
            <div className={"text-center text-2xl sm:text-3xl m-5 text-secondary font-bold"}>
                <h1>Urticaria Crónica</h1>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 md:grid-cols-3 gap-4 mb-4"}>

                <div className={"col-span-1 text-center p-4"}>
                    <p>
                        <strong>Usar en cada consulta</strong><br/>
                        Cuestionario para monitorización
                        del control.
                    </p>
                </div>
                <div className={"col-span-1 md:col-span-2 text-center p-4"}>
                    <p>
                        <strong>Para Especialistas</strong><br/>
                        Cuestionarios para monitorización
                        de la intensidad de la urticaria.
                    </p>
                </div>
                <div>
                    <TextCardComponent title={"UCT"}
                                       text={"Urticaria Control Test"}
                                       titleClass={"text-secondary text-center"}>
                        <a className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                           href={"/files/UCT.pdf"} target="_blank" download>
                            Descargar
                        </a>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"UAS7"}
                                       text={"Urticaria Activity Score"}
                                       titleClass={"text-secondary text-center"}>
                        <a className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                           href={"/files/UAS7.pdf"} target="_blank" download>
                            Descargar
                        </a>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"CU-Q2oL"}
                                       text={"Chronic Urticaria Quality of Life Questionnaire"}
                                       titleClass={"text-secondary text-center"}>
                        <a className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                           href={"/files/CU-Q2oL.pdf"} target="_blank" download>
                            Descargar
                        </a>
                    </TextCardComponent>
                </div>

            </div>
            <div className={"text-center p-4 mb-4"}>
                <p>
                    Si en el paciente el síntoma predominante es el <strong>angioedema</strong>,
                    utilizar los siguientes cuestionarios de apoyo
                </p>
            </div>
            <div className={"mb-4"}>
                <button
                    className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                    onClick={() => history.push("/urticaria-angioedema/cuestionarios")}>
                    Ver Cuestionarios
                </button>
            </div>
            <div>
                <button
                    className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                    onClick={() => setOpenModal(true)}>
                    Inicio del algoritmo
                </button>
            </div>
        </div>
    </SimpleLayout>
}

export default React.memo(UrticariaCronicaCuestionariosPage);

