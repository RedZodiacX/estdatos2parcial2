import React from 'react';

const Pantalla = ({ valor, resultado }) => {
    return (
        <div className="pantalla">
            <input type="text" value={valor} disabled />
            <div className="resultado">{resultado !== null ? `Resultado: ${resultado}` : ''}</div>
            {/* <input type="text" value={resultado !== null ? resultado : valor} disabled /> */}
        </div>
    );
};

export default Pantalla;
