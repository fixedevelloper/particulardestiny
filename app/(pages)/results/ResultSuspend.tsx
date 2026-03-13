"use client";

import React, {Suspense, useState} from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import {ErrorBoundary, FallbackProps} from "react-error-boundary";
import {Star} from "lucide-react";
import PaymentModal from "../../components/PaymentModal";
import {Room} from "../../types/types";
import Link from "next/link";

// Fetch rooms côté client
const fetchRooms = async (params: any) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/front/rooms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
        cache: "no-store",
    });

    if (!res.ok) throw new Error("Impossible de récupérer les Suites");

    const data = await res.json();
    return data.data || [];
};

// Skeleton loader pendant le fetch
function RoomsSkeleton() {
    return (
        <div className="row gy-4">
            {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="col-lg-4">
                    <div className="room-box skeleton">
                        <div className="box-img bg-gray-200 h-48 w-full animate-pulse"></div>
                        <span className="discount bg-gray-200 h-6 w-24 block mt-2 animate-pulse"></span>
                        <h3 className="bg-gray-200 h-6 w-3/4 mt-2 animate-pulse"></h3>
                    </div>
                </div>
            ))}
        </div>
    );
}

// Composant qui affiche les Suites
function RoomsList({ location, arrivalDate, departureDate, guests }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const { data: rooms } = useQuery<Room[], Error>({
        queryKey: ["rooms", location, arrivalDate, departureDate, guests],
        queryFn: () => fetchRooms({ location, arrivalDate, departureDate, guests }),
        refetchOnWindowFocus: false, // pas de refetch automatique
    });

    if (!rooms || rooms?.length === 0) {
        return (
            <div className="text-center">
                <h3>Aucune Suite disponible 😔</h3>
                <p>Essayez d’autres dates ou une autre localisation.</p>
            </div>
        );
    }

    function handlePay() {

    }

    return (
        <div className="row gy-4">
            {rooms?.map((room:Room,index:number) => (
                <div key={room.id} className="col-lg-3">
                    <div className="room-box">
                        <div className="box-img">
                            <img src={room.image?.thumb} alt={room.title} />
                        </div>

                        <span className="discount">
                  {room.price} FCFA/nuit
                </span>

                        <div className="box-title-area">
                            <div className="box-number">
                                {(index + 1).toString().padStart(2, "0")}
                            </div>

                            <h3 className="box-title">
                                <a href={`/room-details/${room.slug}`}>
                                    {room.title}
                                </a>
                            </h3>
                            <div className="mt-10">
                                <a
                                    href={`/room-details/${room.slug}`}
                                    className="th-btn2 style2"
                                >
                                    JE RESERVE MAINTENANT
                                </a>
                            </div>
                        </div>

                        <div className="box-content">
                            <div className="box-wrapp">

                                <div className="box-number">
                                    {(index + 1).toString().padStart(2, "0")}
                                </div>

                                <h3 className="box-title">
                                    <Link href={`/room-details/${room.slug}`}>
                                        {room.title}
                                    </Link>
                                </h3>

                                <div className="box-review">
                                    {[...Array(3)].map((_, i) => (
                                        <Star key={i} size={16} fill="currentColor" stroke="currentColor" />
                                    ))}
                                </div>

                                {/* CARACTÉRISTIQUES */}
                                <div className="room-card-meta">
                                    {room.features?.map((f: any) => (
                                        <span key={f.id}>
                          <img src={f.icon} alt="icône"/> {f.name}
                        </span>
                                    ))}
                                </div>

                                <div className="mt-10">
                                    <Link
                                        href={`/room-details/${room.slug}`}
                                        className="th-btn2 style2"

                                    >
                                        VOIR LES DÉTAILS
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <PaymentModal
                        room={room}
                        arrivalDate="2026-03-10"
                        departureDate="2026-03-12"
                        guests={2}
                        isOpen={isOpen}
                        onClose={() => setIsOpen(false)}
                        onPay={handlePay}
                    />
                </div>

            ))}
        </div>
    );
}
export default function ResultSuspendPage() {
    const searchParams = useSearchParams();

    const location = searchParams.get("location") || "";
    const arrivalDate = searchParams.get("arrivalDate") || "";
    const departureDate = searchParams.get("departureDate") || "";
    const guests = searchParams.get("guests") || "";

    return (
        <section className="overflow-hidden space">
            <div className="container">
                <div className="mb-40">
                    <h2>Résultats pour {location}</h2>
                    <p>
                        {arrivalDate} → {departureDate} | {guests} invités
                    </p>
                </div>

                <ErrorBoundary
                    fallbackRender={(props: FallbackProps) => {
                        const error = props.error as Error; // on cast ici
                        return (
                            <div className="text-center">
                                <h3>Erreur 😔</h3>
                                <p>{error.message}</p>
                            </div>
                        );
                    }}
                >
                    <Suspense fallback={<RoomsSkeleton />}>
                        <RoomsList
                            location={location}
                            arrivalDate={arrivalDate}
                            departureDate={departureDate}
                            guests={guests}
                        />
                    </Suspense>
                </ErrorBoundary>
            </div>
        </section>
    );
}