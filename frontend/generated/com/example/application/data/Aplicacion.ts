import type AbstractEntity_1 from "./AbstractEntity.js";
interface Aplicacion extends AbstractEntity_1 {
    nombre: string;
    descripcion: string;
    link: string;
    aplicacionPicture: Array<number>;
    profilePicture: Array<number>;
}
export default Aplicacion;
