import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js';
import { Icon } from '@hilla/react-components/Icon.js';
import AplicacionRecord from 'Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord';
import PerfilRecord from 'Frontend/generated/com/example/application/services/PerfilService/PerfilRecord';
import { AplicacionService } from 'Frontend/generated/endpoints';
import React, { useEffect, useState } from 'react';
import TablaAplicaciones from './TablaAplicaciones';

interface CardProps {
    perfil: PerfilRecord
}


const PerfilCard: React.FC<CardProps> = ({ perfil }) => {
    const [aplicaciones, setAplicaciones] = useState<AplicacionRecord[]>([]);

    useEffect(() => {
        AplicacionService.findAllAplicaciones().then(setAplicaciones)        
      }, []);
    
    return (
        <div className="flex flex-col h-full p-l box-border">
            <b><Icon icon="vaadin:user" /> {perfil.nombre} {perfil.apellido} Rol: {perfil.user.roles}</b><hr/>
            <HorizontalLayout theme="spacing padding">
                <p><Icon icon="vaadin:check" /></p> <p>{perfil.dni}</p>
                <p><Icon icon="vaadin:mailbox" /></p> <p>{perfil.email}</p>
                <p><Icon icon="vaadin:flag" /></p> <p>{perfil.tipo}</p>
                <p><Icon icon="vaadin:home-o" /></p> <p>{perfil.domicilio}</p>
                <p><Icon icon="vaadin:phone" /></p> <p> {perfil.telefono}</p>
                <p><b>Organismo:</b> </p> <p> {perfil.organismo.nombre}</p>
            </HorizontalLayout>
            <TablaAplicaciones listaApps={aplicaciones}/>
        </div>
    );
}

export default PerfilCard;

