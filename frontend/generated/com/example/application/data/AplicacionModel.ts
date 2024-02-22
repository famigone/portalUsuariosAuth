import { _getPropertyModel as _getPropertyModel_1, ArrayModel as ArrayModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NumberModel as NumberModel_1, StringModel as StringModel_1 } from "@hilla/form";
import AbstractEntityModel_1 from "./AbstractEntityModel.js";
import type Aplicacion_1 from "./Aplicacion.js";
class AplicacionModel<T extends Aplicacion_1 = Aplicacion_1> extends AbstractEntityModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(AplicacionModel);
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get descripcion(): StringModel_1 {
        return this[_getPropertyModel_1]("descripcion", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get link(): StringModel_1 {
        return this[_getPropertyModel_1]("link", (parent, key) => new StringModel_1(parent, key, false, { meta: { javaType: "java.lang.String" } }));
    }
    get aplicacionPicture(): ArrayModel_1<NumberModel_1> {
        return this[_getPropertyModel_1]("aplicacionPicture", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "byte" } }), { meta: { javaType: "byte[]" } }));
    }
    get profilePicture(): ArrayModel_1<NumberModel_1> {
        return this[_getPropertyModel_1]("profilePicture", (parent, key) => new ArrayModel_1(parent, key, false, (parent, key) => new NumberModel_1(parent, key, false, { meta: { javaType: "byte" } }), { meta: { javaType: "byte[]" } }));
    }
}
export default AplicacionModel;
