import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotBlank as NotBlank_1, NotNull as NotNull_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import type Aplicacion_1 from "./Aplicacion.js";
import PerfilModel_1 from "./PerfilModel.js";
class AplicacionModel<T extends Aplicacion_1 = Aplicacion_1> extends AbstractEntityModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(AplicacionModel);
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1(), new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get codigo(): StringModel_1 {
        return this[_getPropertyModel_1]("codigo", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1(), new NotNull_1()], meta: { javaType: "java.lang.String" } }));
    }
    get perfiles(): ArrayModel_1<PerfilModel_1> {
        return this[_getPropertyModel_1]("perfiles", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new PerfilModel_1(parent, key, false), { meta: { annotations: [{ name: "jakarta.persistence.ManyToMany" }], javaType: "java.util.Set" } }));
    }
}
export default AplicacionModel;
