import AplicacionRecord from 'Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord';
import React, { useEffect, useState } from 'react';

interface CardProps {
    aplicacion: AplicacionRecord
}

const FilaAplicacion: React.FC<CardProps> = ({ aplicacion }) => {
    return (        
             <tr className='tr'>
                <td className='td'>{aplicacion.nombre}</td>
                <td>{aplicacion.codigo}</td>                
            </tr>       
    );
}
export default FilaAplicacion;

