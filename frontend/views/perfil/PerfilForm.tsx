import { TextField } from "@hilla/react-components/TextField";
import { Select, SelectItem } from "@hilla/react-components/Select";
import { Button } from "@hilla/react-components/Button";
import { useForm, useFormPart } from "@hilla/react-form";
import { PerfilService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
import PerfilRecord from "Frontend/generated/com/example/application/services/PerfilService/PerfilRecord";
import PerfilRecordModel from "Frontend/generated/com/example/application/services/PerfilService/PerfilRecordModel";
import { Icon } from "@hilla/react-components/Icon.js";
import { Email, NotEmpty } from "@hilla/form/Validators.js";
import { OrganismoService } from "Frontend/generated/endpoints";
import { Details } from "@hilla/react-components/Details.js";
import { ComboBox } from "@hilla/react-components/ComboBox.js";

interface PerfilFormProps {
    perfil?: PerfilRecord | null;
    onSubmit?: (perfil: PerfilRecord) => Promise<void>;
}

export default function PerfilForm({ perfil, onSubmit }: PerfilFormProps) {

    const [organismos, setOrganismos] = useState<SelectItem[]>([]);

    const { field, model, submit, reset, read } = useForm(PerfilRecordModel, { onSubmit });
    const eliminarPerfil = async () => {
        if (perfil && perfil.id) {
            try {
                // Llamar al servicio para eliminar el registro
                await PerfilService.delete(perfil.id);

                // Si la eliminación es exitosa, ejecutar la función onSubmit para actualizar el estado de la lista de perfils
                if (onSubmit) {
                    await onSubmit(perfil);
                }

                // Limpiar el formulario después de eliminar el registro
                reset();
            } catch (error) {
                console.error("Error al eliminar el perfil:", error);
            }
        }
    };

    useEffect(() => {
        read(perfil);
    }, [perfil]);

    //control de vacíos del lado del cliente

    const nombre = useFormPart(model.nombre);
    const apellido = useFormPart(model.apellido);
    const dni = useFormPart(model.dni);
    const domicilio = useFormPart(model.domicilio);
    const telefono = useFormPart(model.telefono);
    const email = useFormPart(model.email);

    useEffect(() => {
        nombre.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese un nombre'
            }));
        apellido.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese un apellido'
            }));
        dni.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese un dni'
            }));
        domicilio.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese un domicilio'
            }));
        telefono.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese un telefono'
            }));
        email.addValidator(
            new NotEmpty({
                message: 'Por favor, ingrese un email'
            }));
        email.addValidator(
            new Email({
                message: 'Por favor, ingrese un email válido'
            }));
    }, []);

    useEffect(() => {
        getOrganismos();
    }, []);
    const optionsTipo = [
        { label: 'Interno', value: 'INTERNO' },
        { label: 'Externo', value: 'EXTERNO' },
    ];
    const optionsRole = [
        { label: 'Admin', value: 'ADMIN' },
        { label: 'User', value: 'USER' },
    ];
    async function getOrganismos() {
        const organismos = await OrganismoService.findAllOrganismos();
        const organismosItems = organismos.map(organismo => {
            return {
                label: organismo.nombre,
                value: organismo.id + ""
            };
        });
        setOrganismos(organismosItems);

    }

    return (
        <>
            <Details summary="PERFIL" opened>
                <div className="flex gap-s items-start">
                    <TextField label="Nombre" {...field(model.nombre)} />
                    <TextField label="Apellido" {...field(model.apellido)} />
                    <TextField label="DNI" {...field(model.dni)} />
                    <TextField label="Email" {...field(model.email)} />

                </div>
                <div className="flex gap-s items-start">

                    <TextField label="Domicilio" {...field(model.domicilio)} />
                    <Select label="Tipo" items={optionsTipo} {...field(model.tipo)} />
                    <Select label="Organismo" items={organismos} {...field(model.organismo.id)} />
                    <TextField label="Teléfono" {...field(model.telefono)} />                    
                </div>
            </Details>
            <Details summary="USUARIO" opened>
                <div className="flex gap-s items-start">
                    <TextField label="Username" {...field(model.username)} />
                    <TextField label="Password" {...field(model.pass)} />
                    <Select label="Rol" items={optionsRole} {...field(model.role)} />
                </div>
            </Details>
            <div className="flex gap-m"  >
                <Button onClick={submit} theme="primary small"> <Icon icon="vaadin:arrow-circle-down" />
                    Guardar</Button>
            </div>
        </>
    );

}