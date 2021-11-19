import React from "react"
import SimpleLayout from "../../components/layouts/SimpleLayout";
import TextBreadcumsComponent from "../../components/navigation/TextBreadcumsComponent";
import ImageCardComponent from "../../components/cards/ImageCardComponent";
import Image1 from "../../assets/images/angioedema.png";
import Image1s2x from "../../assets/images/angioedema@2x.png";
import { useHistory } from "react-router-dom";

function UrticariaAngioedemaPage(){
    const history = useHistory();

    return <SimpleLayout>
        <div className={"w-full"}>
            <TextBreadcumsComponent links={[{ title: "Inicio", to: "/welcome" }, { title: "Selección", to: "/home" }]} />
            <div className={"text-center text-xl m-5"}>
                <p>Seleccione el diagnóstico clínico de su paciente</p>
            </div>
            <div className={"text-center text-xl sm:text-3xl m-5 text-yellow-400"}>
                <h1>Angioedema sin habones</h1>
            </div>
            <div className={"grid grid-cols-1 grid-rows-1 sm:grid-cols-4 sm:grid-rows-2 gap-4"}>
                <div className={"col-span-1 sm:col-span-3 px-2"}>
                    <h2 className={"text-yellow-400 font-bold text-lg sm:text-xl my-4"}>
                        ANGIOEDEMA
                    </h2>
                    <p>
                        Se caracteriza por una hinchazón (edema) que afecta la capa más profunda de la piel.
                        Es más doloroso que pruriginoso, puede acompañarse de parestesias y afecta a menudo a mucosas.
                        <br/><br/>
                        Para más información de la clasificación CIE-11 visite:
                        <br/>
                        <a href={"https://icd.who.int/browse11/l-m/es#/http://id.who.int/icd/entity/795969334"}
                           className={"text-secondary"}
                           target={"_blank"}>
                            Ver más
                        </a>
                    </p>
                </div>
                <ImageCardComponent imageName={Image1} imageName2={Image1s2x}/>

                <div className={"col-span-1 sm:col-span-2 "}>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/urticaria-angioedema/abordaje")}>
                        Continuar
                    </button>
                </div>
                <div className={"col-span-1 sm:col-span-2"}>
                    <button
                        className={"transition duration-500 ease-in-out transform hover:scale-95 btn btn-block btn-primary btn-primary-gradient"}
                        onClick={() => history.push("/home")}>
                        Volver
                    </button>
                </div>
            </div>
        </div>
    </SimpleLayout>
}

export default React.memo(UrticariaAngioedemaPage);