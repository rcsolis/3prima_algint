import React from "react";
import FullScreenModalComponent from "../../components/modals/FullScreenModalComponent";
import { useHistory } from "react-router-dom";

function UrticariaAgudaModalPage(){
    const history = useHistory();
    const GoBack = ()=>{
        history.goBack();
    }
    return <FullScreenModalComponent>
        <div className={"w-full h-full bg-primary-gradient text-white rounded-2xl p-5"}>
            <div className={"text-right"}>
                <button className="btn btn-outline btn-circle btn-xs text-white" onClick={GoBack}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         className="inline-block w-6 h-6 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div className={"text-center mb-10"}>
                <h1 className={"font-bold text-lg sm:text-xl"}>CRITERIOS DIAGNÓSTICOS DE ANAFILAXIA</h1>
                <p className={"font-bold"}>(uno de los siguientes)</p>
            </div>
            <div>
                <ul className={"list-decimal space-y-16 list-inside"}>
                    <li>
                        <strong>Trastorno agudo que involucre piel, mucosas o ambos y al menos uno de los siguientes:</strong>
                        <p className={"pl-2"}>
                            A. Compromiso respiratorio (disnea, sibilancias, estridor, hipoxemia)<br/>
                            B. Hipotensión asociada a disfunción orgánica (hipotonía, colapso, síncope, incontinencia)
                        </p>
                    </li>
                    <li>
                        <strong>Dos o más de los siguientes (de inicio rápido tras la exposición del paciente a un
                            posible alérgeno):</strong>
                        <p className={"pl-2"}>
                            A. Afección mucocutánea (ronchas, prurito, angioedema)<br/>
                            B. Compromiso respiratorio<br/>
                            C. Hipotensión asociada a disfunción orgánica<br/>
                            D. Síntomas gastrointestinales persistentes (cólicos, dolor abdominal, vómito)
                        </p>
                    </li>
                    <li>
                        <strong>Hipotensión posterior a la exposición del paciente a un alérgeno conocido</strong>
                        <p className={"pl-2"}>
                            A. En población pediátrica (PAS &lt; percentil 5 o disminución del 30% de la normal)<br/>
                            B. Adultos (PAS &lt; de 100 mmHg o disminución del 30% de la normal)
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    </FullScreenModalComponent>
}

export default React.memo(UrticariaAgudaModalPage);