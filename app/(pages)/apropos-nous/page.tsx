"use client";

import { Play, Phone, Star } from "lucide-react";
import React from "react";
import Breadcrumb from "../../components/layouts/Breadcrumb";
import Link from "next/link";

export default function AboutPage() {
    return (
        <>
            <Breadcrumb
                title={"À propos de nous"}
                items={[
                    { label: "Accueil", href: "/" },
                    { label: "À propos de nous", href: "/apropos-nous" },
                ]}
            />

            <div className="overflow-hidden space-extra2-top space-bottom" id="about-sec">
                <div className="container">
                    <div className="row">
                        {/* COLONNE GAUCHE */}
                        <div className="col-xl-5 mb-35 mb-xl-0">
                            <div className="title-area mb-30 pe-xxl-5">
                                <img src="/logo.png" alt="Logo" />
                                <h2 className="sec-title text-white">À propos de Particular Destiny Suites</h2>
                                <p className="text-body fs-18 mt-25 mb-40">
                                    Le Particular Destiny Suites Hôtel est un établissement prestigieux situé au cœur du quartier Bonapriso, à 5 minutes de l’aéroport international de Douala. Profitez d’un moment de détente dans un cadre idyllique au sein de nos différentes suites hautement équipées, encadrées par une équipe qualifiée et réactive, dédiée à vous offrir la meilleure expérience client.
                                </p>
                                <p className="text-body fs-18 mb-60">
                                    Particular Destiny Suites, avec son excellent restaurant, propose des cuisines saines, délicieuses et variées à nos précieux clients. Bienvenue à Uniresort et profitez de nos suites luxueuses avec vue sur la mer.
                                </p>
                            </div>

                            <div className="counter-card-wrap style2">
                                <div className="counter-card">
                                    <div className="media-body">
                                        <h2 className="box-number"><span className="counter-number">290</span>+</h2>
                                        <p className="box-text">Chambres de luxe</p>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="counter-card">
                                    <div className="media-body">
                                        <h2 className="box-number"><span className="counter-number">4.8</span>+</h2>
                                        <p className="box-text">Note des clients</p>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="counter-card">
                                    <div className="media-body">
                                        <h2 className="box-number"><span className="counter-number">128</span>k+</h2>
                                        <p className="box-text">Clients satisfaits</p>
                                    </div>
                                </div>
                                <div className="divider"></div>
                            </div>

                            <div className="btn-group mt-60">
                                <Link href="apropos-nous" className="th-btn extra-btn th-radius">EN SAVOIR PLUS</Link>

                                <div className="call-info style2">
                                    <div className="call-icon">
                                        <a href="tel:+00123456789"><Phone size={24} /></a>
                                    </div>
                                    <div className="media-body">
                                        <span className="call-label">Pour réservation</span>
                                        <p className="call-link"><a href="tel:+237699902946">+237 699902946</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* COLONNE DROITE */}
                        <div className="col-xl-7">
                            <div className="img-box6">
                                <div className="img1">
                                    <img src="/img/normal/about_7.jpg" alt="À propos 7" />
                                    <div className="about-wrapp">
                                        <div className="discount-wrapp">
                                            <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn popup-video">
                                                <Play size={32} />
                                            </a>
                                            <div className="discount-tag">
                                                <span className="discount-anime">
                                                    Particular Destiny Suites hôtel depuis 1999* Rotal hôtel depuis 1999*
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="about-vouchers">
                                    <div className="box-content">
                                        <h3 className="box-title">Bons Cadeaux</h3>
                                        <p className="text">
                                            Obtenez les bons cadeaux pour les repas, visites au spa et autres services de Particular Destiny Suites.
                                        </p>
                                        <Link href="contact" className="th-btn th-radius">OBTENIR LES BONS</Link>
                                    </div>

                                    <div className="customer-review">
                                        <div className="box-review">
                                            <Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} /><Star size={18} />
                                        </div>
                                        <div className="box-content">
                                            <h2 className="box-number"><span className="counter-number">98</span>%</h2>
                                            <p className="text">Satisfaction des clients</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="img2">
                                    <img src="/img/normal/about_8.jpg" alt="À propos 8" />
                                </div>
                                <div className="img3">
                                    <img src="/img/normal/about_9.jpg" alt="À propos 9" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}