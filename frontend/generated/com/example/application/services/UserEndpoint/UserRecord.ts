import type Role_1 from "../../data/Role.js";
interface UserRecord {
    id: number;
    username: string;
    name: string;
    hashedPassword: string;
    roles: Array<Role_1>;
    profilePicture: Array<number>;
}
export default UserRecord;
