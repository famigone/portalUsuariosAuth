import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotBlank as NotBlank_1, NotNull as NotNull_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import type Organismo_1 from "./Organismo.js";
import PerfilModel_1 from "./PerfilModel.js";
class OrganismoModel<T extends Organismo_1 = Organismo_1> extends AbstractEntityModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(OrganismoModel);
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1(), new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get codigo(): StringModel_1 {
        return this[_getPropertyModel_1]("codigo", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotNull_1(), new NotBlank_1()], meta: { javaType: "java.lang.String" } }));
    }
    get domicilio(): StringModel_1 {
        return this[_getPropertyModel_1]("domicilio", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1(), new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get telefono(): StringModel_1 {
        return this[_getPropertyModel_1]("telefono", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1(), new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get perfiles(): ArrayModel_1<PerfilModel_1> {
        return this[_getPropertyModel_1]("perfiles", (parent, key) => new ArrayModel_1(parent, key, true, (parent, key) => new PerfilModel_1(parent, key, false), { meta: { annotations: [{ name: "jakarta.persistence.OneToMany" }], javaType: "java.util.List" } }));
    }
}
export default OrganismoModel;
