import { HorizontalLayout } from "@hilla/react-components/HorizontalLayout.js";
import Card from "Frontend/components/Card";
import Perfil from "Frontend/generated/com/example/application/data/Perfil";
import AplicacionRecord from "Frontend/generated/com/example/application/services/AplicacionService/AplicacionRecord";
import PerfilRecord from "Frontend/generated/com/example/application/services/PerfilService/PerfilRecord";
import { AplicacionService, PerfilService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";
export default function AplicacionesUsuarioView() {

  const [apps, setApps] = useState<AplicacionRecord[]>([]);  
  const [perfil, setPerfil] = useState <PerfilRecord[]>();  

  useEffect(() => {
    cargarAplicacionesAsignadas()
  }, []);
  
  async function cargarAplicacionesAsignadas() {  
    console.log("entroooooooooo")         
     await AplicacionService.findAllAplicaciones().then(setApps)    
     //await PerfilService.findPerfilByUsername("tete").then(setPerfil)    
    // await PerfilService.findAllPerfiles().then(setPerfil)
     console.log(perfil)    
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
