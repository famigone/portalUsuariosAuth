import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import Card from "Frontend/components/Card";
import AplicacionRecord from "Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord";
import { AplicacionService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
export default function AplicacionesUsuarioView() {

  const [apps, setApps] = useState<AplicacionRecord[]>([]);  

  useEffect(() => {
    cargarAplicacionesAsignadas()
  }, []);
  
  async function cargarAplicacionesAsignadas() {  
    console.log("entroooooooooo")         
     await AplicacionService.findAllAplicaciones().then(setApps)    
  }
  
  return (
    <HorizontalLayout theme="spacing padding">
     {apps.map((app: AplicacionRecord, index: number) => (
        <Card 
          key={index} 
          nombre={app.nombre} 
          codigo={app.codigo} />
      ))}
      
    </HorizontalLayout>
  );
}
