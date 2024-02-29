import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type Aplicacion_1 from "./com/example/application/data/Aplicacion.js";
import type Perfil_1 from "./com/example/application/data/Perfil.js";
import type Role_1 from "./com/example/application/data/Role.js";
import type User_1 from "./com/example/application/data/User.js";
import type AplicacionRecord_1 from "./com/example/application/services/AplicacionService/AplicacionRecord.js";
import type PerfilRecord_1 from "./com/example/application/services/PerfilService/PerfilRecord.js";
import client_1 from "./connect-client.default.js";
import type Pageable_1 from "./dev/hilla/mappedtypes/Pageable.js";
async function convertirASetAplicacion_1(aplicacionesRecords: Array<AplicacionRecord_1>, init?: EndpointRequestInit_1): Promise<Array<Aplicacion_1>> { return client_1.call("PerfilService", "convertirASetAplicacion", { aplicacionesRecords }, init); }
async function count_1(init?: EndpointRequestInit_1): Promise<number> { return client_1.call("PerfilService", "count", {}, init); }
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("PerfilService", "delete", { id }, init); }
async function findAllPerfiles_1(init?: EndpointRequestInit_1): Promise<Array<PerfilRecord_1>> { return client_1.call("PerfilService", "findAllPerfiles", {}, init); }
async function findPerfilByUsername_1(username: string, init?: EndpointRequestInit_1): Promise<Array<Perfil_1>> { return client_1.call("PerfilService", "findPerfilByUsername", { username }, init); }
async function get_1(id: number, init?: EndpointRequestInit_1): Promise<Perfil_1 | undefined> { return client_1.call("PerfilService", "get", { id }, init); }
async function list_1(pageable: Pageable_1, init?: EndpointRequestInit_1): Promise<Array<Perfil_1>> { return client_1.call("PerfilService", "list", { pageable }, init); }
async function obtenerAplicacionesById_1(id: number, init?: EndpointRequestInit_1): Promise<Array<Aplicacion_1>> { return client_1.call("PerfilService", "obtenerAplicacionesById", { id }, init); }
async function registrarNuevoUsuario_1(username: string, password: string, name: string, roles: Array<Role_1>, init?: EndpointRequestInit_1): Promise<User_1> { return client_1.call("PerfilService", "registrarNuevoUsuario", { username, password, name, roles }, init); }
async function save_1(elPerfil: PerfilRecord_1, init?: EndpointRequestInit_1): Promise<PerfilRecord_1> { return client_1.call("PerfilService", "save", { elPerfil }, init); }
async function vincularAplicaciones_1(perfil: Perfil_1, nuevasAplicaciones: Array<AplicacionRecord_1>, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("PerfilService", "vincularAplicaciones", { perfil, nuevasAplicaciones }, init); }
export { convertirASetAplicacion_1 as convertirASetAplicacion, count_1 as count, delete_1 as delete, findAllPerfiles_1 as findAllPerfiles, findPerfilByUsername_1 as findPerfilByUsername, get_1 as get, list_1 as list, obtenerAplicacionesById_1 as obtenerAplicacionesById, registrarNuevoUsuario_1 as registrarNuevoUsuario, save_1 as save, vincularAplicaciones_1 as vincularAplicaciones };
