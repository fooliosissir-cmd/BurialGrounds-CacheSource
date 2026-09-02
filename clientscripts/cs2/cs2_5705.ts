/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5705

function cs2_5705(intArg0: number): void {
    if (varc_1752 == 1) {
        return;
    }

    if (intArg0 == 1) {
        if (ifGetY(Component.interface_1218.component_1218_32) == 0) {
            return;
        } else {
            varc_1752 = 1;
            ifSetOnTimer(hook(cs2_5706, "Ii", [Component.interface_1218.component_1218_32, ifGetY(Component.interface_1218.component_1218_32) + 320]), Component.interface_1218.component_1218_74);
        }
    } else if (ifGetY(Component.interface_1218.component_1218_32) <= -960) {
        return;
    } else {
        varc_1752 = 1;
        ifSetOnTimer(hook(cs2_5706, "Ii", [Component.interface_1218.component_1218_32, ifGetY(Component.interface_1218.component_1218_32) - 320]), Component.interface_1218.component_1218_74);
    }
}
