import React from "react"
import SimpleLayout from "../../components/layouts/SimpleLayout";


function LinksPage(){
    return <SimpleLayout>

        <div className={"w-full"}>
            <div className={"text-center text-lg sm:text-xl m-5 text-primary"}>
                <p>Enlaces de Interés</p>
            </div>
            <div className={"px-10 py-5 bg-white rounded-xl"}>
                <ol className={"list-decimal text-lg"}>
                    <li>
                        <a href={"http://www.ga2len-ucare.com"} target={"_blank"}
                        className={"text-secondary"}>ga2len-ucare.com</a>
                    </li>
                    <li>
                        <a href={"http://www.acare-network.com"} target={"_blank"}
                           className={"text-secondary"}>acare-network.com</a>
                    </li>
                    <li>
                        <a href={"http://urticariaday.org/"} target={"_blank"}
                           className={"text-secondary"}>urticariaday.org/</a>
                    </li>
                    <li>
                        <a href={"https://www.urtikaria.net"} target={"_blank"}
                           className={"text-secondary"}>urtikaria.net</a>
                    </li>
                    <li>
                        <a href={"https://icd.who.int/browse11/l-m/es#/http%3a%2f%2fid.who.int%2ficd%2fentity%2f1895278089"} target={"_blank"}
                           className={"text-secondary"}>CIE 11 Urticaria</a>
                    </li>
                    <li>
                        <a href={"https://icd.who.int/browse11/l-m/es#/http://id.who.int/icd/entity/795969334"} target={"_blank"}
                           className={"text-secondary"}>CIE 11 Angioedema</a>
                    </li>
                    <li>
                        <a href={"https://www.urticaria-registry.com/"} target={"_blank"}
                           className={"text-secondary"}>urticaria-registry.com</a>
                    </li>
                    <li>
                        <a href={"https://urticariaguideline.org/"} target={"_blank"}
                           className={"text-secondary"}>urticariaguideline.org</a>
                    </li>
                </ol>
            </div>
            <div className={"text-center text-lg sm:text-xl m-5 text-primary"}>
                <p>Referencias</p>
            </div>
            <div className={"px-10 py-5 bg-white rounded-xl"}>
                <ol className={"list-decimal space-y-2"}>
                    <li>
                        Zuberbier, T., Abdul Latiff, A. H., Abuzakouk, M., Aquilina, S., Asero, R., Baker, D.,
                        Ballmer-Weber, B., Bangert, C., Ben-Shoshan, M., Bernstein, J. A., Bindslev-Jensen, C., Brockow,
                        K., Brzoza, Z., Chong Neto, H. J., Church, M. K., Criado, P. R., Danilycheva, I. V., Dressler,
                        C., Ensina, L. F., Fonacier, L., … Maurer, M. (2021). The international EAACI/GA²LEN/EuroGuiDerm/APAAACI
                        guideline for the definition, classification, diagnosis, and management of urticaria.
                        Allergy, 10.1111/all.15090. Advance online publication. Disponible en:
                        <a href={"https://onlinelibrary.wiley.com/share/HFYEZYATAVFXBPQWXEZD?target=10.1111/all.15090"}
                           target={"_blank"}
                           className={"text-secondary"}>
                            https://onlinelibrary.wiley.com/share/HFYEZYATAVFXBPQWXEZD?target=10.1111/all.15090
                        </a>
                    </li>
                    <li>
                        Larenas-Linnemann D, Medina-Ávalos MA, Ortega-Martell JA, Beirana-Palencia AM, Rojo-Gutiérrez MI,
                        Morales-Sánchez MA, Solorio-Gómez H, Alonzo-Romero Pareyón ML, Vargas-Correa JB, Baez-Loyola C,
                        Blancas-Espinosa R, Esquer-Flores J, Gómez-Vera J, Guzmán-Perea MG, Macías-Weinmann A, Maldonado-García CA,
                        Martínez-Villarreal JD, Matta-Campos JJ, Medina-Segura E, Del Río-Navarro B, Salgado-Gama JI, Stone-Aguilar H,
                        Sienra-Monge JJ, González-Díaz SN, Mendoza-López E, Amaya-Guerra M, Lemini-López A, Blanco-Montero A,
                        Chavarría-Jiménez MT, Guerrero-Michaus MG, Martínez-Pérez A, Ramírez-Segura RI, Montes-Narváez G, Olvera-Salinas J,
                        Rosas-Sumano AB. Guía mexicana para el diagnóstico y el tratamiento de la urticaria. Rev Alerg Mex. 2014;61 Suppl 2:S117-93
                        Disponible en:
                        <a href={"https://www.redalyc.org/articulo.oa?id=486755031002"}
                           target={"_blank"}
                           className={"text-secondary"}>
                            https://www.redalyc.org/articulo.oa?id=486755031002
                        </a>
                    </li>
                </ol>
            </div>
        </div>
    </SimpleLayout>
}

export default React.memo(LinksPage);