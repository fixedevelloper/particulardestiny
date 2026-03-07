import Link from "next/link";

const pricingPlans = [
    {
        title: "Suite Standard",
        price: 130000,
        duration: "/Nuitée",
        description: 'Nos Suites Standard offrent tout le confort moderne pour un séjour des plus agréables. Idéal pour un séjour d’affaires ou de détente au sein du Particular Destiny Suites Hotel. ',
        popular: false,
        features: [
            "Coffre-fort",
            "Wifi Starlink",
            "Mini bar",
            "Smart TV",
            "Serice de chambre",
            "Ascenceur",
            "Espace bureau",
            "Telephone",
        ],
        unavailableCount: 3, // les 3 derniers sont indisponibles
    },
    {
        title: "Suite Junior",
        price: 145000,
        duration: "/Nuitée",
        description: 'Nos suites junior propose toutes les commodités de luxe pour assurer un séjour confortable aux voyageurs d\'affaires.Chaque espace a été conçu pour répondre aussi bien aux exigences d’un séjour professionnel qu’à celles d’un moment de détente. ',
        popular: true,
        features: [
            "Coffre-fort",
            "Wifi Starlink",
            "Mini bar",
            "Smart TV",
            "Serice de chambre",
            "Ascenceur",
            "Espace bureau",
            "Telephone",
        ],
        unavailableCount: 0,
    },
    {
        title: "Suite Senior",
        price: 160000,
        duration: "/Nuitée",
        description: 'Nos suites senior sont spacieuses et confortables, avec un décor moderne, des équipements luxueux et des baies vitrées. Profitez d\'une vue imprenable sur la ville de Douala dans un confort optimal. ',
        popular: false,
        features: [
            "Coffre-fort",
            "Wifi Starlink",
            "Mini bar",
            "Smart TV",
            "Serice de chambre",
            "Ascenceur",
            "Espace bureau",
            "Telephone",
        ],
        unavailableCount: 0,
    },
];

export default function PricingPlan() {
    return (
        <section className="space">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5">
                        <div className="title-area text-center">
                            <span className="sub-title2 style2">PLAN TARIFAIRE</span>
                            <h2 className="sec-title text-white">
                                Créez des souvenirs, réservez <span>votre hôtel maintenant</span>
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row gy-4 justify-content-center">
                    {pricingPlans.map((plan, index) => (
                        <div className="col-xl-4 col-md-6" key={index}>
                            <div className={`price-card bg-light2 ${plan.popular ? "item-active" : ""}`}>
                                <div
                                    className="header-price bg-tertiary"
                                    style={{
                                       // backgroundImage: "url('/img/bg/line-pattern2.png')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}
                                >
                                    <div className="box-icon">
                                        <img src="/img/icon/price-icon.svg" alt="icône" />
                                    </div>
                                    <p className="box-price">
                                        {plan.price} FCFA<span className="duration">{plan.duration}</span>
                                    </p>
                                    {plan.popular && <span className="tag">Populaire</span>}
                                </div>
                                <div className="box-content">
                                    <h3 className="box-title">{plan.title}</h3>
                                    <p className="box-text">
                                        {plan.description}
                                    </p>
                                    <div className="checklist">
                                        <ul>
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className={i >= plan.features.length - plan.unavailableCount ? "unavailable" : ""}>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="box-footer">
                                        <Link href="pricing" className="th-btn2 btn-fw w-100 style3 th-icon">
                                            RÉSERVER MAINTENANT
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}