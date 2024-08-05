import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const botonMorado = () => {
        setColor("purple");
    };

    return (
        <div className="padre">
            <div className="palo"></div>
            <div className="container">
                <div 
                    className={`semafaro ${color === 'red' ? 'rojo activo' : 'rojo'}`} 
                    onClick={() => setColor('red')}
                ></div>
                <div 
                    className={`semafaro ${color === 'yellow' ? 'amarillo activo' : 'amarillo'}`} 
                    onClick={() => setColor('yellow')}
                ></div>
                <div 
                    className={`semafaro ${color === 'green' ? 'verde activo' : 'verde'}`} 
                    onClick={() => setColor('green')}
                ></div>
                <div 
                    className={`semafaro ${color === 'purple' ? 'morado activo' : 'morado'}`} 
                    onClick={() => setColor('purple')}
                ></div>
            </div>
            <button onClick={botonMorado}>Encender luz morada</button>
        </div>
    );
};

export default TrafficLight;
