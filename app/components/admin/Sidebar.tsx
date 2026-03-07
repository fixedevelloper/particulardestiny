"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {ArrowLeft} from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
    const pathname = usePathname();

    const menu = [
        { name: "Dashboard", href: "/admin/dashboard" },
        { name: "Suites", href: "/admin/rooms" },
        { name: "Features", href: "/admin/features" },
        { name: "Réservations", href: "/admin/bookings" },
        { name: "Utilisateurs", href: "/admin/users" },
    ];

    return (
        <div
            className={`bg-dark text-white position-fixed h-100 d-md-block`}
            style={{
                width: "250px",
                zIndex: 1050,
                left: isOpen ? "0" : "-250px",
                transition: "all 0.3s ease",
            }}
        >
            <div className="p-3">
                <div className="d-flex align-items-center mb-4">
                    {/* Titre */}
                    <h4 className="flex-grow-1 mb-0">Admin</h4>

                    {/* Bouton pour fermer la sidebar mobile */}
                    <button
                        className="btn btn-outline-light d-md-none"
                        onClick={() => setIsOpen(false)}
                    >
                        <ArrowLeft size={20} />
                    </button>
                </div>


                <ul className="nav flex-column">
                    {menu.map((item) => (
                        <li key={item.href} className="nav-item mb-2">
                            <Link
                                href={item.href}
                               // onClick={() => setIsOpen(false)} // ferme la sidebar mobile au clic
                                className={`nav-link text-white ${
                                    pathname === item.href ? "bg-primary rounded" : ""
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}