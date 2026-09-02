/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2278

function cs2_2278(): void {
    if (varc_rand_exists_1 == 1) {
        ifSetText(varcstr_rand_name_1, Component.interface_933.component_933_309);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_1_1), Component.interface_933.component_933_310);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_1_2), Component.interface_933.component_933_311);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_1_3), Component.interface_933.component_933_312);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_1_4), Component.interface_933.component_933_313);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_1_5), Component.interface_933.component_933_314);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_1_6), Component.interface_933.component_933_315);
    } else {
        ifSetText("", Component.interface_933.component_933_309);
        ifSetText("", Component.interface_933.component_933_310);
        ifSetText("", Component.interface_933.component_933_311);
        ifSetText("", Component.interface_933.component_933_312);
        ifSetText("", Component.interface_933.component_933_313);
        ifSetText("", Component.interface_933.component_933_314);
        ifSetText("", Component.interface_933.component_933_315);
    }
}
