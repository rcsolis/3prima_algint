import React from "react"
import SimpleLayout from "../../components/layouts/SimpleLayout";
import TextBreadcumsComponent from "../../components/navigation/TextBreadcumsComponent";
import { useHistory } from "react-router-dom";
import TextCardComponent from "../../components/cards/TextCardComponent";

function UrticariaAngioedemaCuestionariosPage(){
    const history = useHistory();
    const breadcums = [
        { title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" },
        {title:"Angioedema sin habones", to:"/urticaria-angioedema"},
        {title:"Abordaje", to:"/urticaria-angioedema/abordaje"},
    ];

    return <SimpleLayout>
        <div className={"w-full"}>
            <TextBreadcumsComponent links={breadcums} />
            <div className={"text-center text-2xl sm:text-3xl m-5 text-yellow-400 font-bold"}>
                <h1>Angioedema sin habones</h1>
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
                    <TextCardComponent title={"AECT"}
                                       text={"The Angioedema Control Test"}
                                       titleClass={"text-yellow-400 text-center"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-angioedema/cuestionarios")}>
                            Descargar
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"AAS"}
                                       text={"Angioedema Activity Score"}
                                       titleClass={"text-yellow-400 text-center"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-angioedema/cuestionarios")}>
                            Descargar
                        </button>
                    </TextCardComponent>
                </div>
                <div>
                    <TextCardComponent title={"AE-QoL"}
                                       text={"Angioedema Quality of Life Questionnaire "}
                                       titleClass={"text-yellow-400 text-center"}>
                        <button
                            className={"btn btn-block btn-primary btn-primary-gradient"}
                            onClick={() => history.push("/urticaria-angioedema/cuestionarios")}>
                            Descargar
                        </button>
                    </TextCardComponent>
                </div>

            </div>
            <div>
                <button
                    className={"btn btn-block btn-primary btn-primary-gradient"}
                    onClick={() => history.push("/welcome")}>
                    Inicio del algoritmo
                </button>
            </div>
        </div>
    </SimpleLayout>;
}

export default React.memo(UrticariaAngioedemaCuestionariosPage);