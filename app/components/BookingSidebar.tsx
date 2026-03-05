"use client";

import React, { useEffect, useState } from "react";
import {Feature, Room} from "../types/types";
interface BookingSidebarProps {
    room: Room; // ou Room | null si ça peut être vide
}

export default function BookingSidebar({ room }: BookingSidebarProps) {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);

    const [services, setServices] = useState<Feature[]>([]);
    const [selectedServices, setSelectedServices] = useState<Feature[]>([]);

    const [total, setTotal] = useState(0);

    // 🔥 fetch services depuis API
    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/front/features`)
            .then((res) => res.json())
            .then((data) => {
                // ⚠️ adapte selon ta structure API
                setServices(data.data || []);
            });
    }, []);

    // 🔥 calcul nombre de nuits
    const getNights = (): number => {
        if (!checkIn || !checkOut) return 0;

        // forcer le type en Date
        const start = new Date(checkIn as string | number | Date);
        const end = new Date(checkOut as string | number | Date);

        // end - start retourne un nombre en ms
        const diffMs: number = end.getTime() - start.getTime();

        // convertir en jours
        return Math.max(diffMs / (1000 * 60 * 60 * 24), 0);
    };

    // 🔥 toggle service
    const toggleService = (service:Feature) => {
        setSelectedServices((prev) => {
            if (prev.find((s) => s.id === service.id)) {
                return prev.filter((s) => s.id !== service.id);
            }
            return [...prev, service];
        });
    };

    // 🔥 calcul total
    useEffect(() => {
        const nights = getNights();
        const roomTotal = nights * (room?.price || 0);

        const servicesTotal = selectedServices.reduce(
            (sum, s) => sum + (s.price || 0),
            0
        );

        setTotal(roomTotal + servicesTotal);
    }, [checkIn, checkOut, selectedServices, room]);

    return (
        <div className="col-xl-3 col-lg-4">
            <aside className="sidebar-area">

                {/* FORMULAIRE DE RÉSERVATION */}
                <div className="widget widget_quote">
                    <div className="input-wrap">
                        <form method="POST" className="booking-form2 style4 ajax-contact">
                            <div className="input-wrap">

                                {/* TITRE */}
                                <div className="title-area mb-40">
                                    <span className="sub-title2 style1 mb-15">RÉSERVATION</span>
                                    <h2 className="box-title text-white">
                                        Vérifier la disponibilité
                                    </h2>
                                </div>

                                {/* FORMULAIRE */}
                                <div className="row gx-24 align-items-center justify-content-between">
                                    {/* ARRIVÉE */}
                                    <div className="form-group col-12">
                                        <div className="form-item">
                                            <label>Arrivée</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={checkIn}
                                                onChange={(e) => setCheckIn(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* DÉPART */}
                                    <div className="form-group col-12">
                                        <div className="form-item relative">
                                            <label>Départ</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                value={checkOut}
                                                onChange={(e) => setCheckOut(e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* ADULTES */}
                                    <div className="form-group col-12">
                                        <label>Adultes</label>
                                        <select
                                            className="form-select"
                                            value={adults}
                                            onChange={(e) => setAdults(Number(e.target.value))} // <--- conversion
                                        >
                                            {[1, 2, 3, 4].map((n) => (
                                                <option key={n} value={n}>
                                                    {n} adulte{n > 1 ? "s" : ""}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* ENFANTS */}
                                    <div className="form-group col-12">
                                        <label>Enfants</label>
                                        <select
                                            className="form-select"
                                            value={children}
                                            onChange={(e) => setChildren(Number(e.target.value))}
                                        >
                                            {[0, 1, 2, 3].map((n) => (
                                                <option key={n} value={n}>
                                                    {n} enfant{n > 1 ? "s" : ""}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* SERVICES SUPPLÉMENTAIRES */}
                    <div className="widget-service-list">
                        <h3 className="box-title mb-25">Services supplémentaires</h3>

                        {services.map((service) => (
                            <div key={service.id} className="service-list">
                                <div className="list">
                                    <input
                                        type="checkbox"
                                        checked={selectedServices.some((s) => s.id === service.id)}
                                        onChange={() => toggleService(service)}
                                    />
                                    <label>{service.name}</label>
                                </div>

                                <span className="text">
                            {service.price ? `${service.price} FCFA` : "gratuit"}
                        </span>
                            </div>
                        ))}

                        {/* TOTAL */}
                        <div className="service-list style2">
                            <h3 className="box-title">Prix total</h3>
                            <span className="text">{total} FCFA</span>
                        </div>

                        {/* BOUTON */}
                        <div className="btn-form">
                            <button className="th-btn style1">
                                RÉSERVER MAINTENANT
                            </button>
                        </div>
                    </div>
                </div>

                {/* WIDGET D'AIDE */}
                <div
                    className="widget widget_offer"
                    style={{
                        backgroundImage: "url('/img/bg/widget_bg_1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="offer-banner">
                        <h5 className="banner-title">
                            Besoin d'aide ? Nous sommes là pour vous aider
                        </h5>

                        <div className="banner-logo">
                            <img src="/logo.png" alt="Rotal" height={100} width={120} />
                        </div>

                        <div className="offer">
                            <h6 className="offer-title">Vous bénéficiez d'un support en ligne</h6>
                            <p className="offer-text">
                                <a href="tel:+237699902946"> +237 699902946</a>
                            </p>
                        </div>

                        <a href="/contactez-nous" className="th-btn">
                            EN SAVOIR PLUS
                        </a>
                    </div>
                </div>

            </aside>
        </div>
    );
}