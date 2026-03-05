"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ReservationsPage() {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/reservations`);
            const data = await res.json();
            setReservations(data.data);
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
            ) : (
                <div className="card shadow-sm border-0">
                    <div className="card-body p-0">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle mb-0">
                                <thead className="table-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Client</th>
                                    <th>Chambre</th>
                                    <th>Dates</th>
                                    <th>Montant</th>
                                    <th>Statut</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {reservations.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="text-center py-4 text-muted">
                                            Aucune réservation trouvée
                                        </td>
                                    </tr>
                                ) : (
                                    reservations.map((res: any) => (
                                        <tr key={res.id}>
                                            <td>{res.id}</td>

                                            <td>
                                                <div className="fw-semibold">
                                                    {res.user_name || "—"}
                                                </div>
                                                <small className="text-muted">
                                                    {res.user_email || ""}
                                                </small>
                                            </td>

                                            <td>{res.room_name || "—"}</td>

                                            <td>
                                                <div className="small">
                                                    <div>
                                                        <strong>Du:</strong> {res.check_in}
                                                    </div>
                                                    <div>
                                                        <strong>Au:</strong> {res.check_out}
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="fw-bold text-success">
                                                {res.total_price} FCFA
                                            </td>

                                            <td>
                                                    <span
                                                        className={`badge ${
                                                            res.status === "confirmed"
                                                                ? "bg-success"
                                                                : res.status === "pending"
                                                                ? "bg-warning text-dark"
                                                                : "bg-danger"
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
                                                            router.push(
                                                                `/admin/reservations/${res.id}/edit`
                                                            )
                                                        }
                                                    >
                                                        Modifier
                                                    </button>

                                                    <button className="btn btn-sm btn-outline-danger">
                                                        Supprimer
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}