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
interface OrganismoFormProps {
    organismo?: OrganismoRecord | null;
    onSubmit?: (organismo: OrganismoRecord) => Promise<void>;
}

export default function OrganismoForm({organismo, onSubmit}: OrganismoFormProps) {

    const [organismos, setOrganismos] = useState<SelectItem[]>([]);

    const {field, model, submit, reset, read} = useForm(OrganismoRecordModel, { onSubmit } );

    useEffect(() => {
        read(organismo);
    }, [organismo]);


    return (
        <>
        
         <div className="flex flex-col gap-s items-start">
         <b>ORGANISMO</b><hr/>
            <TextField label="Nombre" {...field(model.nombre)} />
            <TextField label="Código" {...field(model.codigo)} />
            <TextField label="Telefono" {...field(model.telefono)} />
            <TextField label="Domicilio" {...field(model.domicilio )} />            
        
            <div className="flex gap-m">
                <Button onClick={submit} theme="primary">Guardar</Button>
                <Button onClick={reset}>Limpiar</Button>
            </div>   
        
    
        </div>
     

    </>
    )
}