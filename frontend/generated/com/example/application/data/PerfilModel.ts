import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import OrganismoModel_1 from "./OrganismoModel.js";
import type Perfil_1 from "./Perfil.js";
import TipoModel_1 from "./Perfil/TipoModel.js";
import RoleModel_1 from "./RoleModel.js";
import UserModel_1 from "./UserModel.js";
class PerfilModel<T extends Perfil_1 = Perfil_1> extends AbstractEntityModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(PerfilModel);
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get apellido(): StringModel_1 {
        return this[_getPropertyModel_1]("apellido", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get username(): StringModel_1 {
        return this[_getPropertyModel_1]("username", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get pass(): StringModel_1 {
        return this[_getPropertyModel_1]("pass", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get role(): RoleModel_1 {
        return this[_getPropertyModel_1]("role", (parent, key) => new RoleModel_1(parent, key, false));
    }
    get user(): UserModel_1 {
        return this[_getPropertyModel_1]("user", (parent, key) => new UserModel_1(parent, key, false, { meta: { annotations: [{ name: "jakarta.persistence.OneToOne" }] } }));
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
    get tipo(): TipoModel_1 {
        return this[_getPropertyModel_1]("tipo", (parent, key) => new TipoModel_1(parent, key, false));
    }
}
export default PerfilModel;
