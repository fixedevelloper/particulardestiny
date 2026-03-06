import ScrollToTop from "./ScrollToTop";
import React from "react";
import {Copyright, Mail, MapPin, Phone} from "lucide-react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export default function AppFooterSection() {
    return (
        <>
            {/* Section Application */}
            <div
                className="position-relative overflow-hidden space-top overflow-hidden bg-fixed"
                style={{
                    backgroundImage: 'url(/img/bg/app_bg_1.png)',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover', // pour que ça prenne tout le conteneur
                    backgroundPosition: 'center', // centrer l'image
                }}
            >
                <div className="container">
                    <div className="app-title-area text-center">
                        <div className="title-area mb-0">
                            <span className="sub-title2 style2">TÉLÉCHARGER L’APPLICATION</span>
                            <h3 className="sec-title">
                                Le luxe vous attend. <br /> Réservez votre séjour dès aujourd’hui !
                            </h3>
                            <p className="sec-text">
                                Entrez dans un univers fluide de réservation d’hôtel, où réserver votre séjour devient aussi simple que quelques clics.
                            </p>
                            <div className="btn-wrap justify-content-center">
                                <a href="#"><img src="/img/theme-img/app-btn.jpg" alt="img" /></a>
                                <a href="#"><img src="/img/theme-img/app-btn2.jpg" alt="img" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer-wrapper footer-layout1 footer-layout1-2 bg-light2">
                <div className="container">
                    <div className="footer-logo">
                        <img className="bg-light2" src="/logo.png" alt="img" width={120}/>
                    </div>
                </div>

                <div className="widget-area">
                    <div className="container">
                        <div className="row justify-content-between">

                            {/* À propos */}
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget footer-line">
                                    <h3 className="widget_title">À propos de l’hôtel</h3>
                                    <div className="th-widget-about style2">
                                        <p className="footer-text">
                                            Particular Destiny Suites Hôtel est un établissement prestigieux situé au cœur du quartier Bonapriso, à 5 minutes de l’aéroport international de Douala.
                                            Vivez un pur moment de détente dans un cadre idyllique au sein de nos différentes suites hautement équipées, encadrées par une équipe qualifiée et réactive dédiée à vous offrir la meilleure expérience client.
                                        </p>
                                        <div className="th-social">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="#"><i className="fab fa-youtube"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Liens utiles */}
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-line footer-widget">
                                    <h3 className="widget_title">Liens utiles</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><Link href="/apropos-nous">À propos</Link></li>
                                            <li><Link href="/reservation-suites">Chambres en vedette</Link></li>
                                            <li><Link href="/services">Nos meilleurs services</Link></li>
                                            <li><Link href="/contactez-nous">Demander une réservation</Link></li>
                                            <li><Link href="/contactez-nous">Carrière</Link></li>
                                            <li><Link href="/faq">FAQ</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Newsletter */}
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget footer-line">
                                    <div className="widget newsletter-widget footer-widget">
                                        <h4 className="newsletter-title h4">
                                            Abonnez-vous pour recevoir nos dernières offres
                                        </h4>
                                        <form className="newsletter-form">
                                            <input
                                                className="form-control"
                                                type="email"
                                                placeholder="Entrez votre email"
                                                required
                                            />
                                            <button type="submit" className="th-btn style1">
                                                S’ABONNER
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* Contact */}
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Contact</h3>
                                    <div className="th-widget-contact">
                                        <div className="info-box">
                                            <div className="box-icon">
                                                <MapPin size={24} />
                                            </div>
                                            <p className="box-text">
                                                15 Rue 2395, dite Copseco, Pavés Vers Lycée Bilingue – Bonapriso
                                            </p>
                                        </div>

                                        <div className="info-box">
                                            <div className="box-icon">
                                                <Phone size={24} />
                                            </div>
                                            <p className="box-text">
                                                <a href="tel:+237699902946">+237 699 902 946</a>
                                                <a href="tel:+237691604035">+237 691 604 035</a>
                                            </p>
                                        </div>

                                        <div className="info-box">
                                            <div className="box-icon">
                                                <Mail size={24} />
                                            </div>
                                            <p className="box-text">
                                                <a href="mailto:support@particulardestinysuites.com" className="box-link">
                                                    support@particulardestinysuites.com
                                                </a>
                                                <a href="mailto:contact@particulardestinysuites.com" className="box-link">
                                                    contact@particulardestinysuites.com
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    className="copyright-wrap"
                    style={{ backgroundImage: 'url(/img/bg/footer-copyright-bg.png)' }}
                >
                    <div className="container">
                        <div className="row gy-2 align-items-center">
                            <div className="col-lg-5">
                                <p className="copyright-text">
                                    Copyright © 2025{" "}
                                    <Link href="/">Particular Destiny Suites</Link>. Tous droits réservés.
                                </p>
                            </div>
                            <div className="col-lg-7 text-center text-lg-end">
                                <div className="footer-links">
                                    <ul>
                                        <li><Link href="/apropos-nous">Conditions d’utilisation</Link></li>
                                        <li><Link href="/apropos-nous">Politique de confidentialité</Link></li>
                                        <li><Link href="/apropos-nous">Cookies</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <WhatsAppButton />
            <ScrollToTop />
        </>
    );
}