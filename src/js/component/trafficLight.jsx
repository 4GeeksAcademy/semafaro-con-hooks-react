import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const handlePurpleLight = () => {
        setColor("purple");
    };

    return (
        <div className="padre">
            <div className="palo"></div>
            <div className="container">
                <div 
                    className={`semafaro red ${color === 'red' ? 'activo' : ''}`} 
                    onClick={() => setColor('red')}
                ></div>
                <div 
                    className={`semafaro yellow ${color === 'yellow' ? 'activo' : ''}`} 
                    onClick={() => setColor('yellow')}
                ></div>
                <div 
                    className={`semafaro green ${color === 'green' ? 'activo' : ''}`} 
                    onClick={() => setColor('green')}
                ></div>
                <div 
                    className={`semafaro purple ${color === 'purple' ? 'activo' : ''}`} 
                    onClick={() => setColor('purple')}
                ></div>
            </div>
            <button onClick={handlePurpleLight}>Encender luz morada</button>
        </div>
    );
};

export default TrafficLight;
