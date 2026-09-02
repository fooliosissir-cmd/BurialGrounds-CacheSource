/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1947

function cs2_1947(): void {
    if (varc_600 < 1 && varc_603 < 1) {
        mes("The awards tab is not available for this scoring.");
    } else {
        ifSetHide(true, Component.interface_810.component_810_84);
        ifSetHide(false, Component.interface_810.component_810_85);
        ifSetHide(true, Component.interface_810.component_810_86);
        ifSetHide(false, Component.interface_810.component_810_144);
    }
}
