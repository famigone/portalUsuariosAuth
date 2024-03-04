import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotNull as NotNull_1, NumberModel as NumberModel_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@hilla/form";
import TipoModel_1 from "../../data/Perfil/TipoModel.js";
import RoleModel_1 from "../../data/RoleModel.js";
import OrganismoRecordModel_1 from "../OrganismoService/OrganismoRecordModel.js";
import UserRecordModel_1 from "../UserEndpoint/UserRecordModel.js";
import type PerfilRecord_1 from "./PerfilRecord.js";
class PerfilRecordModel<T extends PerfilRecord_1 = PerfilRecord_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(PerfilRecordModel);
    get id(): NumberModel_1 {
        return this[_getPropertyModel_1]("id", (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "java.lang.Long" } }));
    }
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get apellido(): StringModel_1 {
        return this[_getPropertyModel_1]("apellido", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get dni(): StringModel_1 {
        return this[_getPropertyModel_1]("dni", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get domicilio(): StringModel_1 {
        return this[_getPropertyModel_1]("domicilio", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get telefono(): StringModel_1 {
        return this[_getPropertyModel_1]("telefono", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get email(): StringModel_1 {
        return this[_getPropertyModel_1]("email", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get tipo(): TipoModel_1 {
        return this[_getPropertyModel_1]("tipo", (parent, key) => new TipoModel_1(parent, key, false));
    }
    get organismo(): OrganismoRecordModel_1 {
        return this[_getPropertyModel_1]("organismo", (parent, key) => new OrganismoRecordModel_1(parent, key, false));
    }
    get user(): UserRecordModel_1 {
        return this[_getPropertyModel_1]("user", (parent, key) => new UserRecordModel_1(parent, key, false));
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
}
export default PerfilRecordModel;
