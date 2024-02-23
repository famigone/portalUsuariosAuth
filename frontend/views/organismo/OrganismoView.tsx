import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { useEffect, useState } from 'react';
import { Grid } from "@hilla/react-components/Grid";
import { GridColumn } from "@hilla/react-components/GridColumn";

import OrganismoRecord from 'Frontend/generated/com/example/application/services/OrganismoService/OrganismoRecord';
import { OrganismoService } from 'Frontend/generated/endpoints.js';
import OrganismoForm from './OrganismoForm';
import { ConfirmDialog } from '@hilla/react-components/ConfirmDialog.js';
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js';
import { Icon } from '@hilla/react-components/Icon.js';
import { GridSortColumn } from '@hilla/react-components/GridSortColumn.js';
import { GridFilterColumn } from '@hilla/react-components/GridFilterColumn.js';
export default function OrganismoView() {
  const [organismos, setOrganismos] = useState<OrganismoRecord[]>([]);
  const [selected, setSelected] = useState<OrganismoRecord | null | undefined>();
  const [dialogOpened, setDialogOpened] = useState(false);
  const [deleteHabilitado, setDeleteHabilitado] = useState(false);

  useEffect(() => {
    OrganismoService.findAllOrganismos().then(setOrganismos)
  }, []);


  const onOrganismoDeleted = async () => {
    if (selected && selected.id) {
      try {
        // Llamar al servicio para eliminar el registro
        await OrganismoService.delete(selected.id);
        //actualizamos el estado          
        setOrganismos(organismos.filter(organismo => organismo.id != selected.id))
      } catch (error) {
        console.error("Error al eliminar el organismo:", error);
      }
    }
  };

  async function onOrganismoSaved(organismo: OrganismoRecord) {
    const saved = await OrganismoService.save(organismo)
    if (organismo.id) {
      setOrganismos(organismos => organismos.map(current => current.id === saved.id ? saved : current));
    } else {
      setOrganismos(organismos => [...organismos, saved]);
    }
    setSelected(saved);


  }

  return (
    <>
      <div className="p-m  gap-m border: 2px">
        <OrganismoForm
          organismo={selected}
          onSubmit={onOrganismoSaved}
        />

      </div>
      <div className="p-m  gap-m">
        <Grid
          theme="row-stripes"  
          allRowsVisible
          items={organismos}
          onActiveItemChanged={e => setSelected(e.detail.value)}
          selectedItems={[selected]}>
          
          <GridFilterColumn path="nombre" header="NOMBRE"/>
          <GridFilterColumn path="codigo" header="CÓDIGO"/>
          <GridSortColumn path="domicilio" header="DOMICILIO"/>
          <GridSortColumn path="telefono" header="TELÉFONO"/>
        </Grid>
        <HorizontalLayout theme="spacing padding">
          <Button onClick={() => setDialogOpened(true)} theme="primary" ><Icon icon="vaadin:close" /> Eliminar</Button>
          <Button onClick={() => setSelected(null)} theme="primary" ><Icon icon="vaadin:refresh" />
 Nuevo</Button>
        </HorizontalLayout>

        <ConfirmDialog
          header="Desea eliminar el Organismo?"
          cancelButtonVisible
          confirmText="Eliminar"
          cancelText="Cancelar"
          opened={dialogOpened}

          onConfirm={() => {
            onOrganismoDeleted()
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


