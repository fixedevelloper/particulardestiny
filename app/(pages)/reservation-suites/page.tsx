"use client";

import React, {useEffect, useState} from "react";
import {Star} from "lucide-react";
import BookingSection from "../../components/BookingSection";
import Link from "next/link";
import Breadcrumb from "../../components/layouts/Breadcrumb";

export default function RoomsPage() {
    const [rooms, setRooms] = useState<any[]>([]);
    const [categories, setCategories] = useState<any[]>([]);
    const [activeCategory, setActiveCategory] = useState<string>("all");

    useEffect(() => {
        fetchRooms();
        fetchCategories();
    }, []);

    const fetchRooms = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/front/rooms`);
        const data = await res.json();
        setRooms(data.data);
    };

    const fetchCategories = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/front/categories`);
        const data = await res.json();
        setCategories(data.data);
    };

    // Filtrage
    const filteredRooms =
        activeCategory === "all"
            ? rooms
            : rooms.filter((room) => room.category?.slug === activeCategory);

    return (
        <>
            <Breadcrumb
                title={"Reservation suites"}
                items={[
                    { label: "Accueil", href: "/" },
                    { label: "Reservation suites", href: "/contactez-nous" },
                ]}
            />
            <section className="overflow-hidden space">
                <div className="container">

                    {/* MENU DE FILTRAGE */}
                    <div className="filter-menu indicator-active justify-content-center mb-60">
                        <button
                            className={`tab-btn ${activeCategory === "all" ? "active" : ""}`}
                            onClick={() => setActiveCategory("all")}
                        >
                            Tous
                        </button>

                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`tab-btn ${
                                    activeCategory === cat.slug ? "active" : ""
                                }`}
                                onClick={() => setActiveCategory(cat.slug)}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* SuiteS */}
                    <div className="row gy-4 filter-active">
                        {filteredRooms.map((room, index) => (
                            <div key={room.id} className="col-lg-4 col-xxl-aut">
                                <div className="room-box">
                                    <div className="box-img">
                                        <img src={room.image?.thumb} alt={room.title} />
                                    </div>

                                    <span className="discount">
                  {room.price} FCFA/nuit
                </span>

                                    <div className="box-title-area">
                                        <div className="box-number">
                                            {(index + 1).toString().padStart(2, "0")}
                                        </div>

                                        <h3 className="box-title">
                                            <Link href={`/room-details/${room.slug}`}>
                                                {room.title}
                                            </Link>
                                        </h3>
                                        <div className="mt-10">
                                            <Link
                                                href={`/room-details/${room.slug}`}
                                                className="th-btn2 style2"
                                            >
                                                VOIR LES DÉTAILS
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="box-content">
                                        <div className="box-wrapp">

                                            <div className="box-number">
                                                {(index + 1).toString().padStart(2, "0")}
                                            </div>

                                            <h3 className="box-title">
                                                <Link href={`/room-details/${room.slug}`}>
                                                    {room.title}
                                                </Link>
                                            </h3>

                                            <div className="box-review">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
                                                ))}
                                            </div>

                                            {/* CARACTÉRISTIQUES */}
                                            <div className="room-card-meta">
                                                {room.features?.map((f: any) => (
                                                    <span key={f.id}>
                          <img src={f.icon} alt="icône"/> {f.name}
                        </span>
                                                ))}
                                            </div>

                                            <div className="mt-10">
                                                <Link
                                                    href={`/room-details/${room.slug}`}
                                                    className="th-btn2 style2"
                                                >
                                                    VOIR LES DÉTAILS
                                                </Link>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* PAGINATION (optionnelle backend plus tard) */}
                    <div className="th-pagination text-center mt-60 mb-0">
                        <ul>
                            <li><a href="#">1</a></li>
                        </ul>
                    </div>

                </div>
            </section>
            <BookingSection />
        </>
    );
}