import React from 'react';

const Boton = ({ dato, onClick }) => {
    return (
        <button onClick={() => onClick(dato)} className="boton">
            {dato}
        </button>
    );
};

export default Boton;
