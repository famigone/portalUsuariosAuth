import { EndpointRequestInit as EndpointRequestInit_1 } from "@hilla/frontend";
import type User_1 from "./com/example/application/data/User.js";
import client_1 from "./connect-client.default.js";
async function getAuthenticatedUser_1(init?: EndpointRequestInit_1): Promise<User_1 | undefined> { return client_1.call("UserEndpoint", "getAuthenticatedUser", {}, init); }
export { getAuthenticatedUser_1 as getAuthenticatedUser };
