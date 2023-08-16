import Logo from "../assets/logos/logo-no-text.png";

export default function Footer() {
    return (
        <footer className="px-8 bg-[url('../assets/backgrounds/samira.png');] bg-middle bg-cover bg-fixed">
            <div className="max-w-screen-xl py-16 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <img src={Logo} className="mr-5 h-6 sm:h-[3rem]" alt="Logo" />
                        <p className="max-w-xs mt-4 text-sm text-[var(--color-texto-footer)]">
                        La Chaos Championship es una competición a nivel amateur de eSports centrada en dar un formato diferente e innovador, centrado en diferenciarse de cualquier competición vista hasta ahora en este ámbito.
                        </p>
                        <div className="flex mt-8 space-x-6 text-[var(--color-texto-footer)]">
                            <a className="hover:opacity-75" href="https://www.twitter.com/ChaosChampions" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-x-twitter text-xl"></i>
                            </a>
                            <a className="hover:opacity-75" href="https://www.twitch.tv/chaos_championship" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-twitch text-xl"></i>
                            </a>
                            <a className="hover:opacity-75" href="https://www.youtube.com/@ChaosChampionship" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-youtube text-xl"></i>
                            </a>
                            <a className="hover:opacity-75" href="https://www.tiktok.com/@chaoschampionship" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-tiktok text-xl"></i>
                            </a>
                            <a className="hover:opacity-75" href="https://www.discord.gg/nkdvxbZB4s" target="_blank" rel="noreferrer">
                                <i className="fa-brands fa-discord text-xl"></i>
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="text-[var(--color-texto-footer)]">
                            <p className="font-medium">
                                Chaos
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm">
                                <a className="hover:opacity-75" href> Sobre Nosotros </a>
                                <a className="hover:opacity-75" href> Reglamento </a>
                                <a className="hover:opacity-75" href> Trabaja con Nosotros </a>
                            </nav>
                        </div>
                        <div className="text-[var(--color-texto-footer)]">
                            <p className="font-medium">
                                Links
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm">
                                <a className="hover:opacity-75" href> Clasificación </a>
                                <a className="hover:opacity-75" href> Calendario </a>
                                <a className="hover:opacity-75" href> Resultados </a>
                            </nav>
                        </div>
                        <div className="text-[var(--color-texto-footer)]">
                            <p className="font-medium">
                                Ayuda
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm">
                                <a className="hover:opacity-75" href> Contacto </a>
                                <a className="hover:opacity-75" href> FAQs </a>
                                <a className="hover:opacity-75" href> Soporte </a>
                            </nav>
                        </div>
                        <div className="text-[var(--color-texto-footer)]">
                            <p className="font-medium">
                                Legal
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm">
                                <a className="hover:opacity-75" href> Política de Privacidad </a>
                                <a className="hover:opacity-75" href> Términos y Condiciones </a>
                            </nav>
                        </div>
                    </div>
                </div>
                <p className="mt-8 text-xs text-[var(--color-texto-footer)]">
                    ©{new Date().getFullYear()} Chaos Championship
                </p>
            </div>
        </footer>
    )
}