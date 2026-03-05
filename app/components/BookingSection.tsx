"use client";

import { useState } from "react";
import {Room} from "../types/types";

export default function BookingSection() {
    const [form, setForm] = useState({
        check_in: "",
        check_out: "",
        adult: 1,
        children: 0,
    });

    const [loading, setLoading] = useState(false);
    const [rooms, setRooms] = useState<Room[]>([]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/front/check-availability`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(form),
                }
            );

            const data = await res.json();
            setRooms(data.data); // chambres disponibles
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="booking-area2 position-relative bg-fixed"
            style={{ backgroundImage: "url(/img/bg/booking_bg_3.jpg)" }}
        >
            <div className="container">
                <div className="row gy-4 align-items-center">

                    {/* FORMULAIRE */}
                    <div className="col-xl-5">
                        <div className="space">
                            <form onSubmit={handleSubmit} className="booking-form2 style3">
                                <div className="hero-wrap">

                                    <div className="title-area mb-40">
                                <span className="sub-title2 style1 mb-15">
                                    RÉSERVATION DE CHAMBRES
                                </span>
                                        <h2 className="sec-title text-white">
                                            Vérifier la disponibilité
                                        </h2>
                                    </div>

                                    <div className="row gx-24">

                                        {/* CHECK-IN */}
                                        <div className="form-group col-12">
                                            <label>Arrivée</label>
                                            <input
                                                type="date"
                                                name="check_in"
                                                className="form-control"
                                                value={form.check_in}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* CHECK-OUT */}
                                        <div className="form-group col-12">
                                            <label>Départ</label>
                                            <input
                                                type="date"
                                                name="check_out"
                                                className="form-control"
                                                value={form.check_out}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        {/* ADULTES */}
                                        <div className="form-group col-12">
                                            <label>Adultes</label>
                                            <select
                                                name="adult"
                                                className="form-select"
                                                value={form.adult}
                                                onChange={handleChange}
                                            >
                                                {[1,2,3,4,5].map(n => (
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
                                                name="children"
                                                className="form-select"
                                                value={form.children}
                                                onChange={handleChange}
                                            >
                                                {[0,1,2,3].map(n => (
                                                    <option key={n} value={n}>
                                                        {n} enfant{n > 1 ? "s" : ""}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="btn-form mt-3">
                                            <button type="submit" className="th-btn style1">
                                                {loading ? "Chargement..." : "VÉRIFIER LA DISPONIBILITÉ"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* RÉSULTATS */}
                    <div className="col-xl-7">
                        <div className="text-white">
                            <h4>Chambres disponibles</h4>

                            {rooms.length === 0 && !loading && (
                                <p>Aucune chambre trouvée</p>
                            )}

                            {rooms.map((room:Room) => (
                                <div key={room.id} className="mb-3 p-3 bg-dark">
                                    <h5>{room.title}</h5>
                                    <p>{room.price} / nuit</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}