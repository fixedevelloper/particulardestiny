"use client";

import React, {useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import HomeBookingForm from "./HomeBookingForm";
import {MapPin} from "lucide-react";

const slides = [
    {
        title: "Suites de Luxe à Bonapriso",
        text: "Ambiance chaleureuse et services haut de gamme au cœur de Bonapriso.",
        image: "/img/hero/1.png",
    },
    {
        title: "Hôtel de Luxe Exclusif et Sophistiqué",
        text: "Profitez d'une expérience premium et inoubliable.",
        image: "/img/hero/2.png",
    },
    {
        title: "Découvrez l’Harmonie Parfaite du Resort de Luxe",
        text: "Détendez-vous en famille dans un cadre luxueux.",
        image: "/img/hero/3.png",
    },
];

export default function HeroSection() {
    const [form, setForm] = useState({
        location: "",
        arrival: "",
        departure: "",
        guests: "",
    });
    const swiperRef = useRef<any>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <>
            {/* HERO */}
            <div className="th-hero-wrapper hero-3 hero-4 slider-area">
                <div className="swiper th-slider">
                    <div className="swiper-wrapper">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    slidesPerView={1}
                    loop={true}
                  //  effect="fade"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    navigation={false}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    className="swiper th-slider"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="hero-slide swiper-slide"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                }}
                            >
                                {/* Overlay (luxury effect) */}
                                <div className="hero-overlay" />

                                <div className="hero-inner">
                                    <div className="container">
                                        <div className="hero-style4">

                                            {/* STARS */}
                                            <div className="hero-star-rating">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className="fas fa-star"></i>
                                                ))}
                                            </div>

                                            {/* TITLE */}
                                            <h1 className="hero-title">
                                                {slide.title}
                                            </h1>

                                            {/* TEXT */}
                                            <p className="hero-text">
                                                {slide.text}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                        {/* BOUTONS NAVIGATION CUSTOM */}

                        <button
                            className="slider-arrow slider-prev d-none d-lg-block"
                            onClick={() => swiperRef.current?.slidePrev()}
                            style={{
                                backgroundColor: "#00000080",
                                borderRadius: "50%",
                                width: "80px",
                                height: "80px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                top: "50%",
                                left: "80px",
                                transform: "translateY(-50%)",
                                zIndex: 10,
                                border: "none",
                            }}
                        >
                            <img src="/img/icon/hero-arrow-left.svg" alt="prev" />
                        </button>

                        <button
                            className="slider-arrow slider-next d-none d-lg-block"
                            onClick={() => swiperRef.current?.slideNext()}
                            style={{
                                backgroundColor: "#00000080",
                                borderRadius: "50%",
                                width: "80px",
                                height: "80px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                position: "absolute",
                                top: "50%",
                                right: "80px",
                                transform: "translateY(-50%)",
                                zIndex: 10,
                                border: "none",
                            }}
                        >
                            <img src="/img/icon/hero-arrow-right.svg" alt="next" />
                        </button>

                    </div>
                </div>
            </div>

            {/* MAP */}
            <div className="map-view shape-mockup2" style={{ top: "30%", right: "8%", position: "absolute" }}>
                <span className="hero-map">
                    <i className="fa-sharp fa-solid fa-location-dot">
                    <MapPin size={34}/>
                </i>
                </span>
                <div className="card-view">
                    <div className="map">
                        <a target="_blank" href="https://www.google.com/maps">
                            <img src="/img/shape/map.png" alt="Map" />
                        </a>
                    </div>
                    <h3 className="box-title"> 15 Rue 2395, dite Copseco, Pavés Vers Lycée Bilingue – Bonapriso</h3>
                    <a className="th-btn btn-fw" target="_blank" href="https://www.google.com/maps">Open on Map</a>
                </div>
            </div>

            {/* SCAN BOX / ROOM */}
            <div
                className="scanbox shape-mockup2"
                style={{ top: "60%", right: "10%", position: "absolute" }}
            >
                <div className="sb-frame">
                    <img src="/img/icon/bar-code.svg" alt="Code-barres" />
                    <div className="sb-divider active"/>
                </div>

                <div className="room-view">
                    <div className="box-content">
                        <div className="box-img">
                            <img src="/img/offer/offer_4_3.png" alt="Suite" />
                            <span className="discount">69000 FCFA / NUIT</span>
                        </div>

                        <div className="author">
                <span className="img">
                    <img src="/logo.png" alt="Auteur" />
                </span>
                            <span className="text">Deluxe Exclusive</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* SCROLL DOWN */}
            {/* BOOKING */}
            <HomeBookingForm />
        </>
    );
}
