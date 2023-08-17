import axios from "axios"
import { useForm } from "react-hook-form";
import { Toaster, toast } from 'sonner'

import { Button } from "@nextui-org/react";

export default function Inscripciones() {

    const { register, handleSubmit} = useForm();

    let baseURL = "https://api.chaoschampionship.com/.netlify/functions/api/enviarcontacto";

    let config = {
        timeout: 10000,
        headers: { 'Content-Type': 'application/json' }
    };

    const onSubmit = data => {
        const datosArray = Object.values(data)

        toast.promise(() => new Promise((resolve, reject) => {
            axios.post(baseURL, {data}, config).then(function () {
                resolve()
                //localStorage.setItem("inscripcion", true)
            }).catch(function () {
                reject()
            })
        }), {
            loading: 'Registrando usuario',
            success: 'Usuario registrado',
            error: 'Error. Contacta con administración',
        });
    };

    return (
        <>
            <Toaster richColors closeButton />
            <div className="max-w-screen-xl py-16 mx-auto sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-2">
                <h1 className="text-5xl font-[800] mb-8">Contacto</h1>
                <h2>¿Quieres inscribirte como jugador para estar disponible en el mercado de fichajes?</h2>
                <h3>¡Rellena el formularo!</h3>
            </div>
            <form className="max-w-screen-xl pb-16 mx-auto sm:px-6 lg:px-8 flex flex-col justify-center items-center gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full justify-center gap-4">
                    <div className="flex flex-col">
                        <label>Primer Nombre</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <i className="fa-solid fa-circle-user text-gray-500 dark:text-gray-400"></i>
                            </span>
                            <input type="text" placeholder="John" {...register("nombre")} className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <label>Primer Apellido</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <i className="fa-solid fa-circle-user text-gray-500 dark:text-gray-400"></i>
                            </span>
                            <input type="text" placeholder="Doe" {...register("apellido")} className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                </div>

                <div className="flex w-full justify-center gap-4">
                    <div className="flex flex-col">
                        <label>Nickname</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <i className="fa-solid fa-circle-user text-gray-500 dark:text-gray-400"></i>
                            </span>
                            <input type="text" placeholder="Johnny" {...register("nick")} className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label>Nombre de invocador</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <i className="fa-solid fa-circle-user text-gray-500 dark:text-gray-400"></i>
                            </span>
                            <input type="text" placeholder="JohnyPanza" {...register("invocador")} className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                </div>

                <div className="flex w-full justify-center">
                    <div className="flex flex-col">
                        <label>Edad</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                <i className="fa-solid fa-circle-user text-gray-500 dark:text-gray-400"></i>
                            </span>
                            <input type="number" placeholder="18" {...register("edad")} className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                </div>

                <div className="flex w-full justify-center gap-4">
                    <div>
                        <label>Primera Posición</label>
                        <select id="primera" {...register("principal")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Toplane</option>
                            <option>Jungla</option>
                            <option>Midlane</option>
                            <option>ADC</option>
                            <option>Support</option>
                        </select>
                    </div>
                    <div>
                        <label>Segunda Posición</label>
                        <select id="segunda" {...register("secundaria")} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option>Toplane</option>
                            <option>Jungla</option>
                            <option>Midlane</option>
                            <option>ADC</option>
                            <option>Support</option>
                        </select>
                    </div>
                </div>

                <Button color="primary" variant="faded" type="submit">
                    Enviar
                </Button>

            </form >
        </>
    )
}