/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clansettings_onload]

function clansettings_onload(): void {
    if (activeClanSettingsFindAffined() == 1) {
        cs2_4291();
    } else {
        ifSetOnClanSettingsTransmit(hook(cs2_4290, "", []), Component.interface_1096.component_1096_146);
    }

    if (varc_1516 == -1) {
        varc_1516 = 0;
    }
}
