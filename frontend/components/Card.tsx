import React from 'react';

interface CardProps {
    nombre: string;
    codigo: string;
}



const Card: React.FC<CardProps> = ({ nombre, codigo }) => {
    return (
        <div className="card">
            <div className="container">
                <h2>{codigo}</h2>
                <p>{nombre}</p>
            </div>
        </div>
    );
}

export default Card;

