import React from "react";
const counters = [
    { number: "10+", text: "Années d'expérience" },
    { number: "25+", text: "Membres de l'équipe" },
    { number: "30 000+", text: "Clients servis" },
    { number: "98 %", text: "Fidélisation annuelle des clients" },
];

export default function CounterArea() {
    return (
        <div className="counter-area-2 overflow-hidden">
            <div className="container">
                <div className="counter-card-wrap style3">
                    {counters.map((counter, index) => (
                        <React.Fragment key={index}>
                            <div className="counter-card style2">
                                <div className="media-body">
                                    <h2 className="box-number">
                                        <span className="counter-number">{counter.number}</span>
                                    </h2>
                                    <p className="box-text">{counter.text}</p>
                                </div>
                            </div>
                            {index < counters.length - 1 && <div className="divider"/>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}