/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1745

function cs2_1745(): void {
    if (varc_217 < 1) {
        varc_217 = varc_217 + 1;
        return;
    }
    varc_217 = 0;

    if (varc_216 == 1) {
        varc_215 = varc_215 - 9;
    } else {
        varc_215 = varc_215 + 9;
    }
    varc_215 = min(varc_215, 255);
    varc_215 = max(varc_215, 0);
    ifSetTrans(varc_215, Component.interface_680.component_680_2);
}
