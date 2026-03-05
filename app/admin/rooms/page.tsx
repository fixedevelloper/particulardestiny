"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {Room} from "../../types/types";
import Link from "next/link";


async function fetchRooms() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/rooms`);
    return res.data.data; // adapter selon la réponse de Laravel
}

export default function RoomsPage() {
    const { data: rooms, isLoading, isError } = useQuery<Room[]>({
        queryKey: ["rooms"],
        queryFn: fetchRooms,
    });

    if (isLoading) return <p>Chargement des chambres...</p>;
    if (isError) return <p className='text-dark'>Impossible de récupérer les chambres</p>;

    return (
        <div className="container-fluid p-4">
            {/* Header avec titre et bouton Ajouter */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h2 className="mb-2 mb-md-0 text-dark">Liste des Chambres</h2>
                <Link href='/admin/types-rooms' className="btn btn-outline-success">
                    Type de suites
                </Link>
                <Link href='/admin/categories-rooms' className="btn btn-dark">
                    Categories
                </Link>
                <Link href='/admin/rooms/add' className="btn btn-primary">
                    Ajouter une chambre
                </Link>
            </div>

            {/* Tableau responsive */}
            <div className="table-responsive shadow-sm rounded">
                <table className="table table-striped table-bordered table-hover align-middle mb-0">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Prix (FCFA)</th>
                        <th>Capacité</th>
                        <th>Taille (m²)</th>
                        <th>Catégorie</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rooms?.map((room) => (
                        <tr key={room.id}>
                            <td>{room.id}</td>
                            <td className="flex items-center gap-2">
                                {room.image?.thumb && (
                                    <img
                                        src={room.image.thumb}
                                        width={50}
                                        alt={room.title}
                                        className="rounded"
                                    />
                                )}
                                <span>{room.title}</span>
                            </td>
                            <td>{room.price.toLocaleString()}</td>
                            <td>{room.capacity}</td>
                            <td>{room.size || "-"}</td>
                            <td>{room.category?.name || "-"}</td>
                            <td>{room.room_type?.name || "-"}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <Link href={'/admin/rooms/'+room.id+'/edit'} className="btn btn-sm btn-outline-primary">Éditer</Link>
                                    <button className="btn btn-sm btn-outline-danger">Supprimer</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    {!rooms || rooms.length === 0 && (
                        <tr>
                            <td colSpan={8} className="text-center text-muted">
                                Aucune chambre disponible
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}