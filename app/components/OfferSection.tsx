"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import React, {useEffect, useState} from "react";
import {MessageCircle,Star} from "lucide-react";
import {Room} from "../types/types";
import Link from "next/link";


export default function OfferSection() {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRooms = async () => {
            try {
                console.log("🚀 Fetch rooms...");

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/front/rooms`);
                console.log("📡 Response status:", res.status);

                const data = await res.json();
                console.log("📦 API data:", data);

                const mappedRooms: Room[] = data.data.map((room: any, index: number) => {
                    console.log("➡️ Room raw:", room);

                    return {
                        id: room.id,
                        number: (index + 1).toString().padStart(2, "0"),
                        title: room.title,
                        image: room.image ?? "/img/offer/offer_4_3.png",
                        price: room.price,
                        slug: room.slug,
                        features: room.features?.map((f: any) => ({
                            icon: f.icon,
                            text: f.name,
                        })) || [],
                    };
                });

                console.log("✅ Mapped rooms:", mappedRooms);

                setRooms(mappedRooms);
                setLoading(false);

            } catch (error) {
                console.error("❌ Error fetching rooms:", error);
                setLoading(false);
            }
        };

        fetchRooms();
    }, []);

    console.log("🎯 Rooms state:", rooms);

    if (loading) return <p>Loading rooms...</p>;

    return (
        <section
            className="offer-area5 position-relative overflow-hidden space-bottom"
            id="offer-sec"
        >
            <div className="shadow-area mb-0">
               {/* <div className="shadow-title">NOS SUITES</div>*/}
            </div>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div className="title-area">
                            <span className="sub-title2">CONFORT LUXUEUX</span>
                            <h2 className="sec-title text-white">NOS SUITES</h2>
                        </div>
                    </div>
                </div>

                <div className="slider-area">
                    <div className="offer-list-area">
                        <Swiper
                            modules={[Autoplay, FreeMode]}
                            slidesPerView={"auto"}
                            centeredSlides={true}
                            freeMode={true}
                            grabCursor={true}
                            spaceBetween={0}
                            loop={true}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            className="th-slider offer-slider5 slider-drag-wrap"
                        >
                            {rooms.map((room,index) => (
                                <SwiperSlide key={room.id}>
                                    <div className="room-box style2">
                                        <div className="box-img">
                                            <img src={room.image?.thumb} alt={room.title} />
                                        </div>

                                        <div className="box-title-area">
                                            <div className="box-number">{index}</div>
                                            <h3 className="box-title">
                                                <Link href={`/room-details/${room.slug}`}>{room.title}</Link>
                                            </h3>
                                        </div>

                                        <div className="box-content">
                                            <div className="box-wrapp">
                                                <div className="box-review">
                                                    {[...Array(3)].map((_, i) => (
                                                        <i key={i} >
                                                        <Star size={22} color="currentColor" /></i>
                                                    ))}
                                                </div>

                                                <p className="box-text">
                                                    Nous offrons de grands lits et chaque salle de bain dispose d'une baignoire et d'une douche, pour un moment de détente après une longue journée.
                                                </p>

                                                <h6 className="box-price">{room.price} FCFA / nuit</h6>

                                          {/*      <div className="room-card-meta">
                                                    {room.features?.map((f, i) => (
                                                        <span key={i}>
                                                    <img src={f.icon?.icon} alt="icon"  /> {f.name}
                                                </span>
                                                    ))}
                                                </div>*/}

                                                <div className="mt-10">

                                                    <Link href={`/room-details/${room.slug}`} className="th-btn2 style2">
                                                        VOIR DÉTAILS
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}