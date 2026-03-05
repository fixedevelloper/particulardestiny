"use client";

import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(true);

    // Fermer sidebar mobile si l'écran est grand
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="d-flex">
            {/* Sidebar */}
            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

            {/* Overlay mobile */}
            {isOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark d-md-none"
                    style={{ opacity: 0.5, zIndex: 1040 }}
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Content */}
            <div className="flex-grow-1">
                <Navbar toggleSidebar={() => setIsOpen(!isOpen)} />

                <main className="p-3 p-md-4 bg-light main" style={{ minHeight: "100vh" }}>
                    {children}
                </main>
            </div>
        </div>
    );
}