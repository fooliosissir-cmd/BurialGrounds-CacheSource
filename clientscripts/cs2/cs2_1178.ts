/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1178

function cs2_1178(): void {
    varc_548 = max(0, varc_548 - 1);
    ifSetText(tostring(varc_548 * 2 / 100), Component.interface_745.component_745_5);

    if (varc_548 <= 0) {
        ifSetOnTimer(noHook(""), Component.interface_745.component_745_5);
    }
}
