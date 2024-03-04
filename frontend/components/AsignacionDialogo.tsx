import { Button } from "@hilla/react-components/Button.js";
import { Dialog } from "@hilla/react-components/Dialog.js";
import { Icon } from "@hilla/react-components/Icon.js";
import { Item } from "@hilla/react-components/Item.js";
import { ListBox } from "@hilla/react-components/ListBox.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { MouseEventHandler, useEffect, useState } from "react";
import { AplicacionService } from "Frontend/generated/endpoints";
import { PerfilService } from "Frontend/generated/endpoints";
import AplicacionRecord from "Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord";
import { Notification } from "@hilla/react-components/Notification.js";
import { PropertyAccessors } from "@polymer/polymer/lib/mixins/property-accessors";
import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";

export default function AsignacionDialogo(props: any) {

    const [aplicaciones, setAplicaciones] = useState<AplicacionRecord[]>([]);
    const [asignadas, setAsignadas] = useState<AplicacionRecord[]>([]);
    const [selectedValues, setSelectedValues] = useState<number[]>([0, 1]);
    const [notificationOpened, setNotificationOpened] = useState(false)
    // const [selectedValues, setSelectedValues] = useState<Set<number>>(new Set()); // Cambiado a Set<number>

    useEffect(() => {
        AplicacionService.findAllAplicaciones().then(setAplicaciones)
        
    }, []);


    useEffect(() => {        
        if (props.perfil != null) {
            PerfilService.obtenerAplicacionesById(props.perfil.id).then(setAsignadas)
            console.log(asignadas)
        } else
            console.log("es nulo el perfil")
    }, []);


    const aplicar = () => {

        // Creamos set de Aplicacion 
        const nuevasAplicacionesSet = selectedValues.map(index => aplicaciones[index]);

        console.log("props.perfil " + props.perfil)

        const nuevasAplicacionesArray = Array.from(nuevasAplicacionesSet);
        PerfilService.vincularAplicaciones(props.perfil, nuevasAplicacionesArray)
        .then((result) => {
            setNotificationOpened(true);            
          })
          .catch((error) => {
            console.error("Error fetching aplicaciones:", error);
          });
        console.log("nuevasAplicacionesArray " + nuevasAplicacionesArray)
    }

    return (
        <>
            <div>
                {props.perfil &&
                    <Dialog
                        header-title={"Aplicaciones para el usuario " + props.perfil.nombre + " " + props.perfil.apellido}
                        opened={props.dialogAsignacionOpened}
                        onOpenedChanged={(event) => {
                            //props.cerrarDialogo(event.detail.value);
                        }}
                        headerRenderer={() => (
                            <Button theme="tertiary" onClick={() => { props.cerrarDialogo }}>
                                <Icon icon="lumo:cross" />
                            </Button>
                        )}
                        footerRenderer={() => (
                            <>
                                <Notification
                                    theme="success"
                                    duration={2000}
                                    position="middle"
                                    opened={notificationOpened}
                                    onOpenedChanged={(e) => setNotificationOpened(e.detail.value)}
                                >
                                    <HorizontalLayout theme="spacing" style={{ alignItems: 'center' }}>
                                        <div>Vinculación realizada.</div>                                        
                                    </HorizontalLayout>
                                </Notification>
                                <Button onClick={() => props.cerrarDialogo(false)}>Cerrar</Button>
                                <Button onClick={() => aplicar()}>Aplicar</Button>
                            </>
                        )}
                    >

                        <VerticalLayout
                            theme="spacing"
                            style={{ width: '600px', maxWidth: '100%', alignItems: 'stretch' }}
                        >
                            <VerticalLayout style={{ alignItems: 'stretch' }}>
                                <ListBox
                                    multiple
                                    selectedValues={selectedValues}
                                    //onSelectedValuesChanged={(e) => setSelectedValues(new Set(e.detail.value))}
                                    onSelectedValuesChanged={
                                        (e) => setSelectedValues(e.detail.value)
                                    }
                                    style={{ height: '400px' }}
                                >
                                    {aplicaciones.map((app, index) => (
                                        <Item key={index}>
                                            {app.nombre} {app.codigo}
                                        </Item>
                                    ))}
                                </ListBox>
                            </VerticalLayout>
                        </VerticalLayout>
                        <Button theme="tertiary" onClick={() => props.cerrarDialogo}>
                            <Icon icon="lumo:cross" />
                        </Button>
                    </Dialog>
                }
            </div>
        </>
    );
}