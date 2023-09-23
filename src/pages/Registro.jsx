import { React, useState } from "react"

import MainLayout from "../layout/MainLayoutSesion"

import { Card, CardBody, Input, Button } from "@nextui-org/react";

export default function Registro() {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <MainLayout>
            <div className="flex justify-center items-center">
                <Card className="py-4 m-4 max-w-sm h-auto">
                    <CardBody>
                        <div className="flex flex-col justify-between items-center gap-4 h-full w-[20rem]">
                            <div className="flex justify-between gap-2">
                                <Input
                                    variant={"bordered"}
                                    label="Nombre"
                                    type={"text"}
                                />
                                <Input
                                    variant={"bordered"}
                                    label="Primer Apellido"
                                    type={"text"}
                                />
                            </div>
                            <div className="w-full h-full flex flex-col justify-start items-center gap-4">
                                <Input
                                    variant={"bordered"}
                                    label="Nombre de Usuario"
                                    type={"text"}
                                />
                                <Input
                                    variant={"bordered"}
                                    label="Contraseña"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <i className="fa-solid fa-eye-slash text-default-400 pointer-events-none"></i>
                                            ) : (
                                                <i className="fa-solid fa-eye text-default-400 pointer-events-none"></i>
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}
                                />
                                <Input
                                    variant={"bordered"}
                                    label="Repite Contraseña"
                                    endContent={
                                        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <i className="fa-solid fa-eye-slash text-default-400 pointer-events-none"></i>
                                            ) : (
                                                <i className="fa-solid fa-eye text-default-400 pointer-events-none"></i>
                                            )}
                                        </button>
                                    }
                                    type={isVisible ? "text" : "password"}
                                />
                            </div>
                            <Button color="primary" variant="ghost" className="h-12">
                                Iniciar Sesión
                            </Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </MainLayout>
    )
}