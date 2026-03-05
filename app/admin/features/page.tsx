"use client";

import { useEffect, useState } from "react";

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
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h2 className="mb-2">Équipements (Features)</h2>
                <button className="btn btn-primary" onClick={() => openModal()}>
                    Ajouter
                </button>
            </div>

            {/* Table */}
            <div className="table-responsive shadow-sm rounded">
                <table className="table table-bordered table-hover align-middle">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Icône</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {features.map((f) => (
                        <tr key={f.id}>
                            <td>{f.id}</td>
                            <td>{f.name}</td>
                            <td>
                                {f.icon ? (
                                    <i className={f.icon}></i>
                                ) : (
                                    "-"
                                )}
                            </td>
                            <td>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={() => openModal(f)}
                                    >
                                        Modifier
                                    </button>

                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() =>
                                            handleDelete(f.id)
                                        }
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    {features.length === 0 && (
                        <tr>
                            <td colSpan={4} className="text-center text-muted">
                                Aucun équipement
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
                                        {editingFeature
                                            ? "Modifier"
                                            : "Ajouter"}{" "}
                                        un équipement
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
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>

                                    <div>
                                        <label className="form-label">
                                            Icône (optionnel)
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="ex: fa fa-wifi"
                                            value={icon}
                                            onChange={(e) =>
                                                setIcon(e.target.value)
                                            }
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

                    <div className="modal-backdrop fade show"/>
                </>
            )}
        </div>
    );
}