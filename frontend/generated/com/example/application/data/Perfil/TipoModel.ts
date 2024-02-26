import { _enum as _enum_1, EnumModel as EnumModel_1, makeEnumEmptyValueCreator as makeEnumEmptyValueCreator_1 } from "@hilla/form";
import Tipo_1 from "./Tipo.js";
class TipoModel extends EnumModel_1<typeof Tipo_1> {
    static override createEmptyValue = makeEnumEmptyValueCreator_1(TipoModel);
    readonly [_enum_1] = Tipo_1;
}
export default TipoModel;
