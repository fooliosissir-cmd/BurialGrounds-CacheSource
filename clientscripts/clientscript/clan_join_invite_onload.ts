/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_join_invite_onload]

function clan_join_invite_onload(): void {
    if (activeClanSettingsFindListened() == 1) {
        cs2_4283();
    } else {
        ifSetOnClanSettingsTransmit(hook(cs2_4282, "", []), Component.interface_1095.component_1095_8);
    }
}
