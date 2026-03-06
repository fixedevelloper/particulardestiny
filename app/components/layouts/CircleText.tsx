"use client";

import { useEffect, useRef } from "react";

export default function CircleText() {
    const circleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const circle = circleRef.current;
        if (!circle) return;

        const degreeToRadian = (angle: number) => {
            return angle * (Math.PI / 180);
        };

        let radius = 255;

        if (window.innerWidth < 576) {
            radius = 168;
        }

        const diameter = radius * 2;

        circle.style.width = `${diameter}px`;
        circle.style.height = `${diameter}px`;

        const text = circle.dataset.text || "";
        const characters = text.split("");

        const deltaAngle = 360 / characters.length;
        let currentAngle = -90;

        circle.innerHTML = "";

        characters.forEach((character, index) => {
            const span = document.createElement("span");
            span.innerText = character;

            const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
            const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

            const transform = `translate(${xPos}px, ${yPos}px)`;
            const rotate = `rotate(${index * deltaAngle}deg)`;

            span.style.position = "absolute";
            span.style.transform = `${transform} ${rotate}`;

            currentAngle += deltaAngle;

            circle.appendChild(span);
        });
    }, []);

    return (
        <div
            ref={circleRef}
            className="circle-text"
            data-text="* Bienvenue au O'TABOO Lounge Cabaret Restaurant * Bienvenue au O'TABOO Lounge Cabaret Restaurant *"
            style={{ position: "relative" }}
        />
    );
}