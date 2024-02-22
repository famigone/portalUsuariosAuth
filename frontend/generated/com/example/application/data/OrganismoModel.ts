import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import type Organismo_1 from "./Organismo.js";
class OrganismoModel<T extends Organismo_1 = Organismo_1> extends AbstractEntityModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(OrganismoModel);
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get codigo(): StringModel_1 {
        return this[_getPropertyModel_1]("codigo", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get domicilio(): StringModel_1 {
        return this[_getPropertyModel_1]("domicilio", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get telefono(): StringModel_1 {
        return this[_getPropertyModel_1]("telefono", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
}
export default OrganismoModel;
