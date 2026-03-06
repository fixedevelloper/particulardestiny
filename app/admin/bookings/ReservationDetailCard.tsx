import {Reservation} from "../../types/types";
import { Mail, Phone, MapPin, Bed, User, UserPlus, CreditCard, Calendar, Edit, X } from "lucide-react";

type Props = {
    reservation: Reservation;
    onEditItem?: (itemId: number) => void;
    onCancelItem?: (itemId: number) => void;
    onMarkPaidItem?: (itemId: number) => void;
};

export function ReservationDetail({ reservation, onEditItem, onCancelItem, onMarkPaidItem }: Props) {
    const getStatusVariant = (status: string) => {
        switch (status.toLowerCase()) {
            case "paid":
            case "confirmé":
                return "success";
            case "pending":
            case "en attente":
                return "warning";
            case "cancelled":
            case "annulé":
                return "danger";
            default:
                return "secondary";
        }
    };

    return (
        <div className="container my-4">
            {/* Card principale */}
            <div className="card shadow rounded-4">
                <div className="card-body">
                    {/* Header client */}
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4 border-bottom pb-3">
                        <div>
                            <h2 className="card-title">
                                {reservation.details.name} {reservation.details.surname}
                            </h2>
                            <p className="mb-1 text-muted">
                                <Mail size={16} className="me-1" />
                                {reservation.details.email}
                            </p>
                            <p className="mb-0 text-muted">
                                <Phone size={16} className="me-1" />
                                {reservation.details.phone}
                            </p>
                        </div>
                        {/* Actions */}
                        <div className="mt-auto d-flex gap-2">
                            <button
                                className="btn btn-sm btn-outline-primary d-flex align-items-center"
                                onClick={() => onEditItem?.(reservation.id)}
                            >
                                <Edit size={14} className="me-1" /> Modifier
                            </button>
                            <button
                                className="btn btn-sm btn-outline-danger d-flex align-items-center"
                                onClick={() => onCancelItem?.(reservation.id)}
                            >
                                <X size={14} className="me-1" /> Annuler
                            </button>
                            <button
                                className="btn btn-sm btn-outline-success d-flex align-items-center"
                                onClick={() => onMarkPaidItem?.(reservation.id)}
                            >
                                <CreditCard size={14} className="me-1" /> Marquer payé
                            </button>
                        </div>
                        <div className="mt-2 mt-md-0 text-md-end">
                            <p className="mb-1">
                                <MapPin size={16} className="me-1" />
                                Pays: <strong>{reservation.country?.name || "N/A"}</strong>
                            </p>
                            <span className={`badge bg-${getStatusVariant(reservation.details.payment_status)} me-1`}>
                                {reservation.details.payment_status}
                            </span>
                            <span className={`badge bg-${getStatusVariant(reservation.details.status)}`}>
                                {reservation.details.status}
                            </span>
                        </div>
                    </div>

                    {/* Items */}
                    <h4 className="mb-3">Réservation</h4>
                    {reservation.items.length === 0 ? (
                        <p className="text-muted">Aucun item réservé</p>
                    ) : (
                        <div className="row g-3">
                            {reservation.items.map(item => (
                                <div key={item.id} className="col-12 col-md-6 col-lg-4">
                                    <div className="card h-100 shadow-sm border-0">
                                        <div className="card-body d-flex flex-column">
                                            <h5 className="card-title">
                                                <Bed size={16} className="me-1" />
                                                {item.room_name || "Chambre"}
                                            </h5>
                                            <div className="mb-2">
                                                <span className="badge rounded-pill bg-primary me-1">
                                                    <Calendar size={14} className="me-1" />
                                                    Du: {new Date(item.check_in).toLocaleDateString("fr-FR")}
                                                </span>
                                                <span className="badge rounded-pill bg-secondary">
                                                    <Calendar size={14} className="me-1" />
                                                    Au: {new Date(item.check_out).toLocaleDateString("fr-FR")}
                                                </span>
                                            </div>
                                            <p className="mb-1">
                                                <User size={14} className="me-1" /> Adultes: {item.adults}{" "}
                                                <UserPlus size={14} className="ms-2 me-1" /> Enfants: {item.children}
                                            </p>
                                            <p className="fw-bold mb-1">
                                                <CreditCard size={14} className="me-1" /> Prix: {item.price} FCFA
                                            </p>
                                            <p className="text-muted mb-2">Total personnes: {item.quantity}</p>


                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Footer */}
                    <div className="mt-4 pt-3 border-top text-muted d-flex flex-column flex-md-row justify-content-between">
                        <span>
                            Créé le: {new Date(reservation.timestamps.created_at).toLocaleString("fr-FR")}
                        </span>
                        <span>
                            Mise à jour: {new Date(reservation.timestamps.updated_at).toLocaleString("fr-FR")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}