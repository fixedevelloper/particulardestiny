"use client";

import { useEffect, useState } from "react";

export default function RoomTypePage() {
    const [types, setTypes] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingType, setEditingType] = useState<any>(null);
    const [name, setName] = useState("");

    // Charger les types
    const fetchTypes = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/admin/room-types`
            );
            const data = await res.json();
            setTypes(data.data || []);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTypes();
    }, []);

    // Ouvrir modal
    const openModal = (type: any = null) => {
        setEditingType(type);
        setName(type?.name || "");
        setShowModal(true);
    };

    // Sauvegarde (create/update)
    const handleSubmit = async () => {
        try {
            const url = editingType
                ? `/api/admin/room-types/${editingType.id}`
                : `/api/admin/room-types`;

            const method = editingType ? "PUT" : "POST";

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}${url}`,
                {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name }),
                }
            );

            if (!res.ok) throw new Error("Erreur");

            setShowModal(false);
            setName("");
            setEditingType(null);
            fetchTypes();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="container-fluid p-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Types de chambres</h2>
                <button
                    className="btn btn-primary"
                    onClick={() => openModal()}
                >
                    Ajouter
                </button>
            </div>

            {/* Table */}
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {types.map((type) => (
                        <tr key={type.id}>
                            <td>{type.id}</td>
                            <td>{type.name}</td>
                            <td>
                                <button
                                    className="btn btn-sm btn-outline-primary me-2"
                                    onClick={() => openModal(type)}
                                >
                                    Modifier
                                </button>
                            </td>
                        </tr>
                    ))}

                    {types.length === 0 && (
                        <tr>
                            <td colSpan={3} className="text-center">
                                Aucun type
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {showModal && (
                <>
                    <div className="modal fade show d-block">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">
                                        {editingType
                                            ? "Modifier"
                                            : "Ajouter"}{" "}
                                        un type
                                    </h5>
                                    <button
                                        className="btn-close"
                                        onClick={() => setShowModal(false)}
                                    />
                                </div>

                                <div className="modal-body">
                                    <label className="form-label">Nom</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>

                                <div className="modal-footer">
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Annuler
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        onClick={handleSubmit}
                                    >
                                        Enregistrer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backdrop */}
                    <div className="modal-backdrop fade show"></div>
                </>
            )}
        </div>
    );
}