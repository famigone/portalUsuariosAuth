import AplicacionRecord from 'Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord';
import PerfilRecord from 'Frontend/generated/com/example/application/services/PerfilService/PerfilRecord';
import React from 'react';
import FilaAplicacion from './FilaAplicacion';

interface TablaAplicacionesProps {
    listaApps: AplicacionRecord[];
  }
  
  const TablaAplicaciones: React.FC<TablaAplicacionesProps> = ({ listaApps }) => {
    return (
        <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre de aplicación</th>
            <th>Código</th>
          </tr>
        </thead>
        <tbody>          
          {listaApps.map((aplicacion) => (
            <FilaAplicacion key={aplicacion.id} aplicacion={aplicacion} />
          ))}
        </tbody>
      </table>
    );
  };
  
  export default TablaAplicaciones;