import type AbstractEntity_1 from "./AbstractEntity.js";
import type Perfil_1 from "./Perfil.js";
interface Organismo extends AbstractEntity_1 {
    nombre: string;
    codigo: string;
    domicilio: string;
    telefono: string;
    perfiles?: Array<Perfil_1>;
}
export default Organismo;
