/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3248

function cs2_3248(): void {
    if (varc_rand_exists_4 == 1) {
        ifSetText(varcstr_rand_name_4, Component.interface_933.component_933_287);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_4_1), Component.interface_933.component_933_288);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_4_2), Component.interface_933.component_933_289);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_4_3), Component.interface_933.component_933_290);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_4_4), Component.interface_933.component_933_291);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_4_5), Component.interface_933.component_933_292);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_4_6), Component.interface_933.component_933_293);
    } else {
        ifSetText("", Component.interface_933.component_933_287);
        ifSetText("", Component.interface_933.component_933_288);
        ifSetText("", Component.interface_933.component_933_289);
        ifSetText("", Component.interface_933.component_933_290);
        ifSetText("", Component.interface_933.component_933_291);
        ifSetText("", Component.interface_933.component_933_292);
        ifSetText("", Component.interface_933.component_933_293);
    }
}
