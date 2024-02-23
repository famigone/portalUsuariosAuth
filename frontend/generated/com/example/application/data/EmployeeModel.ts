import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, NotBlank as NotBlank_1, ObjectModel as ObjectModel_1, StringModel as StringModel_1 } from "@hilla/form";
import type Employee_1 from "./Employee.js";
class EmployeeModel<T extends Employee_1 = Employee_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(EmployeeModel);
    get nombre(): StringModel_1 {
        return this[_getPropertyModel_1]("nombre", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1()], meta: { javaType: "java.lang.String" } }));
    }
    get codigo(): StringModel_1 {
        return this[_getPropertyModel_1]("codigo", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1()], meta: { javaType: "java.lang.String" } }));
    }
    get domicilio(): StringModel_1 {
        return this[_getPropertyModel_1]("domicilio", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1()], meta: { javaType: "java.lang.String" } }));
    }
    get telefono(): StringModel_1 {
        return this[_getPropertyModel_1]("telefono", (parent, key) => new StringModel_1(parent, key, false, { validators: [new NotBlank_1()], meta: { javaType: "java.lang.String" } }));
    }
}
export default EmployeeModel;
