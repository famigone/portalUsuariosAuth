import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type Organismo_1 from "./com/example/application/data/Organismo.js";
import type OrganismoRecord_1 from "./com/example/application/services/OrganismoService/OrganismoRecord.js";
import client_1 from "./connect-client.default.js";
import type Pageable_1 from "./dev/hilla/mappedtypes/Pageable.js";
async function count_1(init?: EndpointRequestInit_1): Promise<number> { return client_1.call("OrganismoService", "count", {}, init); }
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("OrganismoService", "delete", { id }, init); }
async function findAllOrganismos_1(init?: EndpointRequestInit_1): Promise<Array<OrganismoRecord_1>> { return client_1.call("OrganismoService", "findAllOrganismos", {}, init); }
async function get_1(id: number, init?: EndpointRequestInit_1): Promise<Organismo_1 | undefined> { return client_1.call("OrganismoService", "get", { id }, init); }
async function list_1(pageable: Pageable_1, init?: EndpointRequestInit_1): Promise<Array<Organismo_1>> { return client_1.call("OrganismoService", "list", { pageable }, init); }
async function save_1(elOrganismo: OrganismoRecord_1, init?: EndpointRequestInit_1): Promise<OrganismoRecord_1> { return client_1.call("OrganismoService", "save", { elOrganismo }, init); }
async function update_1(entity: Organismo_1, init?: EndpointRequestInit_1): Promise<Organismo_1> { return client_1.call("OrganismoService", "update", { entity }, init); }
export { count_1 as count, delete_1 as delete, findAllOrganismos_1 as findAllOrganismos, get_1 as get, list_1 as list, save_1 as save, update_1 as update };
