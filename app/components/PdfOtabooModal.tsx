'use client'

import { useState } from "react";

export default function PdfModal() {

    const [show, setShow] = useState(false);
    const [pdf, setPdf] = useState("");

    const openPdf = (file:any) => {
        setPdf(file);
        setShow(true);
    };

    return (
        <>

            {/* Boutons */}
            <div className="btn-group mt-60 d-flex">

                <button
                    className="th-btn2 th-icon bg-danger"
                    onClick={() => openPdf("/pdf/carte_menu.pdf")}
                >
                    Voir le menu
                </button>

                <button
                    className="th-btn2 th-icon bg-danger"
                    onClick={() => openPdf("/pdf/carte_boissons.pdf")}
                >
                    Voir les boissons
                </button>

            </div>

            {/* Modal */}
            {show && (
                <div className="modal fade show d-block">
                    <div className="modal-dialog modal-fullscreen-xl-down modal-xl modal-dialog-centered">
                        <div className="modal-content">

                            <div className="modal-header">
                                <h5 className="modal-title">Carte</h5>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShow(false)}
                                />
                            </div>

                            <div className="modal-body p-0">
                                <iframe
                                    src={pdf}
                                    width="100%"
                                    height="650px"
                                    style={{ border: "none" }}
                                />
                            </div>

                        </div>
                    </div>
                </div>
            )}

            {show && <div className="modal-backdrop fade show"></div>}
        </>
    );
}