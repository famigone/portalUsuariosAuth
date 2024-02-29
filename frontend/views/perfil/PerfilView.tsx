import { Button } from '@hilla/react-components/Button.js';
import AsignacionDialogo from 'Frontend/components/AsignacionDialogo';
import { useEffect, useState } from 'react';
import { Grid } from "@hilla/react-components/Grid";


import PerfilRecord from 'Frontend/generated/com/example/application/services/PerfilService/PerfilRecord';
import { AplicacionService, PerfilService } from 'Frontend/generated/endpoints.js';
import PerfilForm from './PerfilForm';
import { ConfirmDialog } from '@hilla/react-components/ConfirmDialog.js';

import { Icon } from '@hilla/react-components/Icon.js';

import { GridFilterColumn } from '@hilla/react-components/GridFilterColumn.js';
import AplicacionRecord from 'Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord';

export default function PerfilView() {
  const [perfiles, setPerfiles] = useState<PerfilRecord[]>([]);
  const [aplicacionesAsignadas, setAplicacionesAsignadas] = useState<AplicacionRecord[]>([]);
  const [selected, setSelected] = useState<PerfilRecord | null | undefined>();  
  const [dialogOpened, setDialogOpened] = useState(false);
  const [dialogAsignacionOpened, setDialogAsignacionOpened] = useState(false);

  useEffect(() => {
    PerfilService.findAllPerfiles().then(setPerfiles)        
  }, []);


  const cerrarDialogo = ()=>{setDialogAsignacionOpened(false)}

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
  
  function onSelect(perfil: PerfilRecord | null | undefined) {        
    if (perfil) {
      setSelected(perfil);   
    }
  }


  async function cargarAplicacionesAsignadas() {   
    console.log("entro en cargarAplicacionesAsignadas")
    setDialogAsignacionOpened(true)
    if (selected) await AplicacionService.findAplicacionesByPerfilId(selected.id).then(setAplicacionesAsignadas)      
    console.log("apps: "+aplicacionesAsignadas)
  }
  

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
          //onActiveItemChanged={e => setSelected(e.detail.value)}
          onActiveItemChanged={e => onSelect(e.detail.value)}
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
          <Button disabled={selected == null} onClick={() => cargarAplicacionesAsignadas()} theme="primary small" ><Icon icon="vaadin:user" />
            Asignar Aplicaciones</Button> 
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

      <AsignacionDialogo 
              dialogAsignacionOpened={dialogAsignacionOpened} 
              cerrarDialogo={cerrarDialogo}
              perfil = {selected}
      />        

    </>
  );
}


