"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {RoomForm} from "../../../../components/admin/AddEditRoomForm";

export default function EditRoomPage() {
    const { id } = useParams();
    const [room, setRoom] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchRoom = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/admin/rooms/${id}`
                );

                if (!res.ok) throw new Error("Erreur chargement Suite");

                const data = await res.json();
                setRoom(data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoom();
    }, [id]);

    if (loading) {
        return <p className="text-center mt-5">Chargement...</p>;
    }

    if (!room) {
        return <p className="text-center mt-5 text-danger">Suite introuvable</p>;
    }

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Modifier la Suite</h2>
            <RoomForm room={room} />
        </div>
    );
}