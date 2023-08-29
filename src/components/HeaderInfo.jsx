import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu } from "@nextui-org/react";
import Logo from "../assets/logos/logo-no-text.png";

// eslint-disable-next-line react/prop-types
export default function Header({texto}) {

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
        <div className="bg-[url('../assets/backgrounds/samira.png');] h-[28rem] bg-top bg-cover bg-fixed">
            <Navbar onMenuOpenChange={setIsMenuOpen} className="h-[5rem] bg-[#333333] bg-opacity-90 flex justify-between items-center quitarMaxW px-8">
                <NavbarContent className="w-full max-w-none">
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden w-full max-w-none text-[var(--color-texto-footer)]"
                    />
                    <NavbarBrand className="hidden sm:flex gap-4">
                        <img src={Logo} alt="Logo" className="h-16 mr-8"></img>
                        <div>
                            <p className="font-[500] text-[var(--color-texto-footer)] text-2xl">Chaos</p>
                            <p className="font-[500] text-[var(--color-texto-footer)] text-xl">Championship</p>
                        </div>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <img src={Logo} alt="Logo" className="h-10 mr-8"></img>
                        <p className="font-bold text-[var(--color-texto-footer)]">Chaos C.S.</p>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-12 font-semibold" justify="center">
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
                        >
                            <DropdownItem
                                key="calendario"
                                description="Comprueba las fechas de todos los partidos."
                                startContent={<i className="fa-solid fa-calendar w-4 text-base text-center"></i>}
                            >
                                Calendario
                            </DropdownItem>
                            <DropdownItem
                                key="resultados"
                                description="Revisa todos los resultados de los equipos."
                                startContent={<i className="fa-solid fa-clipboard-list w-4 text-base text-center"></i>}
                            >
                                Resultados
                            </DropdownItem>
                            <DropdownItem
                                key="videos"
                                description="Explora todos nuestros partidos tanto en YouTube como en Twitch."
                                startContent={<i className="fa-solid fa-circle-play w-4 text-base text-center"></i>}
                            >
                                Vídeos
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <NavbarItem>
                        <Button
                            disableRipple
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[var(--color-texto-footer)]"
                            radius="sm"
                            variant="light"
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
                        >
                            <DropdownItem
                                key="equipos"
                                description="Échale un vistazo a todos los equipos de la liga."
                                startContent={<i className="fa-solid fa-people-group w-4 text-base text-center"></i>}
                            >
                                Equipos
                            </DropdownItem>
                            <DropdownItem
                                key="jugadores"
                                description="Información sobre los jugadores inscritos y preparados para el draft."
                                startContent={<i className="fa-solid fa-user-plus w-4 text-base text-center"></i>}
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
                        >
                            <DropdownItem
                                key="temporadas"
                                description="Revisa todas las estadísticas de cada temporada."
                                startContent={<i className="fa-solid fa-trophy w-4 text-base text-center"></i>}
                            >
                                Temporadas
                            </DropdownItem>
                            <DropdownItem
                                key="mvps"
                                description="Consulta los MVPs en todos los ámbitos de todas las temporadas"
                                startContent={<i className="fa-solid fa-award w-4 text-base text-center"></i>}
                            >
                                MVPs
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
                <NavbarMenu className="top-[5rem]">
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    "foreground"
                                }
                                className="w-full"
                                href={item}
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <div className="flex justify-center items-center w-full h-full">
                <p className="text-5xl font-[800] drop-shadow-2xl text-[var(--color-texto-footer)]">{texto}</p>
            </div>
        </div>
    );
}
