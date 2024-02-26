import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type Aplicacion_1 from "./com/example/application/data/Aplicacion.js";
import type Perfil_1 from "./com/example/application/data/Perfil.js";
import type AplicacionRecord_1 from "./com/example/application/services/AplicacionService/AplicacionRecord.js";
import client_1 from "./connect-client.default.js";
import type Pageable_1 from "./dev/hilla/mappedtypes/Pageable.js";
async function count_1(init?: EndpointRequestInit_1): Promise<number> { return client_1.call("AplicacionService", "count", {}, init); }
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("AplicacionService", "delete", { id }, init); }
async function findAllAplicaciones_1(init?: EndpointRequestInit_1): Promise<Array<AplicacionRecord_1>> { return client_1.call("AplicacionService", "findAllAplicaciones", {}, init); }
async function findAllAplicacionesUsuario_1(perfil: Perfil_1, init?: EndpointRequestInit_1): Promise<Array<AplicacionRecord_1>> { return client_1.call("AplicacionService", "findAllAplicacionesUsuario", { perfil }, init); }
async function get_1(id: number, init?: EndpointRequestInit_1): Promise<Aplicacion_1 | undefined> { return client_1.call("AplicacionService", "get", { id }, init); }
async function list_1(pageable: Pageable_1, init?: EndpointRequestInit_1): Promise<Array<Aplicacion_1>> { return client_1.call("AplicacionService", "list", { pageable }, init); }
async function save_1(laAplicacion: AplicacionRecord_1, init?: EndpointRequestInit_1): Promise<AplicacionRecord_1> { return client_1.call("AplicacionService", "save", { laAplicacion }, init); }
export { count_1 as count, delete_1 as delete, findAllAplicaciones_1 as findAllAplicaciones, findAllAplicacionesUsuario_1 as findAllAplicacionesUsuario, get_1 as get, list_1 as list, save_1 as save };
