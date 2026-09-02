/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3257

function cs2_3257(): void {
    if (varc_rand_exists_5 == 1) {
        ifSetText(varcstr_rand_name_5, Component.interface_933.component_933_301);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_5_1), Component.interface_933.component_933_302);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_5_2), Component.interface_933.component_933_303);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_5_3), Component.interface_933.component_933_304);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_5_4), Component.interface_933.component_933_305);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_5_5), Component.interface_933.component_933_306);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_5_6), Component.interface_933.component_933_307);
    } else {
        ifSetText("", Component.interface_933.component_933_301);
        ifSetText("", Component.interface_933.component_933_302);
        ifSetText("", Component.interface_933.component_933_303);
        ifSetText("", Component.interface_933.component_933_304);
        ifSetText("", Component.interface_933.component_933_305);
        ifSetText("", Component.interface_933.component_933_306);
        ifSetText("", Component.interface_933.component_933_307);
    }
}
