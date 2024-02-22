import { Button } from '@hilla/react-components/Button.js';
import { Notification } from '@hilla/react-components/Notification.js';
import { TextField } from '@hilla/react-components/TextField.js';
import {useEffect, useState} from 'react';
import {Grid} from "@hilla/react-components/Grid";
import {GridColumn} from "@hilla/react-components/GridColumn";

import OrganismoRecord from 'Frontend/generated/com/example/application/services/OrganismoService/OrganismoRecord';
import { OrganismoService } from 'Frontend/generated/endpoints.js';
import OrganismoForm from './OrganismoForm';
export default function OrganismoView() {
  const [organismos, setOrganismos] = useState<OrganismoRecord[]>([]);
  const [selected, setSelected] = useState<OrganismoRecord | null | undefined>();


  useEffect(() => {
    OrganismoService.findAllOrganismos().then(setOrganismos)
}, []);

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
   <div className="p-m flex gap-m">
            <Grid
                items={organismos}
                onActiveItemChanged={e => setSelected(e.detail.value)}
                selectedItems={[selected]}>

                <GridColumn path="nombre"/>
                <GridColumn path="codigo"/>
                <GridColumn path="domicilio"/>
                <GridColumn path="telefono" />
            </Grid>

            {
                <OrganismoForm organismo={selected} onSubmit={onOrganismoSaved}/>
            }
        </div>
    </>
  );
}


