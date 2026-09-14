/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3215

function cs2_3215(intArg0: number, intArg1: number): void {
    let str0: string = ifGetText(Component.interface_906.component_906_306);
    let str1: string = str0;
    let str2: string = "";

    if (intArg0 == 96) {
        if (varc_1660 > 0) {
            varc_1660 = varc_1660 - 1;
        }
    } else if (intArg0 == 97) {
        if (varc_1660 < stringLength(str0)) {
            varc_1660 = varc_1660 + 1;
        }
    } else if (intArg0 == 102) {
        varc_1660 = 0;
    } else if (intArg0 == 103) {
        varc_1660 = stringLength(str0);
    } else if (intArg0 == 67 && keyheldCtrl() == 1) {
        str2 = getclipboard();
        str2 = subString(str2, 0, min(320 - stringLength(str0), stringLength(str2)));
        str1 = subString(str0, 0, varc_1660);
        str1 = append(str1, str2);
        str1 = append(str1, subString(str0, varc_1660, stringLength(str0)));
        varc_1660 = varc_1660 + stringLength(str2);
    } else {
        [str1, varc_1660] = cs2_802(varc_1660, str0, 3, intArg0, intArg1);
    }
    ifSetText(str1, Component.interface_906.component_906_306);
    let int2: number = stringWidth(subString(str1, 0, varc_1660), ifGetfontmetrics(Component.interface_906.component_906_306));
    let int3: number = 4;

    if (int2 + 4 > ifGetWidth(Component.interface_906.component_906_305)) {
        int3 = -4 - (int2 - ifGetWidth(Component.interface_906.component_906_305));
    }
    ifSetPosition(int3, ifGetY(Component.interface_906.component_906_306), 0, 0, Component.interface_906.component_906_306);
    ifSetPosition(cs2_1551(varc_1660, str1, ifGetfontmetrics(Component.interface_906.component_906_306), int3), ifGetY(Component.interface_906.component_906_307), 0, 0, Component.interface_906.component_906_307);
}
