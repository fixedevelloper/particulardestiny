'use client'
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ReservationDetail } from "../ReservationDetailCard";
import {Reservation} from "../../../types/types";


export default function DetailReservationPage() {
    const { id } = useParams();
    const [reservation, setReservation] = useState<Reservation | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchReservation = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/reservations/${id}`
                );

                if (!res.ok) throw new Error("Erreur chargement réservation");

                const data = await res.json();
                setReservation(data.data); // Assurez-vous que le backend renvoie { data: ... }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchReservation();
    }, [id]);

    if (loading) return <p className="text-center mt-5">Chargement...</p>;
    if (!reservation) return <p className="text-center mt-5 text-danger">Réservation introuvable</p>;

    function onCancelItem() {

    }

    function onEditItem() {

    }

    function onMarkPaidItem() {

    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Détail réservation</h2>
            <ReservationDetail reservation={reservation} onCancelItem={onCancelItem} onEditItem={onEditItem} onMarkPaidItem={onMarkPaidItem}/>
        </div>
    );
}