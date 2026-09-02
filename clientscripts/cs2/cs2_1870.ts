/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1870

function cs2_1870(intArg0: component): void {
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = reboottimer();
    let str0: string = "0";

    if (int3 > 0) {
        int1 = int3 / 50 % 60;
        int2 = int3 / 3000;
        if (int1 < 10) {
            str0 = "System update in: " + tostring(int2) + ":0" + tostring(int1);
        } else {
            str0 = "System update in: " + tostring(int2) + ":" + tostring(int1);
        }
        ifSetText(str0, intArg0);
        if (stringLength(str0) > 0) {
            ifSetSize(stringWidth("System update in: ", Graphic.p11_full) + 40, ifGetHeight(Component.interface_906.component_906_45), 0, 0, Component.interface_906.component_906_45);
            ifSetHide(false, Component.interface_906.component_906_45);
        } else {
            ifSetHide(true, Component.interface_906.component_906_45);
        }
    } else {
        ifSetOnTimer(noHook(""), intArg0);
    }
}
