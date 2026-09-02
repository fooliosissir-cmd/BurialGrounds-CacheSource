/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2938

function cs2_2938(): void {
    if (varc_rand_exists_2 == 1) {
        ifSetText(varcstr_rand_name_2, Component.interface_933.component_933_267);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_2_1), Component.interface_933.component_933_268);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_2_2), Component.interface_933.component_933_269);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_2_3), Component.interface_933.component_933_270);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_2_4), Component.interface_933.component_933_271);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_2_5), Component.interface_933.component_933_272);
        ifSetText(enumOp(type_int, type_string, Enum.enum_2857, varc_rand_award_2_6), Component.interface_933.component_933_273);
    } else {
        ifSetText("", Component.interface_933.component_933_267);
        ifSetText("", Component.interface_933.component_933_268);
        ifSetText("", Component.interface_933.component_933_269);
        ifSetText("", Component.interface_933.component_933_270);
        ifSetText("", Component.interface_933.component_933_271);
        ifSetText("", Component.interface_933.component_933_272);
        ifSetText("", Component.interface_933.component_933_273);
    }
}
