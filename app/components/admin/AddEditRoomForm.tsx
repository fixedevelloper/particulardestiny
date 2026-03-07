"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {Category, Feature, Image, Room, RoomType} from "../../types/types";
import axiosServices from "../../lib/axios";
import ImageMediaCard from "./ImageModal";


interface RoomFormProps {
    room?: any;
}

export function RoomForm({ room: initialRoom }: RoomFormProps) {

    const router = useRouter();

    const [room, setRoom] = useState<any>({
        title: initialRoom?.title || "",
        slug: initialRoom?.slug || "",
        description: initialRoom?.description || "",
        price: initialRoom?.price || "",
        capacity: initialRoom?.capacity || 1,
        size: initialRoom?.size || "",
        category_id: initialRoom?.category?.id || "",
        room_type_id: initialRoom?.room_type?.id || "",
        image_id: initialRoom?.image?.id || null,
        gallery: initialRoom?.images?.map((i: any) => i.id) || [],
    });

    const [preview, setPreview] = useState<string | null>(initialRoom?.image?.url || null);
    const [image, setImage] = useState<File | null>(null);

    const [categories, setCategories] = useState<Category[]>([]);
    const [roomTypes, setRoomTypes] = useState<RoomType[]>([]);
    const [features, setFeatures] = useState<Feature[]>([]);

    const [selectedFeatures, setSelectedFeatures] = useState<number[]>(
        initialRoom?.features?.map((f: any) => f.id) || []
    );

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<any>({});

    // 🔥 Load categories, types, features
    useEffect(() => {
        async function fetchData() {
            try {
                const [catRes, typeRes, featRes] = await Promise.all([
                    axiosServices.get("/api/admin/categories"),
                    axiosServices.get("/api/admin/room-types"),
                    axiosServices.get("/api/admin/features"),
                ]);


                setCategories(catRes.data.data || []);
                setRoomTypes(typeRes.data.data || []);
                setFeatures(featRes.data.data || []);
            } catch (e) {
                console.error(e);
            }
        }

        fetchData();  console.log(categories)
    }, []);

    // 📸 Image preview
    const handleImageChange = (file: File | null) => {
        setImage(file);

        if (file) {
            setPreview(URL.createObjectURL(file));
        }
    };

    // ✅ Toggle features
    const toggleFeature = (id: number) => {
        setSelectedFeatures((prev) =>
            prev.includes(id)
                ? prev.filter((f) => f !== id)
                : [...prev, id]
        );
    };

    // 🚀 Submit
    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();
        setLoading(true);
        setErrors({});

        try {

            const formData = new FormData();

            Object.keys(room).forEach((key) => {
                if (room[key] !== null) {
                    formData.append(key, room[key]);
                }
            });

            selectedFeatures.forEach((f) =>
                formData.append("features[]", f.toString())
            );

            room.gallery.forEach((img: number) =>
                formData.append("gallery[]", img.toString())
            );

            if (image) formData.append("image", image);

            const url = initialRoom
                ? `/api/admin/rooms/${initialRoom.id}`
                : `/api/admin/rooms`;

            if (initialRoom) {
                formData.append("_method", "PUT");
            }

            const response = await axiosServices.post(url, formData);

            alert("✅ Suite enregistrée");
            router.push("/admin/rooms");

        } catch (error: any) {

            if (error.response) {
                setErrors(error.response.data.errors || {});
            }

            console.error(error);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-4">

            <h2 className="mb-4">
                {initialRoom ? "Modifier la Suite" : "Ajouter une Suites"}
            </h2>

            <form onSubmit={handleSubmit} className="card shadow-sm p-4">

                {/* TITLE */}
                <div className="mb-3">
                    <label className="form-label">Nom</label>
                    <input
                        className="form-control"
                        value={room.title}
                        onChange={(e) =>
                            setRoom({ ...room, title: e.target.value })
                        }
                    />
                    {errors.title && (
                        <small className="text-danger">{errors.title[0]}</small>
                    )}
                </div>

                {/* ROW */}
                <div className="row">

                    <div className="col-md-4 mb-3">
                        <label>Prix</label>
                        <input
                            type="number"
                            className="form-control"
                            value={room.price}
                            onChange={(e) =>
                                setRoom({ ...room, price: e.target.value })
                            }
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>Capacité</label>
                        <input
                            type="number"
                            className="form-control"
                            value={room.capacity}
                            onChange={(e) =>
                                setRoom({ ...room, capacity: e.target.value })
                            }
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label>Taille</label>
                        <input
                            type="number"
                            className="form-control"
                            value={room.size}
                            onChange={(e) =>
                                setRoom({ ...room, size: e.target.value })
                            }
                        />
                    </div>

                </div>

                {/* SELECTS */}

                <div className="row">

                    <div className="col-md-6 mb-3">
                        <label>Catégorie</label>
                        <select
                            className="form-select"
                            value={room.category_id}
                            onChange={(e) =>
                                setRoom({
                                    ...room,
                                    category_id: e.target.value,
                                })
                            }
                        >
                            <option value="">Choisir</option>
                            {categories.map((c) => (
                                <option key={c.id} value={c.id}>
                                    {c.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label>Type</label>
                        <select
                            className="form-select"
                            value={room.room_type_id}
                            onChange={(e) =>
                                setRoom({
                                    ...room,
                                    room_type_id: e.target.value,
                                })
                            }
                        >
                            <option value="">Choisir</option>
                            {roomTypes.map((t) => (
                                <option key={t.id} value={t.id}>
                                    {t.name}
                                </option>
                            ))}
                        </select>
                    </div>

                </div>

                {/* FEATURES */}

                <div className="mb-3">
                    <label className="form-label">Équipements</label>

                    <div className="d-flex flex-wrap gap-3">

                        {features.map((f) => (
                            <div key={f.id} className="form-check">

                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={selectedFeatures.includes(f.id)}
                                    onChange={() => toggleFeature(f.id)}
                                />

                                <label className="form-check-label">
                                    {f.name}
                                </label>

                            </div>
                        ))}

                    </div>
                </div>

                {/* DESCRIPTION */}

                <div className="mb-3">

                    <label>Description</label>

                    <textarea
                        className="form-control"
                        rows={4}
                        value={room.description}
                        onChange={(e) =>
                            setRoom({
                                ...room,
                                description: e.target.value,
                            })
                        }
                    />

                </div>

                {/* GALLERY */}

                <ImageMediaCard
                    multiple={true}
                    value={room.gallery}
                    onChange={(images: any) => {

                        const imagesArray = Array.isArray(images)
                            ? images
                            : images
                                ? [images]
                                : [];

                        setRoom({
                            ...room,
                            gallery: imagesArray.map((img) => img.id),
                            image_id: imagesArray[0]?.id || null,
                        });

                    }}
                />

                {/* SUBMIT */}

                <button
                    className="btn btn-primary mt-3"
                    disabled={loading}
                >
                    {loading
                        ? "Enregistrement..."
                        : initialRoom
                            ? "Mettre à jour"
                            : "Ajouter"}
                </button>

            </form>
        </div>
    );
}