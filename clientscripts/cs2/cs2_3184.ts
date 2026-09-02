/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3184

function cs2_3184(): void {
    if (varc_rand_exists_3 == 1) {
        ifSetText(varcstr_rand_name_3, Component.interface_933.component_933_277);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_3_1), Component.interface_933.component_933_278);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_3_2), Component.interface_933.component_933_279);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_3_3), Component.interface_933.component_933_280);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_3_4), Component.interface_933.component_933_281);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_3_5), Component.interface_933.component_933_282);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_3_6), Component.interface_933.component_933_283);
    } else {
        ifSetText("", Component.interface_933.component_933_277);
        ifSetText("", Component.interface_933.component_933_278);
        ifSetText("", Component.interface_933.component_933_279);
        ifSetText("", Component.interface_933.component_933_280);
        ifSetText("", Component.interface_933.component_933_281);
        ifSetText("", Component.interface_933.component_933_282);
        ifSetText("", Component.interface_933.component_933_283);
    }
}
