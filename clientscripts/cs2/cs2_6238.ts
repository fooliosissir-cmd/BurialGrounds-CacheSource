/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6238

function cs2_6238(): void {
    if (varc_qbd2_show_timestop == 1) {
        ifSetHide(false, Component.interface_1285.component_1285_31);
        ifSetHide(false, Component.interface_1285.component_1285_30);
    } else {
        ifSetHide(true, Component.interface_1285.component_1285_31);
        ifSetHide(true, Component.interface_1285.component_1285_30);
    }
}
