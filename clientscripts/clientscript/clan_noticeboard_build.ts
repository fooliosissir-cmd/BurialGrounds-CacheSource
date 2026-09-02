/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_noticeboard_build]

function clientscript_clan_noticeboard_build(intArg0: component): void {
    if (activeClanSettingsFindListened() == 1) {
        proc_clan_noticeboard_build(intArg0);
    }
}
