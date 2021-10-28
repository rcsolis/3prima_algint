import React from "react"
import SimpleLayout from "../../components/layouts/SimpleLayout";


function PrivacyPage(){
    return <SimpleLayout>
        <div className={"w-full"}>
            <div className={"text-center text-xl sm:text-3xl m-5 text-primary"}>
                <p>Aviso de Privacidad, Aviso General,<br/>
                    Términos y Condiciones y Uso de Cookies</p>
            </div>
            <div className={"p-2 flex flex-col gap-2 items-start bg-white rounded-2xl"}>
                <p>
                    AVISO DE PRIVACIDAD
                    Lorem Ipsum

                    AVISO GENERAL
                    El  presente algoritmo representa una iniciativa académica de COMPEDIA patrocinada por Novartis y “materializada” digitalmente por Tres Prima.

                    Los lineamientos se basan en las evidencias y recomendaciones de la bibliografía citada, adaptadas a las circunstancias de nuestro medio.

                    Se originó de la preocupación y compromiso, personal y profesional, de un grupo de médicos especialistas para brindar una orientación para el abordaje del paciente con urticaria.

                    Los contenidos requieren de una formación especializada para su correcta interpretación.

                    En ningún caso la información proporcionada por el Algoritmo Interactivo reemplazará la relación de los profesionales médicos con los pacientes.

                    El Algoritmo no promueve ninguna actividad que pueda inducir a la prescripción de marcas comerciales.

                    TERMINOS Y CONDICIONES
                    Lorem Ipsum

                    USO DE COOKIES
                    Lorem Ipsum
                </p>
            </div>
        </div>
    </SimpleLayout>;
}

export default React.memo(PrivacyPage);