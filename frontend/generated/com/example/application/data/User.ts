import type AbstractEntity_1 from "./AbstractEntity.js";
import type Role_1 from "./Role.js";
interface User extends AbstractEntity_1 {
    username: string;
    name: string;
    roles: Array<Role_1>;
    profilePicture: Array<number>;
}
export default User;
