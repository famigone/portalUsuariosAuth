import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type Organismo_1 from "./com/example/application/data/Organismo.js";
import client_1 from "./connect-client.default.js";
import type Pageable_1 from "./dev/hilla/mappedtypes/Pageable.js";
import type Specification_1 from "./org/springframework/data/jpa/domain/Specification.js";
async function count_1(init?: EndpointRequestInit_1): Promise<number> { return client_1.call("OrganismoService", "count", {}, init); }
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("OrganismoService", "delete", { id }, init); }
async function get_1(id: number, init?: EndpointRequestInit_1): Promise<Organismo_1 | undefined> { return client_1.call("OrganismoService", "get", { id }, init); }
async function list_1(pageable: Pageable_1, filter: Specification_1, init?: EndpointRequestInit_1): Promise<Array<Organismo_1>> { return client_1.call("OrganismoService", "list", { pageable, filter }, init); }
async function update_1(entity: Organismo_1, init?: EndpointRequestInit_1): Promise<Organismo_1> { return client_1.call("OrganismoService", "update", { entity }, init); }
export { count_1 as count, delete_1 as delete, get_1 as get, list_1 as list, update_1 as update };
