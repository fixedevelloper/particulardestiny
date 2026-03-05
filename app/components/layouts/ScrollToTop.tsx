import { useEffect, useState } from "react";

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
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                <path
                    d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                    style={{
                        transition: "stroke-dashoffset 0.3s linear",
                        strokeDasharray: 307.919,
                        strokeDashoffset: 307.919 - (307.919 * scroll) / 100,
                        stroke: "#ff5a5f",
                        fill: "none",
                        strokeWidth: 4,
                    }}
                />
            </svg>
        </div>
    );
}