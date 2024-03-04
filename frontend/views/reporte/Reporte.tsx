import PerfilCard from "Frontend/components/PerfilCard";
import PerfilRecord from "Frontend/generated/com/example/application/services/PerfilService/PerfilRecord";
import { PerfilService } from "Frontend/generated/endpoints";
import { useEffect, useState } from "react";

export default function Reporte() {
  const [perfiles, setPerfiles] = useState<PerfilRecord[]>([]);

  useEffect(() => {
    PerfilService.findAllPerfiles().then(setPerfiles)
    
  }, []);
  
  return (
    <div className="flex flex-col h-full p-l box-border">
      
      {perfiles.map((perfil) => (
        <PerfilCard key={perfil.id} perfil={perfil} />
      ))}
      

    </div>
  );
}
