/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5478

function cs2_5478(): void {
    varc_dom_bottombar_zpos = varc_dom_bottombar_zpos + 1;

    if (varc_dom_bottombar_zpos < 0) {
        ifSetPosition(0, varc_dom_bottombar_zpos, 1, 2, Component.interface_1163.component_1163_89);
    } else {
        ifSetPosition(0, 0, 1, 2, Component.interface_1163.component_1163_89);
        ifSetOnTimer(noHook(""), Component.interface_1163.component_1163_45);
    }
}
