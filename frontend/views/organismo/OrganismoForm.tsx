import {TextField} from "@hilla/react-components/TextField";
import {EmailField} from "@hilla/react-components/EmailField";
import {Select, SelectItem} from "@hilla/react-components/Select";
import {Button} from "@hilla/react-components/Button";
import {useForm} from "@hilla/react-form";

import OrganismoModel from "Frontend/generated/com/example/application/data/OrganismoModel";
import { OrganismoService } from "Frontend/generated/endpoints";  
import {useEffect, useState} from "react";
//import Organismo from "Frontend/generated/com/example/application/data/Organismo";
import OrganismoRecord from "Frontend/generated/com/example/application/services/OrganismoService/OrganismoRecord";
import OrganismoRecordModel from "Frontend/generated/com/example/application/services/OrganismoService/OrganismoRecordModel";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import { Icon } from "@hilla/react-components/Icon.js";
interface OrganismoFormProps {
    organismo?: OrganismoRecord | null;
    onSubmit?: (organismo: OrganismoRecord) => Promise<void>;
}

export default function OrganismoForm({organismo, onSubmit}: OrganismoFormProps) {

    const [organismos, setOrganismos] = useState<SelectItem[]>([]);

    const {field, model, submit, reset, read} = useForm(OrganismoRecordModel, { onSubmit } );
    const eliminarOrganismo = async () => {
        if (organismo && organismo.id) {
            try {
                // Llamar al servicio para eliminar el registro
                await OrganismoService.delete(organismo.id);
                
                // Si la eliminación es exitosa, ejecutar la función onSubmit para actualizar el estado de la lista de organismos
                if (onSubmit) {
                    await onSubmit(organismo);
                }
                
                // Limpiar el formulario después de eliminar el registro
                reset();
            } catch (error) {
                console.error("Error al eliminar el organismo:", error);
            }
        }
    };
    
    useEffect(() => {
        read(organismo);
    }, [organismo]);


    return (
        <>
        
            <div className="flex gap-s items-start">
                <TextField label="Nombre" {...field(model.nombre)} />
                <TextField label="Código" {...field(model.codigo)} />
                <TextField label="Telefono" {...field(model.telefono)} />
                <TextField label="Domicilio" {...field(model.domicilio)} />                    
            </div>
            
            <div className="flex gap-m"  >
                <Button onClick={submit} theme="primary small"> <Icon icon="vaadin:arrow-circle-down" />
 Guardar</Button>
                
            </div>  
         
        </>
    );
    
}