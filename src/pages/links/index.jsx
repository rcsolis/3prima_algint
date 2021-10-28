import React from "react"
import SimpleLayout from "../../components/layouts/SimpleLayout";


function LinksPage(){
    return <SimpleLayout>

        <div className={"w-full"}>
            <div className={"text-center text-xl sm:text-3xl m-5 text-primary"}>
                <p>Enlaces de Interés</p>
            </div>
            <div className={"p-10 bg-white rounded-xl"}>
                <ol className={"list-decimal text-xl space-y-5"}>
                    <li>
                        <a href={"www.ga2len-ucare.com"} target={"_blank"}
                        className={"text-secondary"}>ga2len-ucare.com</a>
                    </li>
                    <li>
                        <a href={"www.acare-network.com"} target={"_blank"}
                           className={"text-secondary"}>acare-network.com</a>
                    </li>
                    <li>
                        <a href={"http://urticariaday.org/ "} target={"_blank"}
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
                </ol>
            </div>
        </div>
    </SimpleLayout>
}

export default React.memo(LinksPage);