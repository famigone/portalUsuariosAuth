import { AutoCrud } from "@hilla/react-crud";
import { OrganismoCrudService } from "Frontend/generated/endpoints";
import OrganismoModel from "Frontend/generated/com/example/application/data/OrganismoModel";



import {useEffect, useState} from 'react';
import {Grid} from "@hilla/react-components/Grid";
import {GridColumn} from "@hilla/react-components/GridColumn";

export default function OrganismoCrudView() {
  

  return (
    
   <AutoCrud service={OrganismoCrudService} model={OrganismoModel} />                                         
    
  );
}


