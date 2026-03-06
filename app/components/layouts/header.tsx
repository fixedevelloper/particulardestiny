import Link from "next/link";
import React, {useState} from "react";
import {SiderBar} from "./siderBar";
import {Clock, Headset, Menu, MessageCircle} from "lucide-react";
import {useCartStore} from "../../store/cartStore";


const leftMenu = [
    {label: "ACCUEIL", href: "/"},
    {label: "RESERVATIONS SUITES", href: "/reservation-suites"},
    {label: "O'TABOO", href: "/otaboo"},
];

const rightMenu = [
    {label: "PROMOTIONS ENCOURS", href: "/promotions"},
    {label: "APROPOS", href: "/apropos-nous"},
    {label: "CONTACTEZ NOUS", href: "/contactez-nous"},
];

export function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const count = useCartStore((state) => state.count());
    const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    return (
        <>
            <SiderBar isOpen={sidebarOpen}
                      onClose={() => setSidebarOpen(false)}/>

            <header className="th-header header-layout4">

                {/* BARRE DU HAUT */}
                <div className="header-top d-none d-lg-block">
                    <div className="container th-container2">
                        <div className="row justify-content-between align-items-center gy-2">

                            <div className="col-auto">
                                <div className="header-links d-none d-lg-inline-block">
                                    <ul>
                                        <li>
                                            <i>
                                                <Clock size={20} color="currentColor" />
                                            </i>
                                            Dimanche à Vendredi : 8h00 - 19h00
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-auto">
                                <div className="header-links">
                                    <ul>
                                        <li className="d-none d-lg-inline-block">
                                            <i>
                                                <Clock size={24} color="currentColor" />
                                            </i>
                                            Heure locale : {new Date().toLocaleTimeString()}
                                        </li>

                                        <li className="d-none d-lg-inline-block">
                                            <i>
                                                <MessageCircle size={22} color="currentColor" />
                                            </i>
                                            <Link href="/faq">FAQ</Link>
                                        </li>

                                        <li>
                                            <i>
                                                <Headset size={24} color="currentColor" />
                                            </i>
                                            <Link href="/contact">Support</Link>
                                        </li>

                                        {/* LANGUE */}
                                        <li className="d-none d-lg-inline-block">
                                            <div className="dropdown-link">
                                                <button className="dropdown-toggle">
                                                    🌐 Français
                                                </button>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* HEADER PRINCIPAL */}
                <div className="sticky-wrapper">
                    <div className="menu-area">
                        <div className="container th-container2">
                            <div className="row align-items-center justify-content-between">

                                {/* BOUTON MENU */}
                                <div className="col-auto d-sm-block d-none">
                                    <div className="header-wrapp">
                                        <div className="header-button">
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleSidebar();
                                                }}
                                                className="simple-btn sideMenuToggler"
                                            >
                                                <i>
                                                    <Menu size={24} color="currentColor" />
                                                </i>
                                                <span className="menu">MENU</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* MENU GAUCHE */}
                                <div className="col-auto ms-auto d-none d-xl-block">
                                    <div className="header-wrapp">
                                        <nav className="main-menu">
                                            <ul>
                                                {leftMenu.map(item => (
                                                    <li key={item.label}>
                                                        <Link href={item.href}>
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                {/* LOGO */}
                                <div className="col-auto header-main">
                                    <div className="header-logo">
                                        <Link href="/">
                                            <img
                                                src="/logo.png"
                                                alt="Rotal"
                                                width={117}
                                                height={72}
                                                loading="lazy"
                                                style={{objectFit: 'contain'}}
                                            />
                                        </Link>
                                        <div
                                            className="bg-shape bg-mask"
                                            style={{
                                                maskImage: 'url("/img/bg/logo-shape2.png")',
                                                WebkitMaskImage: 'url("/img/bg/logo-shape2.png")',
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* MENU DROITE */}
                                <div className="col-auto me-auto d-none d-xl-block">
                                    <div className="header-wrapp">
                                        <nav className="main-menu style3">
                                            <ul>
                                                {rightMenu.map(item => (
                                                    <li key={item.label}>
                                                        <Link href={item.href}>
                                                            {item.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="col-auto">
                                    <div className="header-button">


                                        <Link
                                            href="/cart-reservation"
                                            className="th-btn2 style3 d-sm-block d-none"
                                        >
                                            Panier({count})
                                            <img
                                                src="/img/icon/bed.svg"
                                                alt=""
                                            />
                                        </Link>

                                        {/* MENU MOBILE */}
                                        <a className="icon-btn sideMenuToggler d-sm-none"
                                           href="#"
                                           onClick={(e) => {
                                               e.preventDefault();
                                               toggleSidebar();
                                           }}
                                        >
                                            <i><Menu size={24} color="currentColor" /></i>
                                        </a>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    );
}