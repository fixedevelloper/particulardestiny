import React, { useEffect, useState } from "react";

/*
export default function ScrollToTop() {
    const [scroll, setScroll] = useState(0);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScroll(progress);
            setVisible(scrollTop > 300); // afficher après 300px
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div
            className={`scroll-top ${visible ? "visible" : ""}`}
            onClick={handleClick}
            style={{
                cursor: "pointer",
                position: "fixed",
                right: 30,
                bottom: 60,
                width: 50,
                height: 50,
                zIndex: 9999,
            }}
        >
            <svg
                className="progress-circle svg-content"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="49"
                    fill="none"
                    stroke="#eee"
                    strokeWidth="4"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="49"
                    fill="none"
                    stroke="#ff5a5f"
                    strokeWidth="4"
                    strokeDasharray={2 * Math.PI * 49} // périmètre du cercle
                    strokeDashoffset={2 * Math.PI * 49 * (1 - scroll / 100)} // scroll en %
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.3s linear",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
            </svg>
        </div>
    );
}*/

export default function ScrollToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setScroll(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const radius = 39;
    const circumference = 2 * Math.PI * radius;

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Affiche le bouton uniquement après 30% de scroll
    const visible = scroll > 10;

    return (
        <div
            onClick={handleClick}
            style={{
                width: "80px",
                height: "80px",
                position: "fixed",
                bottom: "20px",
                right: "20px",
                cursor: "pointer",
                zIndex: 1000,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.3s",
                pointerEvents: visible ? "auto" : "none", // pour éviter le clic quand invisible
            }}
        >
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                {/* Cercle de fond */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#eee"
                    strokeWidth="4"
                />
                {/* Cercle de progression */}
                <circle
                    cx="50"
                    cy="50"
                    r={radius}
                    fill="none"
                    stroke="#bf930f"
                    strokeWidth="4"
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference * (1 - scroll / 100)}
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 0.2s linear",
                        transform: "rotate(-90deg)",
                        transformOrigin: "50% 50%",
                    }}
                />
                {/* Flèche vers le haut */}
                <polygon
                    points="50,30 40,50 60,50"
                    fill="#bf930f"
                    style={{
                        transform: "translateY(10px)",
                        transition: "transform 0.2s",
                    }}
                />
            </svg>
        </div>
    );
}