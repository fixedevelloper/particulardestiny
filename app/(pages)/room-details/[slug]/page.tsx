"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "../../../components/layouts/Breadcrumb";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import BookingSidebar from "../../../components/BookingSidebar";
import {Image, Room, RoomImage} from "../../../types/types";
import { Swiper as SwiperClass } from "swiper";
import {useCartStore} from "../../../store/cartStore";

export default function RoomDetailPage() {
    const { slug } = useParams();
    const [room, setRoom] = useState<Room>();
    const addItem = useCartStore(state => state.addItem)
    useEffect(() => {
        const fetchRoom = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/front/rooms/${slug}`
            );
            const data = await res.json();
            setRoom(data.data);
        };

        fetchRoom();
    }, [slug]);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    if (!room) return <p className="text-center py-5">Loading...</p>;

    return (
        <>
            <Breadcrumb
                title={room.title}
                items={[
                    { label: "Accueil", href: "/" },
                    { label: "Suites", href: "/rooms" },
                    { label: room.title }
                ]}
            />

            <section className="room-area space-top space-extra-bottom overflow-hidden">
                <div className="container">
                    <div className="row flex-row-reverse">

                        {/* CONTENU */}
                        <div className="col-xl-9 col-lg-8">
                            <div className="room-page-single">

                                {/* IMAGE PRINCIPALE */}
                                <div className="mb-4">
                                    <div className="mb-4">
                                        <>
                                            {/* SLIDER PRINCIPAL */}
                                            <Swiper
                                                modules={[Navigation, Thumbs]}
                                                thumbs={{ swiper: thumbsSwiper }}
                                                className="mb-3"
                                            >
                                                {room.images?.map((img) => (
                                                    <SwiperSlide key={img.id}>

                                                        <img
                                                            src={img?.thumb}
                                                            className="w-100 rounded"
                                                            style={{ height: "600px", objectFit: "cover" }}
                                                            alt={room?.title}
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>

                                            {/* MINIATURES */}
                                            <Swiper
                                                modules={[Thumbs]}
                                                onSwiper={setThumbsSwiper}
                                                spaceBetween={10}
                                                slidesPerView={4}
                                            >
                                                {room.images?.map((img1:Image) => (

                                                    <SwiperSlide key={img1.id}>
                                                        <img
                                                            src={img1?.thumb}
                                                            alt={img1?.name}
                                                            className="w-100 rounded"
                                                            style={{ height: "80px", objectFit: "cover", cursor: "pointer" }}
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </>

                                        <span className="badge bg-primary mt-2">
                                    {room.price} / nuit
                                </span>
                                    </div>
                                </div>

                                {/* DESCRIPTION */}
                                <div className="page-content">
                                    <h2 className="box-title mt-4">
                                        À propos de la Suite
                                    </h2>
                                    <p className="box-text">
                                        {room.description}
                                    </p>

                                    {/* CARACTÉRISTIQUES */}
                                    <h2 className="box-title mt-5 mb-3">
                                        Caractéristiques de la Suite
                                    </h2>
                                    <div className="room-checklist mb-60">
                                        <div className="checklist style2 list-four-column">
                                            <ul>
                                                {room.features?.map((f) => (
                                                    <li key={f.id}>{f.name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* GALERIE */}
                                <div className="mt-5">
                                    <h3>Galerie</h3>
                                    <div className="row">
                                        {room.images?.map((img:Image) => (
                                            <div key={img.id} className="col-md-4 mb-3">
                                                <img
                                                    src={img?.thumb}
                                                    className="w-100 rounded"
                                                    alt={room?.image?.name}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CARTE */}
                                <div className="mt-5">
                                    <h3>Localisation</h3>
                                    <iframe
                                        src="https://maps.google.com/maps?q=douala&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                        width="100%"
                                        height="300"
                                        loading="lazy"
                                        title="Localisation de la Suite"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                        {/* SIDEBAR */}
                        <BookingSidebar room={room} />
                    </div>
                </div>
            </section>
        </>
    );
}