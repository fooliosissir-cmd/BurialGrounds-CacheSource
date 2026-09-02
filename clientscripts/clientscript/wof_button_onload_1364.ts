/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,wof_button_onload_1364]

function wof_button_onload_1364(intArg0: number): number {
    if (activeClanSettingsFindAffined() == 1) {
        return cs2_5962(intArg0);
    }
    return 0;
}
