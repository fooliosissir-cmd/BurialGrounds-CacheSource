/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5616

function cs2_5616(): void {
    if (varbit_fmc_wave == 0) {
        ifSetSize(0, ifGetHeight(Component.interface_1198.component_1198_3), 0, 0, Component.interface_1198.component_1198_3);
    } else {
        switch (varbit_fmc_wave) {
            case 1:
                ifSetOnTimer(hook(cs2_5617, "i", [ifGetWidth(Component.interface_1198.component_1198_10) / 4]), Component.interface_1198.component_1198_10);
                break;
            case 2:
                ifSetOnTimer(hook(cs2_5617, "i", [ifGetWidth(Component.interface_1198.component_1198_10) / 2]), Component.interface_1198.component_1198_10);
                break;
            case 3:
                ifSetOnTimer(hook(cs2_5617, "i", [ifGetWidth(Component.interface_1198.component_1198_10) / 4 * 3]), Component.interface_1198.component_1198_10);
                break;
            case 4:
                ifSetOnTimer(hook(cs2_5617, "i", [ifGetWidth(Component.interface_1198.component_1198_10)]), Component.interface_1198.component_1198_10);
                break;
        }
    }
}
