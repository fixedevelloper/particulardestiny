'use client'

import { useCartStore } from "../../store/cartStore";
import Link from "next/link";
import {Calendar, Check, CheckSquare2, Star, User} from "lucide-react";
import React from "react";
import Breadcrumb from "../../components/layouts/Breadcrumb";

export default function CartReservationPage() {

    const { items, total, removeItem } = useCartStore();

    return (
        <>
            <Breadcrumb
                title={"Panier"}
                items={[
                    { label: "Accueil", href: "/" },
                    { label: "Panier", href: "/cart-reservation" },
                ]}
            />
        <section className="space">
            <div className="container">
                <div className="row gy-4">

                    {items.length === 0 ? (
                        <p className="text-center py-5">Votre panier est vide.</p>
                    ) : (

                        items.map((item, index) => (

                            <div className="col-12" key={item.id}>

                                <div className="room-card style2 style-flex">

                                    <div className="box-img global-img">
                                        <img
                                            src={item.image?.thumb ?? "/img/room/default.jpg"}
                                            alt={item.name}
                                        />

                                        <span className="discount">Free 0%</span>
                                    </div>

                                    <div className="box-content">

                                        <div className="box-number">
                                            {String(index + 1).padStart(2, "0")}
                                        </div>

                                        <h3 className="box-title">
                                            <Link href={`/room-details/${item.slug}`}>
                                                {item.name}
                                            </Link>
                                        </h3>

                                        <div className="box-wrapp">
                                            <div className="box-review">
                                                <i className="fa-sharp fa-solid fa-star">
                                                    <Star size={24}/>
                                                </i>
                                                <i className="fa-sharp fa-solid fa-star">
                                                    <Star size={24}/>
                                                </i>
                                                <i className="fa-sharp fa-solid fa-star">
                                                    <Star size={24}/>
                                                </i>
                                            </div>

                                            <span className="title">4.9 Reviews</span>
                                        </div>
                                        <div className="box-wrapp mb-2">
                                            <span>
                                             <User  size={20}/>Adults {item.adults}
                                            </span>
                                            <span>
                                             <User  size={20}/>Enfants {item.children}
                                            </span>
                                        </div>
                                        <div className="box-wrapp mb-2">
                                            <span>
                                             <Calendar  size={20}/>Debut {item.departureDate}
                                            </span>
                                            <span>
                                             <Calendar  size={20}/>Fin {item.arrivalDate}
                                            </span>
                                        </div>
                                        {/* FEATURES */}
                                        <p className="box-text row">
                                            {item.features.map((feature, i) => (
                                                <span key={i} className='col-md-6'>
                                                    <CheckSquare2 className='mr-2' size={24} />
                                                    {feature.name} (+{feature.price})
                                                    {i < item.features.length - 1 && ", "}
                                                </span>
                                            ))}
                                        </p>

                                        {/* PRICE */}
                                        <div className="box-price">
                                            <h4 className="price">
                                                {item.pricePerNight} x {item.quantity}
                                            </h4>
                                            Total : {item.pricePerNight * item.quantity}
                                        </div>

                                        {/* ACTION */}
                                        <button
                                            className="th-btn style3 mt-3"
                                            onClick={() => removeItem(item.id)}
                                        >
                                            Supprimer
                                        </button>

                                    </div>
                                </div>

                            </div>

                        ))
                    )}

                    {/* TOTAL GENERAL */}
                    {items.length > 0 && (
                        <>
                        <div className="col-12 text-end mt-4">
                            <h3>Total panier : {total()}</h3>
                        </div>
                        <Link  className="th-btn style1" href='/checkout'> JE PAYE MAINTENANT</Link>
                        </>
                    )}

                </div>
            </div>
        </section>
            </>
    );
}