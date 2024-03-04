import type Tipo_1 from "../../data/Perfil/Tipo.js";
import type Role_1 from "../../data/Role.js";
import type OrganismoRecord_1 from "../OrganismoService/OrganismoRecord.js";
import type UserRecord_1 from "../UserEndpoint/UserRecord.js";
interface PerfilRecord {
    id: number;
    nombre: string;
    apellido: string;
    dni: string;
    domicilio: string;
    telefono: string;
    email: string;
    tipo: Tipo_1;
    organismo: OrganismoRecord_1;
    user: UserRecord_1;
    username: string;
    pass: string;
    role: Role_1;
}
export default PerfilRecord;
