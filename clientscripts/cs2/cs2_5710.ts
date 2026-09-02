/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5710

function cs2_5710(intArg0: number, intArg1: number): void {
    ifSetHide(true, Component.interface_1218.component_1218_161);
    varc_1754 = intArg1;

    if (ccFind(Component.interface_1218.component_1218_161, intArg1) == 1) {
        ifSetText(ccGetText(), Component.interface_1218.component_1218_172);
    }
    skillguide_skill_refresh(intArg0);
}
