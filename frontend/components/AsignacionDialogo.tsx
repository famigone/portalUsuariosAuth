import { Button } from "@hilla/react-components/Button.js";
import { Dialog } from "@hilla/react-components/Dialog.js";
import { Icon } from "@hilla/react-components/Icon.js";
import { Item } from "@hilla/react-components/Item.js";
import { ListBox } from "@hilla/react-components/ListBox.js";
import { VerticalLayout } from "@hilla/react-components/VerticalLayout.js";
import { MouseEventHandler, useEffect, useState } from "react";
import { AplicacionService } from "Frontend/generated/endpoints";
import AplicacionRecord from "Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord";
export default function AsignacionDialogo(props: any) {
    
    const [aplicaciones, setAplicaciones] = useState<AplicacionRecord[]>([]);
    const [selectedValues, setSelectedValues] = useState([]);
    useEffect(() => {
        AplicacionService.findAllAplicaciones().then(setAplicaciones)        
      }, []);
    
    return (
        <>
            <div>
                <Dialog
                    header-title="Asignación de Aplicaciones"
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
                          <Button onClick={() => props.cerrarDialogo(false)}>Cerrar</Button>
                          
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
                                onSelectedValuesChanged={(e) => setSelectedValues(e.detail.value)}
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
                    <Button theme="tertiary" onClick={() => { props.cerrarDialogo }}>
                        <Icon icon="lumo:cross" />
                    </Button>
                </Dialog>
            </div>
        </>
    );
}