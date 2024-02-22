import { _getPropertyModel as _getPropertyModel_1, makeObjectEmptyValueCreator as makeObjectEmptyValueCreator_1, ObjectModel as ObjectModel_1 } from "@hilla/form";
import type Specification_1 from "./Specification.js";
class SpecificationModel<T extends Specification_1 = Specification_1> extends ObjectModel_1<T> {
    static override createEmptyValue = makeObjectEmptyValueCreator_1(SpecificationModel);
}
export default SpecificationModel;
