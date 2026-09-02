/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wof_button_onload]

function wof_button_onload(): void {
    let int0: component = Component.interface_1252.component_1252_0;
    let int1: component = Component.interface_1252.component_1252_2;
    let int2: number = max(1, ifGetWidth(int1));
    let int3: number = max(1, ifGetHeight(int1));

    varc_1787 = max(varc_1787, -1);
    varc_1788 = max(varc_1788, -1);

    if (varc_1787 == -1 && varc_1788 == -1) {
        varc_1787 = int2 / 2;
        varc_1788 = int3 / 2;
    }
    varc_1787 = min(varc_1787, int2 - ifGetWidth(int0));
    varc_1788 = min(varc_1788, int2 - ifGetHeight(int0) + 79);
    ifSetOnResize(hook(cs2_5944, "", []), int1);
    cs2_5945(varc_1787, varc_1788);
}
