/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1475

function cs2_1475(): void {
    varcstr_138 = varcstr_meslayerinput;

    if (clientClock() > varc_191) {
        cs2_1479(varcstr_138);
        ifSetOnTimer(noHook(""), Component.interface_762.component_762_17);
        varc_191 = clientClock() + 10;
    } else {
        ifSetOnTimer(hook(cs2_1476, "i", [varc_191]), Component.interface_762.component_762_17);
    }
}
