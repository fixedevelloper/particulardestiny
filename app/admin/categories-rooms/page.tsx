"use client";

import { useEffect, useState } from "react";

export default function CategoryPage() {
    const [categories, setCategories] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editingCategory, setEditingCategory] = useState<any>(null);
    const [name, setName] = useState("");

    // Charger catégories
    const fetchCategories = async () => {
        try {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/admin/categories`
            );
            const data = await res.json();
            setCategories(data.data || []);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // Ouvrir modal
    const openModal = (category: any = null) => {
        setEditingCategory(category);
        setName(category?.name || "");
        setShowModal(true);
    };

    // Submit (create/update)
    const handleSubmit = async () => {
        try {
            const url = editingCategory
                ? `/api/admin/categories/${editingCategory.id}`
                : `/api/admin/categories`;

            const method = editingCategory ? "PUT" : "POST";

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
            setEditingCategory(null);
            fetchCategories();
        } catch (e) {
            console.error(e);
        }
    };

    // Delete
    const handleDelete = async (id: number) => {
        if (!confirm("Supprimer cette catégorie ?")) return;

        try {
            await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/admin/categories/${id}`,
                {
                    method: "DELETE",
                }
            );

            fetchCategories();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="container-fluid p-4">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h2 className="mb-2">Catégories</h2>
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
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((cat) => (
                        <tr key={cat.id}>
                            <td>{cat.id}</td>
                            <td>{cat.name}</td>
                            <td>
                                <div className="d-flex gap-2">
                                    <button
                                        className="btn btn-sm btn-outline-primary"
                                        onClick={() => openModal(cat)}
                                    >
                                        Modifier
                                    </button>

                                    <button
                                        className="btn btn-sm btn-outline-danger"
                                        onClick={() =>
                                            handleDelete(cat.id)
                                        }
                                    >
                                        Supprimer
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}

                    {categories.length === 0 && (
                        <tr>
                            <td colSpan={3} className="text-center text-muted">
                                Aucune catégorie
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
                                        {editingCategory
                                            ? "Modifier"
                                            : "Ajouter"}{" "}
                                        une catégorie
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

                    <div className="modal-backdrop fade show"></div>
                </>
            )}
        </div>
    );
}