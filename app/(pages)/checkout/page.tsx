'use client'
import React, {useEffect, useState} from "react";
import {useCartStore} from "../../store/cartStore";
import Link from "next/link";
import {User} from "lucide-react";

import { calculateNights } from "../../utils";
import Breadcrumb from "../../components/layouts/Breadcrumb";

export default function CheckoutPage() {
    const items = useCartStore(state => state.items);
    const total = useCartStore(state => state.total());
    const { clearCart } = useCartStore();
    const [countries, setCountries] = useState<any[]>([]);
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetCountries();
    }, []);
    const fetCountries = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/front/countries`);
        const data = await res.json();
        setCountries(data.data);
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/front/reservations`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    surname,
                    phone,
                    email,
                    country,
                    message,
                    items,
                    total,
                }),
            });

            const result = await res.json();

            console.log(result);
            if (result.status === "success") {
                clearCart();
                window.location.href = result.data.url;
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Breadcrumb
                title={"Checkout"}
                items={[
                    { label: "Accueil", href: "/" },
                    { label: "Checkout", href: "/checkout" },
                ]}
            />
        <section className="space">
            <div className="container">
                <div className="row">
                    {/* FORMULAIRE INFOS CLIENT */}
                    <div className="col-xl-6">
                        <form className="contact-form ajax-contact" onSubmit={handleSubmit}>
                            <div className="title-area mb-45 text-center text-lg-start">
                                <span className="sub-title2 style1">CHECKOUT</span>
                                <h2 className="sec-title text-white">Informations personnelles</h2>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nom*"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Prénom*"
                                        value={surname}
                                        onChange={e => setSurname(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Phone*"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group col-12">

                                    <select
                                        className="form-select nice-select"
                                        value={country}
                                        onChange={e => setCountry(e.target.value)}
                                        required
                                    >
                                        <option value="" disabled hidden>
                                            Pays de résidence
                                        </option>

                                        {countries.map((item, index) => (
                                            <option key={item.id} value={item.id}>
                                                {item.name}
                                            </option>
                                        ))}

                                    </select>
                                </div>
                                <div className="form-group col-12">
                                    <textarea
                                        className="form-control"
                                        rows={3}
                                        placeholder="Information supplémentaire"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                    />
                                </div>
                                <div className="form-btn col-12">
                                    <button  type="submit" className="th-btn" disabled={loading}>
                                        {loading ? "Envoi..." : "Réserver"}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* PANIER */}
                    <div className="col-xl-6">
                        <div className="contact-form bg-white p-4">
                            <div className="title-area mb-45 text-center text-lg-start">
                                <span className="sub-title2 style1">VOTRE SÉJOUR</span>
                            </div>

                            {items.length === 0 ? (
                                <p>Votre panier est vide.</p>
                            ) : (
                                items.map((item, index) => {
                                    const nights = calculateNights(item.arrivalDate, item.departureDate) || 1;
                                    const featuresTotal = item.features?.reduce((sum, f) => sum + (f.price ?? 0), 0) || 0;
                                    const itemTotal = (item.pricePerNight + featuresTotal) * (nights || 1) * (item.quantity || 1);

                                    return (
                                        <div key={index} className="col-xl-12 mb-3">
                                            <div className="testi-grid style2 p-3 border rounded">
                                                <div className="box-profile" style={
                                                    {
                                                        display: "block",
                                                    }
                                                }>
                                                    <div className="box-text">
                                                        <h5 className="box-title">
                                                            {item.name} - {itemTotal.toLocaleString()} FCFA
                                                        </h5>
                                                        <p>
                                                        <span>
                                                            <User size={20} /> Adultes {item.adults}
                                                        </span>
                                                            <span>
                                                            <User size={20} /> Enfants {item.children}
                                                        </span>
                                                        </p>
                                                        <p>
                                                        {nights} nuit{nights > 1 ? "s" : ""}
                                                    </p>

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}

                            <div className="box-text mt-4 p-3 border rounded">
                                <h5 className="box-title text-dark">Total: {total.toLocaleString()} FCFA</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            </>
    );
}