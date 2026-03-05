"use client";

interface NavbarProps {
    toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
    return (
        <div className="bg-white border-bottom p-3 d-flex justify-content-between align-items-center">
            {/* Bouton mobile */}
            <button
                className="btn btn-outline-dark d-md-none"
                onClick={toggleSidebar}
            >
                ☰
            </button>

            <h5 className="mb-0">Admin Dashboard</h5>

            <button className="btn btn-outline-danger btn-sm">Déconnexion</button>
        </div>
    );
}