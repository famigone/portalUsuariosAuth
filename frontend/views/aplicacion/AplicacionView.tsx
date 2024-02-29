import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { useEffect, useState } from 'react';
import { Grid } from "@hilla/react-components/Grid";
import { GridColumn } from "@hilla/react-components/GridColumn";

import AplicacionRecord from 'Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord';
import { AplicacionService } from 'Frontend/generated/endpoints.js';
import AplicacionForm from './AplicacionForm';
import { ConfirmDialog } from '@hilla/react-components/ConfirmDialog.js';
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js';
import { Icon } from '@hilla/react-components/Icon.js';
import { GridSortColumn } from '@hilla/react-components/GridSortColumn.js';
import { GridFilterColumn } from '@hilla/react-components/GridFilterColumn.js';

export default function AplicacionView() {
  const [aplicaciones, setAplicaciones] = useState<AplicacionRecord[]>([]);
  const [selected, setSelected] = useState<AplicacionRecord | null>();
  const [dialogOpened, setDialogOpened] = useState(false);
  const [deleteHabilitado, setDeleteHabilitado] = useState(true);

  useEffect(() => {
    AplicacionService.findAllAplicaciones().then(setAplicaciones)
  }, []);


  const onAplicacionDeleted = async () => {
    if (selected && selected.id) {
      try {
        // Llamar al servicio para eliminar el registro
        await AplicacionService.delete(selected.id);
        //actualizamos el estado          
        setAplicaciones(aplicaciones.filter(aplicacion => aplicacion.id != selected.id))
      } catch (error) {
        console.error("Error al eliminar el aplicacion:", error);
      }
    }
  };

  async function onAplicacionSaved(aplicacion: AplicacionRecord) {
    const saved = await AplicacionService.save(aplicacion)
    if (aplicacion.id) {
      setAplicaciones(aplicaciones => aplicaciones.map(current => current.id === saved.id ? saved : current));
    } else {
      setAplicaciones(aplicaciones => [...aplicaciones, saved]);
    }
    setSelected(saved);


  }

  return (
    <>
      <div className="p-m  gap-m border: 2px">
        <AplicacionForm
          aplicacion={selected}
          onSubmit={onAplicacionSaved}
        />

      </div>
      <div className="p-m  gap-m">
        <Grid
          theme="row-stripes"
          allRowsVisible
          items={aplicaciones}
          onActiveItemChanged={e => setSelected(e.detail.value)}
          selectedItems={[selected]}>

          <GridFilterColumn path="nombre" header="NOMBRE" />
          <GridFilterColumn path="codigo" header="CÓDIGO" />          
        </Grid>

        <div style={{ margin: '3px' }} className="flex gap-m gap-s">

          <Button disabled={selected == null} theme="primary error small" onClick={() => setDialogOpened(true)} ><Icon icon="vaadin:close" /> Eliminar</Button>
          <Button onClick={() => setSelected(null)} theme="primary small" ><Icon icon="vaadin:refresh" />
            Nuevo</Button>

        </div>
        <ConfirmDialog          
          header="Desea eliminar la Aplicacion?"     
          cancelButtonVisible
          confirmText="Eliminar"
          cancelText="Cancelar"
          opened={dialogOpened}          
          onConfirm={() => {
            onAplicacionDeleted()
            setDialogOpened(false)
          }}
          onCancel={() => {
            setDialogOpened(false)
          }}
        />

      </div>
    </>
  );
}


