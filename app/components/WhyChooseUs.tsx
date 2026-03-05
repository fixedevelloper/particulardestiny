const hotelFacilities = [
    { icon: "/img/icon/hotel-icon1-5.svg", text: "WiFi haut débit gratuit" },
    { icon: "/img/icon/hotel-icon1-1.svg", text: "Piscine" },
    { icon: "/img/icon/hotel-icon1-6.svg", text: "Bien-être & Spa" },
    { icon: "/img/icon/hotel-icon1-2.svg", text: "Petit-déjeuner gratuit" },
    { icon: "/img/icon/hotel-icon1-7.svg", text: "Chambres bien aménagées" },
    { icon: "/img/icon/hotel-icon1-3.svg", text: "Animaux & soins pour animaux" },
    { icon: "/img/icon/hotel-icon1-8.svg", text: "Parking" },
    { icon: "/img/icon/hotel-icon1-4.svg", text: "Bar sur le toit" },
];

export default function WhyChooseUs() {
    return (
        <div className="space overflow-hidden">
            <div className="container">
                <div className="why-wrap1">
                    <div className="why-img-box1">
                        <img src="/img/normal/why_1.jpg" alt="Installations de l'hôtel" />
                    </div>
                    <div className="why-wrap-content">
                        <div className="title-area">
                            <span className="sub-title2 style1">INSTALLATIONS DE L'HÔTEL</span>
                            <h2 className="sec-title">Pourquoi nous choisir</h2>
                            <p className="sec-text pe-xl-5 me-xxl-5">
                                Nous sommes fiers d’offrir un service amical et chaleureux, répondant aux besoins de toute la famille.
                            </p>
                        </div>
                        <ul className="why-grid-list">
                            {hotelFacilities.map((facility, index) => (
                                <li key={index}>
                                    <div className="box-icon">
                                        <img src={facility.icon} alt={facility.text} />
                                    </div>
                                    <div className="why-grid-list-details">
                                        <p className="box-text">{facility.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="btn-group mt-60">
                            <a href="apropos-nous" className="th-btn2 th-icon">VOIR TOUT</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}