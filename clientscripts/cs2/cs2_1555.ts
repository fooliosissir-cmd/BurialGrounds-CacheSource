/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1555

function cs2_1555(intArg0: number): void {
    ifSetPosition(cs2_1551(varc_1028, varcstr_1, Graphic.p12_full, intArg0), ifGetY(Component.interface_137.component_137_56), 0, 0, Component.interface_137.component_137_56);
    let int1: number = ifGetWidth(Component.interface_137.component_137_54);
    let int2: number = stringLength(varcstr_1);
    let str0: string = "";

    if (varc_1028 > 0) {
        str0 = subString(varcstr_1, 0, min(varc_1028, int2));
    }
    let int3: number = stringWidth(str0, Graphic.p12_full) - int1;
    ifSetPosition(0, 0, 0, 2, Component.interface_137.component_137_55);
    ifSetSize(max(stringWidth(ifGetText(Component.interface_137.component_137_55), Graphic.p12_full), int1), ifGetHeight(Component.interface_137.component_137_55), 0, 0, Component.interface_137.component_137_55);

    if (int3 > 0) {
        ifSetPosition(ifGetX(Component.interface_137.component_137_55) - int3, 0, 0, 2, Component.interface_137.component_137_55);
        ifSetPosition(ifGetX(Component.interface_137.component_137_56) - int3, 0, 0, 1, Component.interface_137.component_137_56);
    }

    if (stringLength(varcstr_1) <= 0) {
        ifSetHide(true, Component.interface_137.component_137_56);
        ifSetOnTimer(noHook(""), Component.interface_137.component_137_55);
    } else {
        if (appletHasFocus() == 1) {
            ifSetHide(false, Component.interface_137.component_137_56);
        } else {
            ifSetHide(true, Component.interface_137.component_137_56);
        }
        ifSetOnTimer(hook(cs2_1400, "iI", [clientClock(), Component.interface_137.component_137_56]), Component.interface_137.component_137_55);
    }
}
