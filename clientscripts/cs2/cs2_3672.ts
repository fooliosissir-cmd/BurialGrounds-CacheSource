/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3672

function cs2_3672(): void {
    let str0: string = enumOp(type_int, type_string, Enum.vkq2_chem_status, varc_1327);
    let str1: string = enumOp(type_int, type_string, Enum.vkq2_chem_status, varc_1326);
    let str2: string = enumOp(type_int, type_string, Enum.vkq2_chem_balance, varc_1330);
    let str3: string = tostring(varc_1325) + "%";
    let int0: graphic = enumOp(type_int, type_graphic, Enum.vkq2_chem_icon, varc_1328);
    let int1: graphic = enumOp(type_int, type_graphic, Enum.vkq2_chem_icon, varc_1329);

    ifSetText(str0, Component.interface_1004.component_1004_72);
    ifSetColour(enumOp(type_int, type_int, Enum.vkq2_chem_colour, varc_1327), Component.interface_1004.component_1004_72);
    ifSetText(str1, Component.interface_1004.component_1004_71);
    ifSetColour(enumOp(type_int, type_int, Enum.vkq2_chem_colour, varc_1326), Component.interface_1004.component_1004_71);
    ifSetGraphic(int0, Component.interface_1004.component_1004_68);
    ifSetGraphic(int1, Component.interface_1004.component_1004_69);
    ifSetText(str2, Component.interface_1004.component_1004_70);
    ifSetColour(enumOp(type_int, type_int, Enum.vkq2_chem_balcolour, varc_1330), Component.interface_1004.component_1004_70);
    ifSetText(str3, Component.interface_1004.component_1004_73);

    if (varc_1327 != 3) {
        ifSetHide(false, Component.interface_1004.component_1004_66);
    } else {
        ifSetHide(true, Component.interface_1004.component_1004_66);
    }

    if (varc_1326 != 3) {
        ifSetHide(false, Component.interface_1004.component_1004_63);
    } else {
        ifSetHide(true, Component.interface_1004.component_1004_63);
    }

    if (varc_1331 == 1) {
        ifSetHide(false, Component.interface_1004.component_1004_65);
    } else {
        ifSetHide(true, Component.interface_1004.component_1004_65);
    }

    if (varc_1330 > 66) {
        ifSetHide(false, Component.interface_1004.component_1004_64);
    } else {
        ifSetHide(true, Component.interface_1004.component_1004_64);
    }
}
