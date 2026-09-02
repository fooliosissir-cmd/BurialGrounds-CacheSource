/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_info_load]

function clan_info_load(): void {
    if (activeClanSettingsFindListened() == 1) {
        cs2_4415();
    } else {
        ifSetOnClanSettingsTransmit(hook(cs2_4414, "", []), Component.interface_1107.component_1107_152);
    }
}
