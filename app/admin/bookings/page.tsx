"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Reservation {
    id: number;
    user: {
        name: string;
        email: string;
    } | null;
    items: {
        room_name: string;
        check_in: string;
        check_out: string;
        adults: number;
        children: number;
        price_per_night: number;
    }[];
    total_price: number;
    status: "pending" | "confirmed" | "checked_in" | "checked_out" | "cancelled";
}

export default function ReservationsPage() {
    const [reservations, setReservations] = useState<Reservation[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/reservations`);
            const data = await res.json();
            console.log(data.data)
            setReservations(data.data || []);
        } catch (error) {
            console.error("Erreur:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container-fluid mt-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
                <h2 className="text-dark m-0">Liste des Réservations</h2>
                <button
                    className="btn btn-primary"
                    onClick={() => router.push("/admin/reservations/create")}
                >
                    + Ajouter une réservation
                </button>
            </div>

            {/* Loader */}
            {loading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-primary" />
                </div>
            ) : reservations.length === 0 ? (
                <p className="text-center text-muted py-4">Aucune réservation trouvée</p>
            ) : (
                <>
                    {/* Table desktop */}
                    <div className="d-none d-md-block card shadow-sm border-0">
                        <div className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table table-hover align-middle mb-0">
                                    <thead className="table-dark">
                                    <tr>
                                        <th>ID</th>
                                        <th>Client</th>
                                        <th>Suites</th>
                                        <th>Dates</th>
                                        <th>Montant</th>
                                        <th>Statut</th>
                                        <th className="text-end">Actions</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {reservations.map(res => (
                                        <tr key={res.id}>
                                            <td>{res.id}</td>
                                            <td>
                                                <div className="fw-semibold">{res.user?.name || "—"}</div>
                                                <small className="text-muted">{res.user?.email || ""}</small>
                                            </td>
                                            <td>{res.items.map((i) => i.room_name || "—").join(", ")}</td>
                                            <td>
                                                {res.items.map((item, idx) => (
                                                    <div key={idx} className="small">
                                                        <div>
                                                            <strong>Du:</strong>{" "}
                                                            {new Date(item.check_in).toLocaleDateString("fr-FR")}
                                                        </div>
                                                        <div>
                                                            <strong>Au:</strong>{" "}
                                                            {new Date(item.check_out).toLocaleDateString("fr-FR")}
                                                        </div>
                                                    </div>
                                                ))}
                                            </td>
                                            <td className="fw-bold text-success">{res.total_price} FCFA</td>
                                            <td>
                                            <span
                                                className={`badge ${
                                                    res.status === "confirmed"
                                                        ? "bg-success"
                                                        : res.status === "pending"
                                                        ? "bg-warning text-dark"
                                                        : res.status === "cancelled"
                                                            ? "bg-danger"
                                                            : "bg-secondary"
                                                }`}
                                            >
                                                {res.status}
                                            </span>
                                            </td>
                                            <td className="text-end">
                                                <div className="d-flex gap-2 justify-content-end flex-wrap">
                                                    <button
                                                        className="btn btn-sm btn-outline-primary"
                                                        onClick={() =>
                                                            router.push(`/admin/bookings/${res.id}`)
                                                        }
                                                    >
                                                        Detail
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-danger">
                                                        Supprimer
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Cards mobile */}
                    <div className="d-md-none">
                        {reservations.map(res => (
                            <div key={res.id} className="card shadow-sm mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between mb-2">
                                        <div className="fw-semibold">{res.user?.name || "—"}</div>
                                        <span
                                            className={`badge ${
                                                res.status === "confirmed"
                                                    ? "bg-success"
                                                    : res.status === "pending"
                                                    ? "bg-warning text-dark"
                                                    : res.status === "cancelled"
                                                        ? "bg-danger"
                                                        : "bg-secondary"
                                            }`}
                                        >
                                    {res.status}
                                </span>
                                    </div>
                                    <div className="text-muted mb-2">{res.user?.email || ""}</div>
                                    <div className="mb-2">
                                        <strong>Suites:</strong> {res.items.map((i) => i.room_name || "—").join(", ")}
                                    </div>
                                    <div className="mb-2">
                                        {res.items.map((item, idx) => (
                                            <div key={idx} className="small">
                                                <div>
                                                    <strong>Du:</strong> {new Date(item.check_in).toLocaleDateString("fr-FR")}
                                                </div>
                                                <div>
                                                    <strong>Au:</strong> {new Date(item.check_out).toLocaleDateString("fr-FR")}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="fw-bold text-success mb-2">{res.total_price} FCFA</div>
                                    <div className="d-flex gap-2 flex-wrap justify-content-end">
                                        <button
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => router.push(`/admin/bookings/${res.id}`)}
                                        >
                                            Detail
                                        </button>
                                        <button className="btn btn-sm btn-outline-danger">Supprimer</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}