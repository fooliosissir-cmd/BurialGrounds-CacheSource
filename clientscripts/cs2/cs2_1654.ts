/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1654

function cs2_1654(): void {
    if (varc_193 <= clientClock()) {
        varc_193 = clientClock() + 10;
        ifSetOnTimer(hook(cs2_1452, "i", [varc_193]), Component.interface_762.component_762_95);
    }
}
