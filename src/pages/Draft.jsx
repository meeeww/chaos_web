import { useState, useEffect } from "react"
import axios from "axios"
import api from "../utils/variables.json"

import MainLayoutInfo from "../layout/MainLayoutInfo"
import Logo from "../assets/logos/logo-no-text.png"

export default function Draft() {

    const [jugadores, setJugadores] = useState()
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        axios.get(api.directorio + "usuarios").then((usuarios) => {
            setJugadores(usuarios.data)
            setCargando(false)
        })
    }, [])

    if (cargando) {


        return (
            <div>
                hey
            </div>
        )
    }

    return (
        <MainLayoutInfo texto={"Draft"}>
            <div className="h-[3rem] flex justify-evenly items-center gap-6 bg-[var(--color-barra-header)] text-[var(--color-texto-barra-header)] font-[600]">
                <button><i className="fa-solid fa-angles-left hover:right-1 relative transition-all"></i></button>
                <span>Jornada 1</span>
                <button><i className="fa-solid fa-angles-right hover:left-1 relative transition-all"></i></button>
            </div>
            <div className="flex flex-col 2xl:grid-cols-3 2xl:grid items-center justify-center mx-[4rem] h-auto text-[var(--color-texto-fichapartido)] my-8 gap-8">
                {jugadores.map((jugador) => (
                    <div key={jugador.id_jugador} className="flex flex-col lg:flex-row items-center">
                        <div className="h-[30rem] w-[22rem] lg:h-[10rem] lg:w-[22rem] lg:pr-4 flex flex-col lg:flex-row justify-between lg:justify-between px-0 bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)] hover:shadow-[0px_-2px_15px_4px_rgba(0,0,0,0.75)] transition-shadow">
                            <div className="flex flex-col justify-center items-center pr-0 w-full h-[16rem] lg:h-full lg:w-[30%]">
                                <img src={"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/1/1000.jpg"} className="w-full h-full object-cover lg:fichaUsuarioDraft" alt="Equipo1" />
                            </div>
                            <div className="flex flex-col gap-2 justify-center items-center lg:w-[80%] lg:text-end text-center mb-20 lg:mb-0">
                                <p className="text-[var(--color-texto-hightlight-resultados)] text-3xl font-[900] w-full">{jugador.nick_usuario}</p>
                                <div className="flex gap-2 lg:justify-end justify-center w-full">
                                    <p className="text-xl font-[600]">{jugador.nombre_usuario}</p>
                                    <p className="text-xl font-[600]">{jugador.apellido_usuario}</p>
                                </div>
                                <p className="text-lg font-[400] w-full">{jugador.edad + " años"}</p>
                            </div>
                        </div>
                        <div className="h-[5rem] w-[22rem] lg:h-[10rem] lg:w-[5rem] flex flex-col lg:flex-row justify-evenly lg:justify-between px-4 bg-[var(--color-gris)] shadow-[0px_-2px_15px_0px_rgba(0,0,0,0.75)]">
                            <div className="flex justify-evenly lg:justify-center items-center w-full lg:px-3">
                                <i className="fa-brands fa-twitter text-4xl"></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </ MainLayoutInfo>
    )
}