const services = [
    {
        subtitle: "SÉJOUR & RESTAURATION",
        title: "Restaurant & Bar",
        text: "La vie n'est pas la même sans bonne nourriture. Nos restaurants offrent une variété de cuisines à découvrir, préparées avec des légumes frais et des herbes que vous pouvez cueillir directement à la ferme.",
        img: "/img/service/service_card_5_1.jpg",
        link: "/service-details",
    },
    {
        subtitle: "SERVICES DE CHAMBRE",
        title: "Service de Nettoyage de Chambre",
        text: "Nous proposons une large gamme de services et de locations de voitures pour nos clients. La catégorie de réservation d'hôtel implique le processus de réservation d'hébergement pour les voyageurs.",
        img: "/img/service/service_card_5_2.jpg",
        link: "/service-details",
    },
    {
        subtitle: "SPORTS & ACTIVITÉS",
        title: "Fitness pour une Bonne Santé",
        text: "La catégorie de réservation d'hôtel implique le processus de réservation d'hébergement pour les voyageurs. Cela inclut la recherche d'hôtels adaptés et la comparaison des prix.",
        img: "/img/service/service_card_5_3.jpg",
        link: "/service-details",
    },
    {
        subtitle: "ÉVÉNEMENTS SPÉCIAUX",
        title: "Événements & Réunions",
        text: "La catégorie de réservation d'hôtel implique le processus de réservation d'hébergement pour les voyageurs. Cela inclut la recherche d'hôtels adaptés et la comparaison des prix.",
        img: "/img/service/service_card_5_4.jpg",
        link: "/service-details",
    },
];

export default function ServiceSection() {
    return (
        <section className="overflow-hidden space-bottom" id="service-sec">
            <div className="container">
                <div className="row gy-60">
                    {services.map((service, index) => (
                        <div className="col-12 service-card-wrap" key={index}>
                            <div className="service-card style3">
                                <div className="box-img">
                                    <img src={service.img} alt={service.title} />
                                </div>
                                <div className="box-content">
                                    <h6 className="box-subtitle">{service.subtitle}</h6>
                                    <h3 className="box-title">
                                        <a href={service.link}>{service.title}</a>
                                    </h3>
                                    <p className="box-text">{service.text}</p>
                                    <a href="/about" className="th-btn2 style2 th-icon">
                                        EN SAVOIR PLUS
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-center mt-60 text-center">
                    <a href="/package" className="th-btn2 style4 ser-btn">
                        Explorer Plus
                    </a>
                </div>
            </div>
        </section>
    );
}