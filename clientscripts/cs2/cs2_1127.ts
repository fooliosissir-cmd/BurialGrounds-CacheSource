/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1127

function cs2_1127(intArg0: component): void {
    let int1: component = -1;
    let str0: string = "";

    switch (intArg0) {
        case Component.interface_192.component_192_2:
            str0 = "Toggle defensive casting.";
            int1 = Component.interface_192.component_192_96;
            break;
        case Component.interface_193.component_193_18:
            str0 = "Toggle defensive casting.";
            int1 = Component.interface_193.component_193_53;
            break;
        case Component.interface_430.component_430_20:
            str0 = "Toggle defensive casting.";
            int1 = Component.interface_430.component_430_65;
            break;
        case Component.interface_950.component_950_2:
            str0 = "Toggle defensive casting.";
            int1 = Component.interface_950.component_950_72;
            break;
    }
    cs2_39(intArg0, int1, str0, 25, ifGetWidth(ifGetLayer(int1)));
}
