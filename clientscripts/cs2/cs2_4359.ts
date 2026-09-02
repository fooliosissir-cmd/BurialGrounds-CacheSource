/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4359

function cs2_4359(intArg0: component): void {
    if (activeClanSettingsFindListened() == 1) {
        proc_clan_noticeboard_build(intArg0);
    } else {
        ifSetOnClanSettingsTransmit(hook(clientscript_clan_noticeboard_build, "I", [intArg0]), intArg0);
    }
}
