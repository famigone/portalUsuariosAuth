import { TextField } from "@hilla/react-components/TextField";
import { Select, SelectItem } from "@hilla/react-components/Select";
import { Button } from "@hilla/react-components/Button";
import { useForm, useFormPart } from "@hilla/react-form";
import { AplicacionService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
import AplicacionRecord from "Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord";
import AplicacionRecordModel from "Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecordModel";
import { Icon } from "@hilla/react-components/Icon.js";
import { NotEmpty } from "@hilla/form/Validators.js";
interface AplicacionFormProps {
    aplicacion?: AplicacionRecord | null;
    onSubmit?: (aplicacion: AplicacionRecord) => Promise<void>;
}

export default function AplicacionForm({ aplicacion, onSubmit }: AplicacionFormProps) {

    const [aplicaciones, setAplicaciones] = useState<SelectItem[]>([]);

    const { field, model, submit, reset, read } = useForm(AplicacionRecordModel, { onSubmit });
    const eliminarAplicacion = async () => {
        if (aplicacion && aplicacion.id) {
            try {
                // Llamar al servicio para eliminar el registro
                await AplicacionService.delete(aplicacion.id);

                // Si la eliminación es exitosa, ejecutar la función onSubmit para actualizar el estado de la lista de aplicaciones
                if (onSubmit) {
                    await onSubmit(aplicacion);
                }

                // Limpiar el formulario después de eliminar el registro
                reset();
            } catch (error) {
                console.error("Error al eliminar el aplicacion:", error);
            }
        }
    };

    useEffect(() => {
        read(aplicacion);
    }, [aplicacion]);

    //control de vacíos del lado del cliente

    const nombre = useFormPart(model.nombre);
    const codigo = useFormPart(model.codigo);

    
    useEffect(() => {
        nombre.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese un nombre'
            }));
        codigo.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese un codigo'
            }));
    }, []);


    return (
        <>

            <div className="flex gap-s items-start">
                <TextField label="Nombre" {...field(model.nombre)} />
                <TextField label="Código" {...field(model.codigo)} />
            </div>

            <div className="flex gap-m"  >
                <Button onClick={submit} theme="primary small"> <Icon icon="vaadin:arrow-circle-down" />
                    Guardar</Button>

            </div>

        </>
    );

}