"use client";

import { useEffect, useState } from "react";
import { X, Edit, Trash } from "lucide-react";
export default function FeaturePage() {
    const [features, setFeatures] = useState<any[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [editingFeature, setEditingFeature] = useState<any>(null);

    const [name, setName] = useState("");
    const [icon, setIcon] = useState("");

    // Charger les features
    const fetchFeatures = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/admin/features`
            );
            const data = await res.json();
            setFeatures(data.data || []);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        fetchFeatures();
    }, []);

    // Ouvrir modal
    const openModal = (feature: any = null) => {
        setEditingFeature(feature);
        setName(feature?.name || "");
        setIcon(feature?.icon || "");
        setShowModal(true);
    };

    // Submit
    const handleSubmit = async () => {
        try {
            const url = editingFeature
                ? `/api/admin/features/${editingFeature.id}`
                : `/api/admin/features`;

            const method = editingFeature ? "PUT" : "POST";

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}${url}`,
                {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, icon }),
                }
            );

            if (!res.ok) throw new Error("Erreur");

            setShowModal(false);
            setEditingFeature(null);
            setName("");
            setIcon("");
            fetchFeatures();
        } catch (e) {
            console.error(e);
        }
    };

    // Delete
    const handleDelete = async (id: number) => {
        if (!confirm("Supprimer cet équipement ?")) return;

        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/admin/features/${id}`,
                {
                    method: "DELETE",
                }
            );

            fetchFeatures();
        } catch (e) {
            console.error(e);
        }
    };

    return (
    <div className="container-fluid p-4">
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
            <h2 className="mb-2">Équipements (Features)</h2>
            <button className="btn btn-primary" onClick={() => openModal()}>
                Ajouter
            </button>
        </div>

        {/* Desktop: Table */}
        <div className="d-none d-md-block table-responsive shadow-sm rounded">
            <table className="table table-bordered table-hover align-middle mb-0">
                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Icône</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {features.length === 0 && (
                    <tr>
                        <td colSpan={4} className="text-center text-muted py-3">
                            Aucun équipement
                        </td>
                    </tr>
                )}

                {features.map(f => (
                    <tr key={f.id}>
                        <td>{f.id}</td>
                        <td>{f.name}</td>
                        <td>
                            {f.icon ? <i className={`${f.icon} fs-5`} /> : "-"}
                        </td>
                        <td>
                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-sm btn-outline-primary d-flex align-items-center"
                                    onClick={() => openModal(f)}
                                >
                                    <Edit size={14} className="me-1" /> Modifier
                                </button>
                                <button
                                    className="btn btn-sm btn-outline-danger d-flex align-items-center"
                                    onClick={() => handleDelete(f.id)}
                                >
                                    <Trash size={14} className="me-1" /> Supprimer
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

        {/* Mobile: Cards */}
        <div className="d-md-none">
            {features.length === 0 && (
                <p className="text-center text-muted py-3">Aucun équipement</p>
            )}

            {features.map(f => (
                <div key={f.id} className="card shadow-sm mb-3">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                            <div>
                                <h5 className="mb-1">{f.name}</h5>
                                {f.icon && <i className={`${f.icon} fs-4 text-primary`} />}
                            </div>
                            <div className="d-flex gap-2">
                                <button
                                    className="btn btn-sm btn-outline-primary d-flex align-items-center"
                                    onClick={() => openModal(f)}
                                >
                                    <Edit size={14} className="me-1" />
                                    Modifier
                                </button>
                                <button
                                    className="btn btn-sm btn-outline-danger d-flex align-items-center"
                                    onClick={() => handleDelete(f.id)}
                                >
                                    <Trash size={14} className="me-1" />
                                    Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Modal */}
        {showModal && (
            <>
                <div className="modal fade show d-block" tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content shadow-sm rounded">
                            <div className="modal-header">
                                <h5 className="modal-title">
                                    {editingFeature ? "Modifier" : "Ajouter"} un équipement
                                </h5>
                                <button
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                />
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">Nom</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="form-label">Icône (optionnel)</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="ex: fa fa-wifi"
                                        value={icon}
                                        onChange={(e) => setIcon(e.target.value)}
                                    />
                                </div>
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
                <div className="modal-backdrop fade show" />
            </>
        )}
    </div>
    );
}