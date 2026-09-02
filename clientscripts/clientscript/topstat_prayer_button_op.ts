/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,topstat_prayer_button_op]

function topstat_prayer_button_op(intArg0: number): void {
    if (intArg0 != 1) {
        return;
    }

    if (varp_topstat_prayer == 0) {
        return;
    }

    if (bool_to_int(varc_182) == 1) {
        varc_182 = false;
    } else {
        varc_182 = true;
    }
    proc_topstat_prayer_button_update();
}
