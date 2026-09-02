/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_varc_update]

function meslayer_varc_update(): void {
    if (varc_meslayermode == 0) {
        proc_meslayer_close(0);
    }
}
