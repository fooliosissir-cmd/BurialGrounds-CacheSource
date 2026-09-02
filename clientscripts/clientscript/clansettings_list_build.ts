/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clansettings_list_build]

function clientscript_clansettings_list_build(): void {
    if (activeClanSettingsFindAffined() == 1) {
        proc_clansettings_list_build();
    }
}
