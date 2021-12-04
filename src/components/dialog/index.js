import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import { useHistory } from "react-router-dom";

export default function Dialog({show, setShow}){
    const history = useHistory();
    return <Modal size="regular" active={show} toggler={() => setShow(false)}>
        <ModalHeader toggler={() => setShow(false)}>
            <p className={"text-center p-4"}>
                ¡Gracias por haber realizado un abordaje asertivo de su paciente con urticaria!
            </p>
        </ModalHeader>
        <ModalBody>
            <p className="text-base leading-relaxed text-gray-600 font-normal text-center">
                Se sugiere la individualización de cada caso, recuerde que los contenidos requieren de una formación
                especializada para su correcta interpretación. En ningún caso, la información proporcionada por el
                Algoritmo Interactivo reemplazará la relación de los profesionales médicos con los pacientes.
            </p>
        </ModalBody>
        <ModalFooter>
            <Button
                color="indigo"
                buttonType={"filled"}
                block={true}
                onClick={(e) => {
                    history.push("/welcome")
                }}
                rounded={true}
                ripple="light"
            >
                Continuar
            </Button>
        </ModalFooter>
    </Modal>
}