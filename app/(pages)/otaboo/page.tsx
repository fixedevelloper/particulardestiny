'use client'

import styles from "./otaboo.module.css"
import Image from "next/image"
import Link from "next/link"
import { services } from "./services"
import PdfModal from "../../components/PdfOtabooModal";

export default function OtabooPage() {

    return (
        <div className={styles.page}>

            {/* HERO */}
            <section className={`${styles.hero} ${styles.heroOverlay}`}>
                <div className="container">
                    <div className="row gy-40 flex-row-reverse justify-content-between">
                        <div className="col-lg-6 text-center">
                            <Image
                                src="/img/logo-otaboo.png"
                                alt="Otaboo"
                                width={350}
                                height={350}
                            />
                        </div>

                        <div className="col-lg-6">
                            <h1 className="fw-bold mb-4">
                                Bienvenue au O'TABOO Lounge Cabaret Restaurant
                            </h1>

                            <p className="mb-3">
                                Un univers d’élégance, de saveurs et de spectacles où chaque
                                instant devient une expérience inoubliable.
                            </p>

                            <p className="mb-4">
                                Découvrez le meilleur restaurant cabaret et karaoké à Bonapriso
                                Douala avec des soirées live et une cuisine camerounaise
                                raffinée.
                            </p>

                            <Link href="/reservation-suites" className="th-btn2 style1 bg-danger">
                                Réserver une table
                            </Link>
                        </div>


                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="py-5">
                <div className="container">

                    <div className={styles.sectionTitle}>
                        <h2>Restaurant & Cabaret</h2>
                    </div>

                    <div className="row g-4">

                        {services.map(service => (
                            <div key={service.id} className="col-md-6 col-xl-4">

                                <div className={styles.serviceCard}>

                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={400}
                                        height={260}
                                        className="img-fluid"
                                    />

                                    <div className="p-4">

                                        <h3 className={styles.serviceTitle}>
                                            {service.title}
                                        </h3>

                                        <p className={styles.serviceText}>
                                            {service.description}
                                        </p>

                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* MENUS */}
            <section className="py-5">
                <div className="container text-center">

                    <h2 className="mb-4">
                        Nos menus - {new Date().toLocaleDateString('fr-FR', {
                        weekday: 'long', // jour de la semaine
                        day: '2-digit',  // jour
                        month: 'long',   // mois
                        year: 'numeric'  // année
                    })}
                    </h2>

                    <p>
                        Découvrez notre sélection de plats traditionnels et internationaux
                        préparés par nos chefs.
                    </p>
                    <PdfModal />
                </div>
            </section>

        </div>
    )
}