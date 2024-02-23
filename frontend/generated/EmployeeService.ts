import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type Employee_1 from "./com/example/application/data/Employee.js";
import client_1 from "./connect-client.default.js";
import type Filter_1 from "./dev/hilla/crud/filter/Filter.js";
import type Pageable_1 from "./dev/hilla/mappedtypes/Pageable.js";
async function count_1(filter: Filter_1 | undefined, init?: EndpointRequestInit_1): Promise<number> { return client_1.call("EmployeeService", "count", { filter }, init); }
async function exists_1(id: number, init?: EndpointRequestInit_1): Promise<boolean> { return client_1.call("EmployeeService", "exists", { id }, init); }
async function get_1(id: number, init?: EndpointRequestInit_1): Promise<Employee_1 | undefined> { return client_1.call("EmployeeService", "get", { id }, init); }
async function list_1(pageable: Pageable_1, filter: Filter_1 | undefined, init?: EndpointRequestInit_1): Promise<Array<Employee_1>> { return client_1.call("EmployeeService", "list", { pageable, filter }, init); }
async function delete_1(id: number, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("EmployeeService", "delete", { id }, init); }
async function deleteAll_1(ids: Array<number>, init?: EndpointRequestInit_1): Promise<void> { return client_1.call("EmployeeService", "deleteAll", { ids }, init); }
async function save_1(value: Employee_1, init?: EndpointRequestInit_1): Promise<Employee_1 | undefined> { return client_1.call("EmployeeService", "save", { value }, init); }
async function saveAll_1(values: Array<Employee_1>, init?: EndpointRequestInit_1): Promise<Array<Employee_1>> { return client_1.call("EmployeeService", "saveAll", { values }, init); }
export { count_1 as count, delete_1 as delete, deleteAll_1 as deleteAll, exists_1 as exists, get_1 as get, list_1 as list, save_1 as save, saveAll_1 as saveAll };
