"use client";

import { useState } from "react";
import {Room} from "../types/types";

interface PaymentModalProps {
    room: Room;
    arrivalDate: string;
    departureDate: string;
    guests: number;
    isOpen: boolean;
    onClose: () => void;
    onPay: (paymentMethod: string) => void;
}

const paymentMethods = ["Mobile Money", "Card", "PayPal"];

export default function PaymentModal({
                                         room,
                                         arrivalDate,
                                         departureDate,
                                         guests,
                                         isOpen,
                                         onClose,
                                         onPay,
                                     }: PaymentModalProps) {
    const [selectedPayment, setSelectedPayment] = useState(paymentMethods[0]);

    if (!isOpen) return null;

    return (
        <div className="modal modal-lg show d-block me-xl-4 pe-xl-3 space" tabIndex={-1} role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content booking-form2 style3 ajax-contact">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="title-area mb-40">
                            <span className="sub-title2 style1 mb-15">Paiement de la chambre</span>
                            <h2 className="sec-title text-white">{room.title}</h2>
                        </div>
                        <button type="button" className="btn-close" onClick={onClose}/>
                    </div>

                    {/* Body */}
                    <div className="modal-body">
                        {/* Room info */}
                        <div className="text-center mb-3">
                            <img
                                src={room.image?.thumb || "/img/offer/offer_4_4.png"}
                                alt={room.title}
                                className="img-fluid rounded mb-2"
                            />
                            <h5>{room.title}</h5>
                            <p className="mb-1">
                                {arrivalDate} → {departureDate} | {guests} invités
                            </p>
                            <span className="text-white">{room.price} FCFA / nuit</span>
                        </div>

                        {/* Payment methods */}
                        <div className="mt-3">
                            <h6>Mode de paiement</h6>
                            <div className="d-flex flex-column gap-2">
                                {paymentMethods.map((method) => (
                                    <div className="form-check" key={method}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="payment"
                                            id={method}
                                            value={method}
                                            checked={selectedPayment === method}
                                            onChange={() => setSelectedPayment(method)}
                                        />
                                        <label className="form-check-label" htmlFor={method}>
                                            {method}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="modal-footer">
                        <button type="button" className="th-btn style2" onClick={onClose}>
                            Annuler
                        </button>
                        <button
                            type="button"
                            className="th-btn style1"
                            onClick={() => onPay(selectedPayment)}
                        >
                            Payer maintenant
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}