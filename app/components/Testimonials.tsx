'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Marshell Jack",
        designation: "Client",
        text: "Prêt à réserver vos vacances ? Notre hôtel propose un large choix d’options, des resorts de luxe aux logements économiques, pour une expérience agréable et inoubliable.",
        avatar: "assets/img/testimonial/testi_4_1.jpg",
        stars: 5,
    },
    {
        name: "Edward Smith",
        designation: "Client",
        text: "Endroit parfait pour un voyage d'affaires ! L'emplacement est pratique et le Wi-Fi fiable. Tout ce dont j'avais besoin était disponible, d'un espace de travail calme dans la chambre à un excellent petit-déjeuner le matin.",
        avatar: "assets/img/testimonial/testi_4_2.jpg",
        stars: 5,
    },
    {
        name: "Jonathan Smith",
        designation: "Client",
        text: "Prêt à réserver vos vacances ? Notre hôtel propose un large choix d’options, des resorts de luxe aux logements économiques, pour une expérience agréable et inoubliable.",
        avatar: "assets/img/testimonial/testi_4_1.jpg",
        stars: 5,
    },
    {
        name: "Marshell Jack",
        designation: "Client",
        text: "Endroit parfait pour un voyage d'affaires ! L'emplacement est pratique et le Wi-Fi fiable. Tout ce dont j'avais besoin était disponible, d'un espace de travail calme dans la chambre à un excellent petit-déjeuner le matin.",
        avatar: "assets/img/testimonial/testi_4_2.jpg",
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

                {/* SWIPER */}
                <Swiper
                    modules={[Mousewheel, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    mousewheel={{ sensitivity: 4 }}
                    pagination={{ type: "progressbar", clickable: true }}
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
                                    <img src="assets/img/icon/quote2.svg" alt="Quote icon" />
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
            </div>
        </section>
    );
}