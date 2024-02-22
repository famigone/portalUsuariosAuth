import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import OrganismoModel_1 from "./OrganismoModel.js";
import RoleModel_1 from "./RoleModel.js";
import type User_1 from "./User.js";
import TipoModel_1 from "./User/TipoModel.js";
class UserModel<T extends User_1 = User_1> extends AbstractEntityModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(UserModel);
    get username(): StringModel_1 {
        return this[_getPropertyModel_1]("username", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get name(): StringModel_1 {
        return this[_getPropertyModel_1]("name", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get apellido(): StringModel_1 {
        return this[_getPropertyModel_1]("apellido", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get dni(): StringModel_1 {
        return this[_getPropertyModel_1]("dni", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get domicilio(): StringModel_1 {
        return this[_getPropertyModel_1]("domicilio", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get telefono(): StringModel_1 {
        return this[_getPropertyModel_1]("telefono", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get email(): StringModel_1 {
        return this[_getPropertyModel_1]("email", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get organismo(): OrganismoModel_1 {
        return this[_getPropertyModel_1]("organismo", (parent, key) => new OrganismoModel_1(parent, key, false, { meta: { annotations: [{ name: "jakarta.persistence.ManyToOne" }] } }));
    }
    get roles(): ArrayModel_1<RoleModel_1> {
        return this[_getPropertyModel_1]("roles", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new RoleModel_1(parent, key, false), { meta: { javaType: "java.util.Set" } }));
    }
    get profilePicture(): ArrayModel_1<NumberModel_1> {
        return this[_getPropertyModel_1]("profilePicture", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "byte" } }), { meta: { javaType: "byte[]" } }));
    }
    get tipo(): TipoModel_1 {
        return this[_getPropertyModel_1]("tipo", (parent, key) => new TipoModel_1(parent, key, false));
    }
}
export default UserModel;
