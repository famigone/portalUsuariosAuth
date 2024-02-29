import type AbstractEntity_1 from "./AbstractEntity.js";
import type Aplicacion_1 from "./Aplicacion.js";
import type Organismo_1 from "./Organismo.js";
import type Tipo_1 from "./Perfil/Tipo.js";
import type Role_1 from "./Role.js";
import type User_1 from "./User.js";
interface Perfil extends AbstractEntity_1 {
    nombre: string;
    apellido: string;
    username: string;
    pass: string;
    role: Role_1;
    user: User_1;
    dni: string;
    domicilio: string;
    telefono: string;
    email: string;
    organismo: Organismo_1;
    aplicaciones: Array<Aplicacion_1>;
    tipo: Tipo_1;
}
export default Perfil;
