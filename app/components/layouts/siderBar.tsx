'use client'

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {ChevronRight, Mail, MapPin, Menu, Minus, Phone, Plus, X,} from "lucide-react";
import {useCartStore} from "../../store/cartStore";

interface MenuItem {
    label: string;
    href?: string;
    children?: MenuItem[];
}

interface SiderBarProps {
    isOpen: boolean;
    onClose: () => void;
}

const menus: MenuItem[] = [
    {
        label: "ACCUEIL",
        href: "/"
    },
    {label: "RESERVATIONS SUITES", href: "/reservation-suites"},
    {label: "O'TABOO", href: "/otaboo"},
    /*    {
           label: "Particular Destiny Suites",
           children: [


               { label: "FAQ", href: "/faq" },
               { label: "Témoignages", href: "/temoignage" },
        ],
       },
   /*    {
           label: "Nos Services",
           href: "/services",
       },
       { label: "Galerie", href: "/gallery" },*/
    {label: "PROMOTIONS ENCOURS", href: "/promotions"},
    { label: "À PROPOS", href: "/apropos-nous" },

    { label: "CONTACTEZ-NOUS", href: "/contactez-nous" },
];

export function SiderBar({ isOpen, onClose }: SiderBarProps) {
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const count = useCartStore((state) => state.count());
    const toggleMenu = (label: string) =>
        setOpenMenu(openMenu === label ? null : label);
    const toggleMenus = () => setOpen((prev) => !prev);

    return (
        <div className={`sidemenu-wrapper ${isOpen ? "show" : ""}`}>
            <div className="sidemenu-content allow-natural-scroll">
                {/* Fermer */}
                <button className="closeButton sideMenuCls" onClick={onClose}>
                    <i>
                        <X size={24} color="currentColor" />
                    </i>
                </button>

                <div className="sidemenu-layout">
                    {/* Logo */}
                    <div className="th-side-menu">
                        <div className="side-logo">
                            <Link href="/">
                                <img src="/logo.png" alt="Particular destiny suite" height={100} width={180} />
                            </Link>
                        </div>

                        {/* Menu */}
                        <ul>
                            {menus.map((menu) => {
                                const isActive = menu.href === pathname;
                                return (
                                    <li
                                        key={menu.label}
                                        className={`
                                            ${menu.children ? "menu-item-has-children" : ""}
                                            ${isActive ? "active" : ""}
                                            ${openMenu === menu.label ? "open" : ""}
                                        `}
                                    >
                                        {menu.href && !menu.children && (
                                            <Link href={menu.href} onClick={
                                                onClose
                                            }><ChevronRight size={16} className="mr-2 inline-block" />{menu.label}</Link>
                                        )}

                                        {menu.children && (
                                            <>
                                                <Link
                                                    href="#"
                                                    className="menu-toggle"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        toggleMenu(menu.label);
                                                    }}
                                                >
                                                    <ChevronRight size={16} className="mr-2 inline-block" />
                                                    {menu.label}
                                                    ${openMenu === menu.label ?  <Minus size={16} className="float-end inline-block" /> :  <Plus size={16} className="float-end inline-block" />}
                                                </Link>

                                                <ul className={`sub-menu ${openMenu === menu.label ? "open" : ""}`} style={{
                                                    maxHeight: openMenu === menu.label ? "237px" : "0",
                                                    overflow: "hidden",
                                                    transition: "max-height 0.3s ease"
                                                }}>
                                                    {menu.children.map((child:MenuItem) => (
                                                        <li
                                                            key={child.href}
                                                            className={pathname === child.href ? "active" : ""}
                                                        >
                                                            <Link href={child.href!}><ChevronRight size={16} className="mr-2 inline-block" />{child.label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="row mt-4">
                            <div className="col-md-12">


                                <Link
                                    href="/cart-reservation"
                                    className="th-btn2 style1 d-lg-none"
                                >
                                    Panier({count})
                                    <img
                                        src="/img/icon/bed.svg"
                                        alt=""
                                    />
                                </Link>

                            </div>
                        </div>
                    </div>
                        {/* Contact */}
                        <div
                            className="widget side-menu-contact pt-80 footer-widget"
                            style={{
                                backgroundImage: 'url("/img/pages/contact_bg_img.png")',
                            }}
                        >
                            <h3 className="widget_title">Contactez-nous</h3>
                            <div className="th-widget-contact">
                                <div className="info-box">
                                    <div className="box-icon">
                                        <i >   <MapPin size={24} /></i>
                                    </div>
                                    <p className="box-text">
                                        15 Rue 2395, dite Copseco, Pavés Vers Lycée Bilingue – Bonapriso
                                    </p>
                                </div>
                                <div className="info-box">
                                    <div className="box-icon">
                                        <i>  <Phone size={24} /></i>
                                    </div>
                                    <p className="box-text">
                                        <a href="tel:+01234567890" className="box-link">
                                            +237 699902946
                                        </a>
                                        <a href="tel:+09876543210" className="box-link">
                                            +237 691604035
                                        </a>
                                    </p>
                                </div>
                                <div className="info-box">
                                    <div className="box-icon">
                                        <i>
                                            <Mail size={24} />
                                        </i>
                                    </div>
                                    <p className="box-text">
                                        <a href="mailto:contact@particulardestinysuites.com" className="box-link">
                                            contact@particulardestinysuites.com
                                        </a>
                                        <a href="mailto:support@particulardestinysuites.com" className="box-link">
                                            support@particulardestinysuites.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="mt-50">
                                <Link href="/contact-nous" className="th-btn th-icon">
                                    PRENDRE RENDEZ-VOUS
                                </Link>
                            </div>
                        </div>

                        {/* Découvrir les Suites */}
                       {/* <div className="widget menu-rooms-area footer-widget">
                            <h3 className="h4 text-center">Découvrez votre Suite idéale</h3>
                            <div className="menu-rooms-list">
                                {[
                                    { img: "/img/offer/offer_4_3.png", title: "Deluxe King Bed" },
                                    { img: "/img/offer/offer_4_4.png", title: "Twine King Bed" },
                                    { img: "/img/offer/offer_4_5.png", title: "Family Exclusive" },
                                ].map((room) => (
                                    <a key={room.title} href="/room-details" className="menu-room-link">
                                        <div className="menu-room-image global-img">
                                            <img
                                                src={room.img}
                                                alt={room.title}
                                                style={{
                                                    width: "493px",
                                                    height: "224px",
                                                    objectFit: "cover", // "contain" si tu veux que l'image entière soit visible
                                                }}
                                            />
                                            <div className="menu-room-content">
                                                <h3 className="box-title">{room.title}</h3>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>*/}

                </div>
            </div>
        </div>
    );
}