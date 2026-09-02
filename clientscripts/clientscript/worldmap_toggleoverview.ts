/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,worldmap_toggleoverview]

function worldmap_toggleoverview(): void {
    if (ifGetHide(Component.interface_755.component_755_46) == 1) {
        worldmap_showoverview(1);
    } else {
        worldmap_showoverview(0);
    }
}
