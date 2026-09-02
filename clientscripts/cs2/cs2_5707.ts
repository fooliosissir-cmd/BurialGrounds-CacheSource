/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5707

function cs2_5707(): void {
    if (varc_skillguide_skill_clicked > 0 && ifGetHide(Component.interface_1218.component_1218_161) == 1) {
        ifSetHide(false, Component.interface_1218.component_1218_161);
    } else {
        ifSetHide(true, Component.interface_1218.component_1218_161);
    }
}
