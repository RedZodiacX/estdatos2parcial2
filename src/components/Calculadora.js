import React, { useState } from 'react';
import Boton from './Boton';
import Pantalla from './Pantalla';

const Calculadora = () => {
    const [valor, setInput] = useState('');
    const [resultado, setResult] = useState(null);

    const handleClick = (dato) => {
        setInput(valor + dato);
    };

    const calculaResultado = () => {
        try {
            setResult(eval(valor));
        } catch (error) {
            setResult('Error');
        }
    };

    const Limpiar = () => {
        setInput('');
        setResult(null);
    };

    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <Pantalla valor={valor} resultado={resultado} />
            <div className="botones">
                {['1', '2', '3', '+'].map((item) => (
                    <Boton key={item} dato={item} onClick={handleClick} />
                ))}
                {['4', '5', '6', '-'].map((item) => (
                    <Boton key={item} dato={item} onClick={handleClick} />
                ))}
                {['7', '8', '9', '*'].map((item) => (
                    <Boton key={item} dato={item} onClick={handleClick} />
                ))}
                {['0', '.', '=', '/'].map((item) => (
                    <Boton key={item} dato={item} onClick={item === '=' ? calculaResultado : handleClick} />
                ))}
                <Boton dato="C" onClick={Limpiar} className="clear-btn" />
            </div>
        </div>
    );
};

export default Calculadora;
