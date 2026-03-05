import Link from "next/link";
import {Home} from "lucide-react";
import './globals.css'
export default function NotFound() {
    return (
        <section
            className="space overflow-hidden"
            style={{
                backgroundImage: "url(/img/bg/error_bg.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="container">
                <div className="row gy-4">
                    <div className="col-xl-6 align-self-center">
                        <div className="error-content">
                            <h2 className="h2 error-title">La page n’existe pas</h2>
                            <p className="error-text">
                                La page que vous cherchez n’existe pas ou a été déplacée.
                            </p>
                            <h3 className="box-title">404</h3>
                            <Link className="th-btn" href="/">

                                    <i>
                                        <Home className="fal fa-home me-2"/>
                                    </i>RETOUR À L’ACCUEIL
                            </Link>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="error-img global-img">
                            <img
                                src="/img/shape/error_image.png"
                                alt="Image 404"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}