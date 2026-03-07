'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Marshell Jack",
        designation: "Client",
        text: "Prêt à réserver vos vacances ? Notre hôtel propose un large choix d’options, des resorts de luxe aux logements économiques, pour une expérience agréable et inoubliable.",
        avatar: "/img/testimonial/testi_4_1.jpg",
        stars: 5,
    },
    {
        name: "Edward Smith",
        designation: "Client",
        text: "Endroit parfait pour un voyage d'affaires ! L'emplacement est pratique et le Wi-Fi fiable. Tout ce dont j'avais besoin était disponible, d'un espace de travail calme dans la Suite à un excellent petit-déjeuner le matin.",
        avatar: "/img/testimonial/testi_4_1.jpg",
        stars: 5,
    },
    {
        name: "Jonathan Smith",
        designation: "Client",
        text: "Prêt à réserver vos vacances ? Notre hôtel propose un large choix d’options, des resorts de luxe aux logements économiques, pour une expérience agréable et inoubliable.",
        avatar: "/img/testimonial/testi_4_1.jpg",
        stars: 5,
    },
    {
        name: "Marshell Jack",
        designation: "Client",
        text: "Endroit parfait pour un voyage d'affaires ! L'emplacement est pratique et le Wi-Fi fiable. Tout ce dont j'avais besoin était disponible, d'un espace de travail calme dans la Suite à un excellent petit-déjeuner le matin.",
        avatar: "/img/testimonial/testi_4_1.jpg",
        stars: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="overflow-hidden testi-area4 space bg-light2" id="testi-sec">
            <div className="container">

                {/* TITRE */}
                <div className="title-area text-center">
                    <span className="sub-title2 style1">TÉMOIGNAGES</span>
                    <h2 className="sec-title text-white">Ce que nos clients pensent de nous</h2>
                </div>

                <div className="slider-wrap">

                    <Swiper
                        className="testiSlider4"
                        modules={[Mousewheel, Pagination, Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        mousewheel={{ sensitivity: 4 }}
                        pagination={{ clickable: true }}
                        navigation={{
                            nextEl: ".slider-next",
                            prevEl: ".slider-prev",
                        }}
                        breakpoints={{
                            1300: { slidesPerView: 2 },
                            992: { slidesPerView: 1 },
                            768: { slidesPerView: 1 },
                        }}
                    >
                        {testimonials.map((t, index) => (
                            <SwiperSlide key={index}>
                                <div className="testi-grid">

                                    <div className="box-profile bg-body-bg">
                                        <div className="box-avater">
                                            <img src={t.avatar} alt={`Avatar de ${t.name}`} />
                                        </div>

                                        <p className="box-text">{t.text}</p>
                                    </div>

                                    <div className="box-quote">
                                        <img src="/img/icon/quote2.svg" alt="Quote icon" />
                                    </div>

                                    <div className="box-review">
                                        {Array.from({ length: t.stars }).map((_, i) => (
                                            <i key={i} className="fa-sharp fa-solid fa-star"></i>
                                        ))}
                                    </div>

                                    <div className="media-body">
                                        <h3 className="box-title">{t.name}</h3>
                                        <p className="box-desig">{t.designation}</p>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* CONTROLES */}
                    <div className="slider-controller">

                        <button className="slider-arrow default slider-prev">
                            <img src="/img/icon/left-arrow2.svg" alt="" />
                        </button>

                        <button className="slider-arrow default slider-nextt">
                            <img src="/img/icon/right-arrow2.svg" alt="" />
                        </button>

                    </div>

                </div>
            </div>
        </section>
    );
}