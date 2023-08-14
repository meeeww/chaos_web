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
        <div className="bg-[url('../assets/backgrounds/samira.jpg');] h-[26rem] bg-top bg-cover bg-fixed">
            <Navbar onMenuOpenChange={setIsMenuOpen} className="h-[5rem]">
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand className="hidden sm:flex gap-4">
                        <img src={Logo} alt="Logo" className="h-16 mr-8"></img>
                        <div>
                            <p className="font-semibold text-inherit text-2xl">Chaos</p>
                            <p className="font-semibold text-inherit text-2xl">Championship</p>
                        </div>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="sm:hidden pr-3" justify="center">
                    <NavbarBrand>
                        <img src={Logo} alt="Logo" className="h-10 mr-8"></img>
                        <p className="font-bold text-inherit">Chaos C.S.</p>
                    </NavbarBrand>
                </NavbarContent>
                <NavbarContent className="hidden sm:flex gap-4" justify="center">
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
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
                            className="p-0 bg-transparent data-[hover=true]:bg-transparent"
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
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
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
                                description="ACME scales apps to meet user demand, automagically, based on load."
                                startContent={<i className="fa-solid fa-people-group w-4 text-base text-center"></i>}
                            >
                                Equipos
                            </DropdownItem>
                            <DropdownItem
                                key="jugadores"
                                description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                                startContent={<i className="fa-solid fa-user-plus w-4 text-base text-center"></i>}
                            >
                                Jugadores
                            </DropdownItem>
                            <DropdownItem
                                key="staff"
                                description="ACME runs on ACME, join us and others serving requests at web scale."
                                startContent={<i className="fa-solid fa-clipboard-user w-4 text-base text-center"></i>}
                            >
                                Staff
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
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
                                description="ACME scales apps to meet user demand, automagically, based on load."
                                startContent={<i className="fa-solid fa-trophy w-4 text-base text-center"></i>}
                            >
                                Temporadas
                            </DropdownItem>
                            <DropdownItem
                                key="mvps"
                                description="ACME runs on ACME, join us and others serving requests at web scale."
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
        </div>
    );
}
