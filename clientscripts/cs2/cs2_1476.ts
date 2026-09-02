/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1476

function cs2_1476(intArg0: number): void {
    if (clientClock() >= intArg0) {
        if (varc_meslayermode == 11) {
            cs2_1479(varcstr_138);
        }
        ifSetOnTimer(noHook(""), Component.interface_762.component_762_17);
    }
}
