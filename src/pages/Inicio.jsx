import MainLayout from "../layout/MainLayout"

import { Button } from "@nextui-org/react";

import Sett from "../assets/images/settnobg.png"

function Inicio() {

  return (
    <MainLayout>
      <div>
        <div className="flex items-center justify-center mr-0 lg:mr-8 my-8 w-full">
          <div className="w-[30%] hidden lg:flex">
            <img src={Sett} alt="Sett" className="lg:max-w-[25rem] lg:min-w-[25rem] lg:w-[25rem] lg:h-[13rem]"></img>
          </div>
          <div className="w-[70%] mx-0 lg:mx-[5rem] ml-0 lg:ml-8 flex flex-col gap-4">
            <p className="font-[500] text-2xl leading-7">Inscríbete en la Chaos Series</p>
            <p className="font-[400] text-xl leading-7">Forma parte de la liga para unirte y conocer a nuevos jugadores, equipos y staff en un ambiente sano y perfecto para comenzar y mejorar tu carrera como jugador.</p>
            <div className="flex justify-center">
              <Button
                className="px-4 text-black border-[var(--color-texto-highlight)] bg-transparent hover:!bg-[var(--color-texto-highlight)] hover:text-white"
                radius="full"
                variant="ghost"
                onClick={() => { window.open("https://panel.chaosseries.com/") }}
              >
                Inscríbete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Inicio
