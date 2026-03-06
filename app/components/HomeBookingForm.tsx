"use client";

import { useState } from "react";
import {useRouter} from "next/navigation";
import {MapPin} from "lucide-react";

export default function HomeBookingForm() {

    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const formatDate = (date: Date) => {
        return date.toISOString().split("T")[0];
    };

    const [formData, setFormData] = useState({
        location: "",
        arrivalDate: formatDate(today),
        departureDate: formatDate(tomorrow),
        guests: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.arrivalDate > formData.departureDate) {
            alert("Departure date must be after arrival date.");
            return;
        }

        const query = new URLSearchParams({
            location: formData.location,
            arrivalDate: formData.arrivalDate,
            departureDate: formData.departureDate,
            guests: formData.guests,
        }).toString();

        router.push(`/results?${query}`);
    }
    return (
        <div className="booking-area style3">
            <div className="container">
                <form onSubmit={handleSubmit} className="booking-form style3">
                    <div className="hero-wrap">

                        {/* Location */}
                        <div className="location-form-group">
                            <div className="box-icon">
                                <img src="/logo.png" alt="img" width={30}/>
                            </div>
                            <i className="fas fa-map-marker-alt me-2">
                                <MapPin />
                            </i>
                            <input
                                type="text"
                                name="location"
                                placeholder="Paris , france"
                                value={formData.location}
                                onChange={handleChange}
                                required
                                className="form-control"
                            />
                        </div>

                        <div className="select-form-group">

                            {/* Arrival / Departure */}
                            <div className="form-group">
                                <label>Arrival / Departure</label>
                                <div className="input-group">
                                    <input
                                        type="date"
                                        name="arrivalDate"
                                        value={formData.arrivalDate}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        min={formatDate(today)}
                                    />
                                    <input
                                        type="date"
                                        name="departureDate"
                                        value={formData.departureDate}
                                        onChange={handleChange}
                                        required
                                        className="form-control"
                                        min={formatDate(today)}
                                    />
                                </div>
                            </div>

                            {/* Guests */}
                            <div className="form-group">
                                <label>Client</label>
                                <select
                                    name="guests"
                                    value={formData.guests}
                                    onChange={handleChange}
                                    required
                                    className="form-select"
                                >
                                    <option value="" disabled>
                                        Clients
                                    </option>
                                    <option value="1">2 Adulte Seul</option>
                                    <option value="2">2 Adultes 1 Enfant</option>
                                    <option value="3">2 Adultes 2 Enfants</option>
                                    <option value="4">3 or 4+ Persones</option>
                                </select>
                            </div>

                            <div className="form-btn">
                                <button type="submit" className="th-btn2 style1">
                                    RESERVER
                                </button>
                            </div>

                        </div>

                        <a className="th-btn th-icon" href="/reservation-suites">
                            NOS SUITES
                        </a>

                    </div>
                </form>
            </div>
        </div>
    );
}