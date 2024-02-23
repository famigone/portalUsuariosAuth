import { AutoCrud } from "@hilla/react-crud";
import { EmployeeService, OrganismoCrudService } from "Frontend/generated/endpoints";
import OrganismoModel from "Frontend/generated/com/example/application/data/OrganismoModel";



import {useEffect, useState} from 'react';
import {Grid} from "@hilla/react-components/Grid";
import {GridColumn} from "@hilla/react-components/GridColumn";
import EmployeeModel from "Frontend/generated/com/example/application/data/EmployeeModel";

export default function EmployeeView() {
  

  return (
    
   <AutoCrud service={EmployeeService} model={EmployeeModel} />                                         
    
  );
}


