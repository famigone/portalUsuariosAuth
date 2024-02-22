import type AbstractEntity_1 from "./AbstractEntity.js";
import type Organismo_1 from "./Organismo.js";
import type Role_1 from "./Role.js";
import type Tipo_1 from "./User/Tipo.js";
interface User extends AbstractEntity_1 {
    username: string;
    name: string;
    apellido: string;
    dni: string;
    domicilio: string;
    telefono: string;
    email: string;
    organismo: Organismo_1;
    roles: Array<Role_1>;
    profilePicture: Array<number>;
    tipo: Tipo_1;
}
export default User;
