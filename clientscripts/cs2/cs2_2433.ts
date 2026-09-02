/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2433

function cs2_2433(): void {
    if (cs2_1431() == 0 || compare(varcstr_148, "null") == 0) {
        return;
    }

    if (getWindowMode() < 2) {
        ifSetText(varcstr_148, Component.interface_548.component_548_31);
    } else {
        ifSetText(varcstr_148, Component.interface_746.component_746_184);
    }
}
