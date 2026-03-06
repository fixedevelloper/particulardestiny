'use client'
import Image from "next/image";
import {useEffect, useRef} from "react";
import CircleText from "../../components/layouts/CircleText";
import Link from "next/link";

const services = [
    {
        id: 1,
        title: "O'TATOO RESTAURANT",
        icon: "/img/icon/service_card_2.svg",
        image: "/img/bg/Ouverture-Restaurant-2.jpeg",
        description:
            "Nous sommes ouverts du lundi au dimanche, de 6h30 à X heure. Que ce soit pour un petit-déjeuner gourmand, un déjeuner d’affaires, un dîner en famille ou un moment de détente en soirée," +
            " notre équipe est à votre entière disposition pour vous offrir une expérience culinaire exceptionnelle.",
    },
    {
        id: 2,
        title: "O'TABOO DU TERROIR BRUCH",
        icon: "/img/icon/service_card_1.svg",
        image: "/img/bg/otaboo.jpeg",
        description:
            "Ici, chaque plat raconte une histoire… celle de nos racines, de nos terres, de nos cultures. O’TABOO DU TERROIR BRUCH, ce n’est pas simplement" +
            " un restaurant — c’est une expérience. Une fusion parfaite entre gastronomie authentique, ambiance lounge raffinée et cabaret vibrant.",
    },

    {
        id: 3,
        title: "CARBARET KARAOKE & LIVE",
        icon: "/img/icon/service_card_3.svg",
        image: "/img/bg/Jeudi-Karaoke-Live.jpeg",
        description:
            "Le karaoké, ce n’est pas seulement chanter… c’est oser. Oser prendre le micro. Oser partager un moment. Oser devenir, le temps d’une chanson, la star de la soirée. Et le Live, c’est l’énergie pure. Des artistes en performance, " +
            "une ambiance vibrante, des émotions authentiques. Chaque note résonne, chaque applaudissement rassemble.",
    },
];


export default function OtabooPage() {

    return (
        <>
            <div className="about-shape overflow-hidden bg-shape" id="about-sec">
                <div className="container">
                    <div className="row gy-40 align-items-center">

                        {/* Texte */}
                        <div className="col-lg-6 col-xxl-4">
                            <div className="title-area mb-30 pe-xxl-5">
                                <Image
                                    src="/img/theme-img/title_icon_white.svg"
                                    alt="shape"
                                    width={40}
                                    height={40}
                                />

                                <h2 className="sec-title text-white">O'TABOO</h2>

                                <Image
                                    src="/img/theme-img/title_icon2.svg"
                                    alt="shape"
                                    width={40}
                                    height={40}
                                />

                                <p className="text-body fs-18 mt-25 mb-40">
                                    Bienvenue au O'TABOO Lounge Cabaret Restaurant, un univers d’élégance,
                                    de saveurs et de spectacles où chaque instant devient une expérience inoubliable.
                                </p>

                                <p className="text-body fs-18 mb-60">
                                    Découvrez le meilleur restaurant cabaret et karaoké à Bonapriso, Douala ! Vivez des
                                    soirées inoubliables avec une ambiance festive,
                                    des spectacles live, un karaoké sur écran géant et une cuisine camerounaise
                                    raffinée.
                                    Réservez votre table dès maintenant pour une soirée karaoké à Bonapriso et profitez
                                    de nos promotions happy hour.
                                </p>
                            </div>

                            {/* Counters */}
                            <div className="counter-card-wrap">

                                <div className="counter-card">
                                    <div className="media-body">
                                        <h2 className="box-number">
                                            <span className="counter-number">25</span>k+
                                        </h2>
                                        <p className="box-text">Plats Camerounais</p>
                                    </div>
                                </div>


                                <div className="divider"/>

                                <div className="counter-card">
                                    <div className="media-body">
                                        <h2 className="box-number">
                                            <span className="counter-number">500</span>+
                                        </h2>
                                        <p className="box-text">Soirées Karaoké</p>
                                    </div>
                                </div>


                                <div className="divider"/>

                                <div className="counter-card">
                                    <div className="media-body">
                                        <h2 className="box-number">
                                            <span className="counter-number">128</span>k+
                                        </h2>
                                        <p className="box-text">Clients Heureux</p>
                                    </div>
                                </div>


                            </div>

                            <div className="btn-group mt-60">
                                <a href="/reservation-suites" className="th-btn2 th-icon">
                                    JE RESERVE
                                </a>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="col-lg-6 col-xxl-4">
                            <div className="img-box1">
                                <div className="img1">
                                    <Image
                                        src="/img/normal/about_1.jpg"
                                        alt="About"
                                        width={500}
                                        height={600}
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="about-wrapp">
                                    <div className="curve-text">
                                        <CircleText/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="col-xl-12 col-xxl-4 text-center text-xl-start">
                            <div className="about-feature-wrap">

                                <div className="about-feature">
                                    <div className="box-icon">
                                        <Image
                                            src="/img/icon/about_feature_1.svg"
                                            alt="icon"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className="box-content">
                                        <h3 className="box-title">Ambiance festive unique</h3>
                                        <p className="box-text">
                                            Profitez d'une soirée animée avec spectacles live, cabaret et karaoké sur
                                            grand écran, parfaite pour décompresser après une longue journée.
                                        </p>
                                    </div>
                                </div>

                                <div className="about-feature">
                                    <div className="box-icon">
                                        <Image
                                            src="/img/icon/about_feature_2.svg"
                                            alt="icon"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className="box-content">
                                        <h3 className="box-title">Cuisine locale savoureuse</h3>
                                        <p className="box-text">Découvrez des plats camerounais authentiques, grillades
                                            et buffets à prix abordables, servis dans une salle climatisée
                                            confortable.</p>
                                    </div>
                                </div>

                                <div className="about-feature">
                                    <div className="box-icon">
                                        <Image
                                            src="/img/icon/about_feature_3.svg"
                                            alt="icon"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className="box-content">
                                        <h3 className="box-title">Karaoké pour tous</h3>
                                        <p className="box-text">Chantez vos chansons préférées en solo, en duo ou en
                                            groupe lors de soirées thématiques, avec un matériel professionnel de
                                            qualité.</p>
                                    </div>
                                </div>

                                <div className="about-feature">
                                    <div className="box-icon">
                                        <Image
                                            src="/img/icon/about_feature_4.svg"
                                            alt="icon"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                    <div className="box-content">
                                        <h3 className="box-title">Événements et promotions</h3>
                                        <p className="box-text">
                                            Happy hours, buffets à gogo et soirées spéciales (comme les samedis karaoké)
                                            pour des moments inoubliables à petit prix.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <section className="overflow-hidden bg-shape space-top" id="service-sec">
                <div className="container">
                    {/* Title */}
                    <div className="row justify-content-center">
                        <div className="col-lg-5">
                            <div className="title-area text-center">
                                <h2 className="sec-title">Restaurant & Carbaret</h2><span className="title-img">
                                    <img src="/img/theme-img/title_icon.svg" alt="shape"/></span></div>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="row gy-4">
                        {services.map((service, index) => (
                            <div key={service.id} className="col-md-6 col-xl-4">
                                <div className="service-card">


                                    <h3 className="box-title">
                                        <Link href="/">{service.title}</Link>
                                    </h3>

                                    <p className="box-text">{service.description}</p>

                                    <div className="box-img global-img">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={400}
                                            height={260}
                                            className="img-fluid"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="container space-top space-bottom">
                {/* Title */}
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="title-area text-center">
                            <h2 className="sec-title">Nos menus</h2><span className="title-img">
                                    <img src="/img/theme-img/title_icon.svg" alt="shape"/></span></div>
                    </div>
                </div>
            </div>
        </>
);
}