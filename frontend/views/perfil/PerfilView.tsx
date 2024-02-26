import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { useEffect, useState } from 'react';
import { Grid } from "@hilla/react-components/Grid";
import { GridColumn } from "@hilla/react-components/GridColumn";

import PerfilRecord from 'Frontend/generated/com/example/application/services/PerfilService/PerfilRecord';
import { PerfilService } from 'Frontend/generated/endpoints.js';
import PerfilForm from './PerfilForm';
import { ConfirmDialog } from '@hilla/react-components/ConfirmDialog.js';
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js';
import { Icon } from '@hilla/react-components/Icon.js';
import { GridSortColumn } from '@hilla/react-components/GridSortColumn.js';
import { GridFilterColumn } from '@hilla/react-components/GridFilterColumn.js';

export default function PerfilView() {
  const [perfiles, setPerfiles] = useState<PerfilRecord[]>([]);
  const [selected, setSelected] = useState<PerfilRecord | null>();
  const [dialogOpened, setDialogOpened] = useState(false);
  

  useEffect(() => {
    PerfilService.findAllPerfiles().then(setPerfiles)        
  }, []);


  const onPerfilDeleted = async () => {
    if (selected && selected.id) {
      try {
        // Llamar al servicio para eliminar el registro
        await PerfilService.delete(selected.id);
        //actualizamos el estado          
        setPerfiles(perfiles.filter(perfil => perfil.id != selected.id))
      } catch (error) {
        console.error("Error al eliminar el perfil:", error);
      }
    }
  };

  async function onPerfilSaved(perfil: PerfilRecord) {
    
    const saved = await PerfilService.save(perfil)
    if (perfil.id) {
      setPerfiles(perfiles => perfiles.map(current => current.id === saved.id ? saved : current));
    } else {
      setPerfiles(perfiles => [...perfiles, saved]);
    }
    setSelected(saved);


  }
  console.log(perfiles)
  return (
    <>
      <div className="p-m  gap-m border: 2px">
        <PerfilForm
          perfil={selected}
          onSubmit={onPerfilSaved}
        />

      </div>
      <div className="p-m  gap-m">
        <Grid
          theme="row-stripes"
          allRowsVisible
          items={perfiles}
          onActiveItemChanged={e => setSelected(e.detail.value)}
          selectedItems={[selected]}>
          <GridFilterColumn path="tipo" header="TIPO" />          
          <GridFilterColumn path="apellido" header="APELLIDO" />          
          <GridFilterColumn path="nombre" header="NOMBRE" />
          <GridFilterColumn path="dni" header="DNI" />                    
          <GridFilterColumn path="email" header="EMAIL" />                    
          <GridFilterColumn path="domicilio" header="DOMICILIO" />          
          <GridFilterColumn path="telefono" header="TELÉFONO" />                                        
          
          
        </Grid>

        <div style={{ margin: '3px' }} className="flex gap-m gap-s">

          <Button disabled={selected == null} theme="primary error small" onClick={() => setDialogOpened(true)} ><Icon icon="vaadin:close" /> Eliminar</Button>
          <Button onClick={() => setSelected(null)} theme="primary small" ><Icon icon="vaadin:refresh" />
            Nuevo</Button>

        </div>
        <ConfirmDialog
          header="Desea eliminar el Perfil?"
          cancelButtonVisible
          confirmText="Eliminar"
          cancelText="Cancelar"
          opened={dialogOpened}

          onConfirm={() => {
            onPerfilDeleted()
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


