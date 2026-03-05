import Breadcrumb from "../../components/layouts/Breadcrumb";
import React from "react";

import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Breadcrumb
                title={"Contactez-nous"}
                items={[
                    { label: "Accueil", href: "/" },
                    { label: "Contactez-nous", href: "/contactez-nous" },
                ]}
            />

            {/* INFORMATIONS DE CONTACT */}
            <div className="contact-info-area space-top">
                <div className="container">
                    <div className="contact-info-wrapp">
                        <div className="team-contact-title">
                            <h3 className="box-title">Informations de contact :</h3>
                        </div>

                        <div className="contact-info">

                            {/* Adresse */}
                            <div className="team-contact">
                                <div className="icon-btn">
                                    <MapPin size={24} />
                                </div>
                                <div className="media-body">
                                    <h5 className="box-title">Notre adresse</h5>
                                    <p className="box-text">
                                        15 Rue 2395, dite Copseco, Pavés Vers Lycée Bilingue – Bonapriso
                                    </p>
                                </div>
                            </div>

                            {/* Téléphone */}
                            <div className="team-contact">
                                <div className="icon-btn">
                                    <Phone size={24} />
                                </div>
                                <div className="media-body">
                                    <h5 className="box-title">Numéro de téléphone</h5>
                                    <p className="box-text">
                                        <a href="tel:+01234567890">+237 699902946</a>
                                        <br />
                                        <a href="tel:+09876543210">+237 691604035</a>
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="team-contact">
                                <div className="icon-btn">
                                    <Mail size={24} />
                                </div>
                                <div className="media-body">
                                    <h5 className="box-title">Adresse e-mail</h5>
                                    <p className="box-text">
                                        <a href="mailto:contact@particulardestinysuites.com">contact@particulardestinysuites.com</a>
                                        <br />
                                        <a href="mailto:csupport@particulardestinysuites.com">support@particulardestinysuites.com</a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* GOOGLE MAP */}
            <div className="contact-map2">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sAngfuztheme!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                    className="w-full h-[400px]"
                ></iframe>
                <div className="contact-icon">
                    <img src="/img/icon/location-dot.svg" alt="Localisation" />
                </div>
            </div>

            {/* FORMULAIRE DE CONTACT */}
            <div className="space">
                <div className="container">
                    <div className="row gx-0">
                        <div className="col-xl-6">
                            <form
                                method="POST"
                                className="contact-form ajax-contact"
                            >
                                <div className="title-area mb-45 text-center text-lg-start">
                                    <span className="sub-title2 style1">CONTACTEZ-NOUS</span>
                                    <h2 className="sec-title text-white">Vous avez des questions ?</h2>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input type="text" className="form-control" name="name" placeholder="Nom*" required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input type="tel" className="form-control" name="number" placeholder="Téléphone*" required />
                                    </div>
                                    <div className="form-group col-12">
                                        <input type="email" className="form-control" name="email" placeholder="Adresse e-mail*" required />
                                    </div>
                                    <div className="form-group col-12">
                                        <select name="subject" className="form-select nice-select" required>
                                            <option value="" disabled selected hidden>Sujet</option>
                                            <option value="Luxury Hotel">Hôtel de luxe</option>
                                            <option value="Rooms">Chambres</option>
                                            <option value="Hotel">Hôtel</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-12">
                                      <textarea
                                          name="message"
                                          cols={30}
                                          rows={3}
                                          className="form-control"
                                          placeholder="Votre message"
                                          required
                                      />
                                    </div>
                                    <div className="form-btn col-12">
                                        <button type="submit" className="th-btn">ENVOYER LE MESSAGE</button>
                                    </div>
                                </div>

                                <p className="form-messages mb-0 mt-3"/>
                            </form>
                        </div>

                        {/* IMAGE */}
                        <div className="col-xl-6">
                            <div className="contact-image global-img">
                                <img src="/img/normal/contact-img.jpg" alt="Contact" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}