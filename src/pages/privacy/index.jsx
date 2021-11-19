import React from "react"
import SimpleLayout from "../../components/layouts/SimpleLayout";


function PrivacyPage(){
    return <SimpleLayout>
        <div className={"w-full"}>
            <div className={"text-center text-xl sm:text-3xl m-5 text-primary"}>
                <p>Aviso de Privacidad, Aviso General,<br/>
                    Términos y Condiciones y Uso de Cookies</p>
            </div>
            <div className={"p-2 flex flex-col gap-2 items-start bg-white rounded-2xl text-left space-y-3"}>
                <h2 className={"font-bold"}>DOMINIO</h2>
                <p>
                    <a href={"http://www.compedia-algoritmo-urticaria.com"} target={"_blank"}>
                        www.compedia-algoritmo-urticaria.com
                    </a>
                </p>
                <h2 className={"font-bold"}>AVISO GENERAL</h2>
                <p>
                    El presente algoritmo representa una iniciativa académica de COMPEDIA patrocinada por Novartis y
                    "materializada" digitalmente por Tres Prima.
                    Los lineamientos se basan en las evidencias y recomendaciones de la bibliografía citada, adaptadas
                    a las circunstancias de nuestro medio. Se originó de la preocupación y compromiso, personal y profesional,
                    de un grupo de médicos especialistas para brindar una orientación para el abordaje del paciente con urticaria.
                    Los contenidos requieren de una formación especializada para su correcta interpretación.
                    En ningún caso la información proporcionada por el Algoritmo Interactivo reemplazará la relación
                    de los profesionales médicos con los pacientes.
                    El Algoritmo no promueve ninguna actividad que pueda inducir a la prescripción de marcas comerciales.
                </p>
                <h2 className={"font-bold"}>TÉRMINOS Y CONDICIONES</h2>
                <p>
                    El presente contrato describe los términos y condiciones aplicables al uso del contenido del sitio
                    eb www.compedia-algoritmo-urticaria.com.<br/>
                    Para hacer uso del contenido del sitio web el usuario deberá sujetarse a los presentes términos y condiciones.
                    <br/><br/>
                    I. OBJETO
                    <br/><br/>
                    El objeto es regular el acceso y utilización del contenido a disposición del público en general en
                    el dominio www.compedia-algoritmo-urticaria.com.<br/>
                    El titular se reserva el derecho de realizar cualquier tipo de modificación en el sitio web en
                    cualquier momento y sin previo aviso, el usuario acepta dichas modificaciones.<br/>
                    El acceso al sitio web por parte del usuario es libre y gratuito.<br/>
                    El sitio web solo admite el acceso a personas mayores de edad, que cumplan con la condición de ser
                    profesionales de la salud y que cuenten con cédula profesional que lo avale. El titular del sitio
                    no se hace responsable por el incumplimiento de esto.<br/>
                    El sitio web está dirigido a usuarios residentes en México y cumple con la legislación establecida
                    en dicho país, si el usuario reside en otro país y decide acceder al sitio web lo hará bajo su responsabilidad.<br/>
                    La administración del sitio web puede ejercerse por terceros, es decir, personas distintas al titular,
                    sin afectar esto los presentes términos y condiciones.
                    <br/><br/>
                    II. USUARIO
                    <br/><br/>
                    El usuario se compromete a utilizar el contenido sin faltar a la moral o al orden público,
                    absteniéndose de realizar cualquier acto que afecte los derechos de terceros o el funcionamiento del sitio web.<br/>
                    El acceso al sitio web no supone una relación entre el usuario y el titular del sitio web.<br/>
                    El usuario manifiesta ser mayor de edad y contar con la capacidad jurídica de acatar los presentes términos y condiciones.
                    <br/><br/>
                    III. ACCESO Y NAVEGACIÓN EN EL SITIO WEB
                    <br/><br/>
                    El titular no garantiza la continuidad y disponibilidad del contenido en el sitito web, realizará
                    acciones que fomenten el buen funcionamiento de dicho sitio web sin responsabilidad alguna.<br/>
                    El titular no se responsabiliza de que el software esté libre de errores que puedan causar un daño
                    al software y/o hardware del equipo del cual el usuario accede al sitio web. De igual forma, no se
                    responsabiliza por los daños causados por el acceso y/o utilización del sitio web.
                    <br/><br/>
                    IV. POLÍTICA DE ENLACES
                    <br/><br/>
                    En el sitio web puede contener enlaces a otros sitios de internet pertenecientes a terceros de los
                    cuales no se hace responsable.
                    <br/><br/>
                    V. POLÍTICA DE PROPIEDAD INTELECTUAL E INDUSTRIAL
                    <br/><br/>
                    El titular manifiesta tener los derechos de propiedad intelectual e industrial del sitio web
                    incluyendo imágenes, archivos de audio o video, logotipos, marcas, colores, estructuras, tipografías,
                    diseños y demás elementos que lo distinguen, protegidos por la legislación mexicana e internacional
                    en materia de propiedad intelectual e industrial.<br/>
                    El usuario se compromete a respetar los derechos de propiedad industrial e intelectual del titular.
                    <br/><br/>
                    VI. LEGISLACIÓN Y JURISDICCIÓN APLICABLE
                    <br/><br/>
                    La relación entre el usuario y el titular se regirá por las legislaciones aplicables en México.<br/>
                    El titular no se responsabiliza por la indebida utilización del contenido del sitio web y del incumplimiento de los presentes términos y condiciones.
                    <br/>
                </p>
                <h2 className={"font-bold"}>AVISO DE PRIVACIDAD Y PROTECCIÓN DE DATOS</h2>
                <p>
                    Conforme a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de
                    Particulares, el titular se compromete a tomar las medidas necesarias que garanticen la seguridad
                    del usuario, evitando que se haga uso indebido de los datos personales que el usuario proporcione en el sitio web.<br/>
                    Se informa que este sitio no recaba datos personales tales como Nombres, Correos Electrónicos, Números Telefónicos,
                    Cédula Profesional ni algún otro requerido para su ingreso o registro. Por lo que no se realizará ni
                    está en riesgo la transferencia, usurpación, clonación o filtración de estos dentro del sitio web.<br/>
                    El titular se reserva el derecho de realizar cualquier tipo de modificación en el Aviso de
                    Privacidad en cualquier momento y sin previo aviso, de acuerdo con sus necesidades o cambios en la
                    legislación aplicable, el usuario acepta dichas modificaciones.<br/>
                </p>
                <h2 className={"font-bold"}>USO DE COOKIES</h2>
                <p>
                    El sitio web implica la utilización de cookies que son pequeñas cantidades de información que se
                    almacenan en el navegador utilizado por el usuario como datos de ingreso, preferencias del usuario,
                    fecha y hora en que se accede al sitio web, sitios visitados y dirección IP, esta información es
                    anónima y solo se utilizará para mejorar el sitio web. Las cookies facilitan la navegación y la hacen
                    más amigable, sin embargo, el usuario puede desactivarlos en cualquier momento desde su navegador
                    en el entendido de que esto puede afectar algunas funciones del sitio web.
                </p>
            </div>
        </div>
    </SimpleLayout>;
}

export default React.memo(PrivacyPage);