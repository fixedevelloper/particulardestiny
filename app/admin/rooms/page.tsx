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

    if (isLoading) return <p>Chargement des suites...</p>;
    if (isError) return <p className='text-dark'>Impossible de récupérer les suites</p>;

    return (
        <div className="container-fluid p-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <h2 className="mb-2 mb-md-0 text-dark">Liste des suites</h2>
                <div className="d-flex flex-wrap gap-2">
                    <Link href='/admin/types-rooms' className="btn btn-outline-success">Type de suites</Link>
                    <Link href='/admin/categories-rooms' className="btn btn-dark">Categories</Link>
                    <Link href='/admin/rooms/add' className="btn btn-primary">Ajouter</Link>
                </div>
            </div>

            {/* Tableau desktop */}
            <div className="d-none d-md-block table-responsive shadow-sm rounded">
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
                            <td className="d-flex align-items-center gap-2">
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
                                Aucune suites disponible
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            {/* Cards mobile */}
            <div className="d-md-none">
                {rooms?.map(room => (
                    <div key={room.id} className="card shadow-sm mb-3">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-2">
                                {room.image?.thumb && (
                                    <img src={room.image.thumb} width={50} alt={room.title} className="rounded me-2" />
                                )}
                                <h5 className="mb-0">{room.title}</h5>
                            </div>
                            <p className="mb-1"><strong>Prix:</strong> {room.price.toLocaleString()} FCFA</p>
                            <p className="mb-1"><strong>Capacité:</strong> {room.capacity}</p>
                            <p className="mb-1"><strong>Taille:</strong> {room.size || "-"}</p>
                            <p className="mb-1"><strong>Catégorie:</strong> {room.category?.name || "-"}</p>
                            <p className="mb-1"><strong>Type:</strong> {room.room_type?.name || "-"}</p>
                            <div className="d-flex gap-2 mt-2 flex-wrap">
                                <Link href={'/admin/rooms/'+room.id+'/edit'} className="btn btn-sm btn-outline-primary flex-grow-1">Éditer</Link>
                                <button className="btn btn-sm btn-outline-danger flex-grow-1">Supprimer</button>
                            </div>
                        </div>
                    </div>
                ))}
                {!rooms || rooms.length === 0 && (
                    <p className="text-center text-muted py-3">Aucune suites disponible</p>
                )}
            </div>
        </div>
    );
}