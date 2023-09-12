import MainLayout from "../layout/MainLayout"

import { Button } from "@nextui-org/react";

import Sett from "../assets/images/settnobg.png"

function Inicio() {

  return (
    <MainLayout>
      <div>
        <div className="flex items-center justify-center">
          <div className="w-[30%]">
            <img src={Sett} alt="Sett" className="max-w-full w-[30rem] h-auto"></img>
          </div>
          <div className="w-[70%] mx-[5rem] flex flex-col gap-4">
            <p className="font-[500] text-2xl leading-7">Inscríbete en la Chaos Series</p>
            <p className="font-[400] text-xl leading-7">Forma parte de la liga para unirte y conocer a nuevos jugadores, equipos y staff en un ambiente sano y perfecto para comenzar y mejorar tu carrera como jugador.</p>
            <div className="flex justify-center">
              <Button className="bg-[var(--color-logo)] shadow-[var(--color-logo)] shadow-lg text-white">Inscríbete</Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Inicio
