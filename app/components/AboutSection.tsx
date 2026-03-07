"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import React from "react";
import Link from "next/link";
import CircleText from "./layouts/CircleText";

const aboutSlides = [
    {
        image: "/img/normal/Destiny suite.jpg",
        icon: "/img/icon/feature_card_3.svg",
        title: "Équipements complets de la Suite",
        link: "/room",
        text: "Nos Suites sont conçues pour vous offrir un confort maximal et une totale autonomie. Vous y trouverez un micro-ondes, un réfrigérateur et du café dans chaque Suite.",
    },
    {
        image: "/img/normal/Destiny suite1.jpg",
        icon: "/img/icon/feature_card_2.svg",
        title: "Annulation sous 24H",
        link: "/room",
        text: "Nos Suites sont conçues pour vous offrir un confort maximal et une totale autonomie. Vous y trouverez un micro-ondes, un réfrigérateur et du café dans chaque Suite.",
    },
    {
        image: "/img/normal/Destiny suite2.jpg",
        icon: "/img/icon/feature_card_1.svg",
        title: "Sécurité garantie",
        link: "/room",
        text: "Nos Suites sont conçues pour vous offrir un confort maximal et une totale autonomie. Vous y trouverez un micro-ondes, un réfrigérateur et du café dans chaque Suite.",
    },
];

export default function AboutSection() {
    return (
        <div className="overflow-hidden space" id="about-sec">
            <div className="container">
                <div className="about-wrap4">
                    <div className="row gx-0 gy-40">

                        {/* COLONNE GAUCHE */}
                        <div className="col-xxl-3">
                            <div className="img-box7">
                                <div className="img1">
                                    <img src="/img/normal/about-01.jpg" alt="Image à propos" />
                                </div>
                            </div>

                            <div className="about-author-wrap">
                                <div className="thumb">
                                    <img src="/img/normal/about_avater2.png" alt="Auteur" />
                                </div>
                                <h4 className="about-author-title">Yanou Ullin</h4>
                                <span className="about-author-desig">Manager</span>
                                <div className="author-sign">
                                    <img src="/img/normal/signature2.svg" alt="Signature" />
                                </div>
                            </div>
                        </div>

                        {/* COLONNE DROITE */}
                        <div className="col-xxl-9">
                            <div className="about-wrap4-right">
                                <div className="about-wrap4-content">
                                    <div className="about-content-wrap">
                                        <div className="title-area mb-45">
                                            <span className="sub-title2 style1">À PROPOS DE NOUS</span>
                                            <h2 className="sec-title">
                                                Particular Destiny Suites Hôtel est un établissement prestigieux.
                                            </h2>
                                            <p className="sec-text mt-35 mb-20">
                                                Nous sommes situés au cœur du quartier Bonapriso, à 5 minutes de l’aéroport international de Douala.
                                            </p>
                                            <p className="sec-text">
                                                Vivez un pur moment de détente dans un cadre idyllique au sein de nos différentes suites hautement équipées, encadrées par une équipe qualifiée et réactive dédiée à vous faire vivre la meilleure expérience client.
                                            </p>
                                        </div>
                                        <div className="btn-group mt-1">
                                            <Link href="/apropos-nous" className="th-btn2 th-icon">LIRE PLUS</Link>
                                        </div>
                                    </div>

                                    {/* SLIDER SWIPER */}
                                    <div className="slider-wrap">
                                        <Swiper
                                            modules={[Autoplay, Pagination]}
                                            slidesPerView={1}
                                            loop
                                            autoplay={{ delay: 5000, disableOnInteraction: false }}
                                            pagination={{ clickable: true }}
                                            effect="fade"
                                            className="th-slider about-room-slider"
                                        >
                                            {aboutSlides.map((slide, index) => (
                                                <SwiperSlide key={index}>
                                                    <div className="about-room-card">
                                                        <div className="box-img global-img">
                                                            <img src={slide.image} alt={slide.title} />
                                                        </div>
                                                        <div className="box-content">
                                                            <div className="box-icon">
                                                                <img src={slide.icon} alt="Icone" />
                                                            </div>
                                                            <h3 className="box-title">
                                                                <a href={slide.link}>{slide.title}</a>
                                                            </h3>
                                                            <p className="box-text">{slide.text}</p>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    </div>
                                </div>

                                {/* IMAGE BAS + COMPTEUR */}
                                <div className="img-box7-2">
                                    <div className="img1">
                                        <div className="about-counter-wrap text-center">
                                            <h2 className="box-number"><span className="counter-number">150</span>+</h2>
                                            <p className="box-text">Années d’expérience pour être les meilleurs</p>
                                        </div>
                                        <img src="/img/normal/Restaurant-Otaboo.jpg" alt="Image bas" />

                                  {/*      <div className="discount-wrapp">
                                            <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk" className="play-btn popup-video">
                                                <i className="fa-solid fa-play"/>
                                            </a>
                                            <div className="discount-tag">
                                                <span className="discount-anime">
                                                   <CircleText />
                                                </span>
                                            </div>
                                        </div>*/}
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}