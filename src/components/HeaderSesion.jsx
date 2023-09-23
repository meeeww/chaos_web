import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import Logo from "../assets/logos/logo-no-text.png";

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Calendario",
        "Resultados",
        "Clasificación",
        "Equipos",
        "Jugadores",
        "Staff",
        "Temporadas",
        "MVPs",
        "Vídeos",
    ];

    return (
        <div className="bg-[url('../assets/backgrounds/samira.jpg');] h-[20rem] bg-cover bg-fixed">
            <Navbar onMenuOpenChange={setIsMenuOpen} className="h-[5rem] bg-[#333333] bg-opacity-90 flex justify-between items-center quitarMaxW px-8">
                <NavbarContent className="w-full max-w-none">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="md:hidden w-full max-w-none text-[var(--color-texto-footer)]"
                    />
                    <NavbarBrand className="hidden md:flex">
                        <img src={Logo} alt="Logo" className="h-16 mr-4 cursor-pointer" onClick={() => { window.location.replace("/") }}></img>
                        <div className="cursor-pointer" onClick={() => { window.location.replace("/") }}>
                            <p className="font-[500] text-[var(--color-texto-footer)] text-2xl" style={{ fontFamily: "chaosFont" }}>Chaos</p>
                            <p className="font-[500] text-[var(--color-texto-footer)] text-lg" style={{ fontFamily: "chaosFont" }}>Series</p>
                        </div>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="md:hidden pr-3">
                    <NavbarBrand>
                        <img src={Logo} alt="Logo" className="h-10 mr-4"></img>
                        <p className="font-bold text-[var(--color-texto-footer)]">Chaos Series</p>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden md:flex gap-12 font-semibold" justify="center">
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
                                    endContent={<i className="fa-solid fa-caret-down text-[var(--color-texto-highlight)] text-xl"></i>}
                                    radius="sm"
                                    variant="light"
                                >
                                    Partidos
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                            aria-label="Partidos"
                        >
                            <DropdownItem
                                key="calendario"
                                description="Comprueba las fechas de todos los partidos."
                                startContent={<i className="fa-solid fa-calendar w-4 text-base text-center"></i>}
                                onClick={() => { window.location.replace("/calendario") }}
                            >
                                Calendario
                            </DropdownItem>
                            <DropdownItem
                                key="resultados"
                                description="Revisa todos los resultados de los equipos."
                                startContent={<i className="fa-solid fa-clipboard-list w-4 text-base text-center"></i>}
                                onClick={() => { window.location.replace("/resultados") }}
                            >
                                Resultados
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavbarItem>
                        <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
                            radius="sm"
                            variant="light"
                            onClick={() => { window.location.replace("/clasificacion") }}
                        >
                            Clasificación
                        </Button>
                    </NavbarItem>
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
                                    endContent={<i className="fa-solid fa-caret-down text-[var(--color-texto-highlight)]"></i>}
                                    radius="sm"
                                    variant="light"
                                >
                                    Liga
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                            aria-label="Liga"
                        >
                            <DropdownItem
                                key="equipos"
                                description="Échale un vistazo a todos los equipos de la liga."
                                startContent={<i className="fa-solid fa-people-group w-4 text-base text-center"></i>}
                                onClick={() => { window.location.replace("/equipos") }}
                            >
                                Equipos
                            </DropdownItem>
                            <DropdownItem
                                key="jugadores"
                                description="Información sobre los jugadores inscritos y preparados para el draft."
                                startContent={<i className="fa-solid fa-user-plus w-4 text-base text-center"></i>}
                                onClick={() => { window.location.replace("/draft") }}
                            >
                                Draft
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
                                    endContent={<i className="fa-solid fa-caret-down text-[var(--color-texto-highlight)]"></i>}
                                    radius="sm"
                                    variant="light"
                                >
                                    Estadísticas
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                            aria-label="Estadísticas"
                        >
                            <DropdownItem
                                key="temporadas"
                                description="Revisa todas las estadísticas de cada temporada."
                                startContent={<i className="fa-solid fa-trophy w-4 text-base text-center"></i>}
                                onClick={() => { window.location.replace("/temporadas") }}
                            >
                                Temporadas
                            </DropdownItem>
                            <DropdownItem
                                key="mvps"
                                description="Consulta los MVPs en todos los ámbitos de todas las temporadas"
                                startContent={<i className="fa-solid fa-award w-4 text-base text-center"></i>}
                                onClick={() => { window.location.replace("/mvps") }}
                            >
                                MVPs
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
                <NavbarContent className="hidden md:flex font-semibold" justify="end">
                    <NavbarItem>
                        <Button
                            className="px-4 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
                            radius="full"
                            variant="ghost"
                            color="primary"
                            onClick={() => { window.location.replace("/iniciosesion") }}
                        >
                            Iniciar Sesión
                        </Button>
                    </NavbarItem>
                    <NavbarItem>
                        <Button
                            className="py-4 text-[var(--color-texto-footer)]"
                            radius="full"
                            variant="solid"
                            color="primary"
                            onClick={() => { window.location.replace("/registro") }}
                        >
                            Registrarse
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu className="top-[5rem]">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    "foreground"
                                }
                                className="w-full"
                                href={item.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
        </div>
    );
}
