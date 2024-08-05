import React, {useState} from "react";

const TrafficLight = () => {
	const [ color, setColor] = useState("red");
	return (
	<div className="padre"> 
	<div className="palo"> </div>
 <div className="container">
            <div 
                className={`semafaro ${color === 'red' ? 'rojo activo' : 'red'}`} 
                onClick={() => setColor('red')}
            ></div>
            <div 
                className={`semafaro ${color === 'yellow' ? 'amarillo activo' : 'yellow'}`} 
                onClick={() => setColor('yellow')}
            ></div>
            <div 
                className={`semafaro ${color === 'green' ? 'verde activo' : 'green'}`} 
                onClick={() => setColor('green')}
            ></div>
			<div 
                className={`semafaro ${color === 'purple' ? 'morado activo' : 'purple'}`} 
                onClick={() => setColor('purple')}
            ></div>
        </div>
		</div>
    );
};
export default TrafficLight;