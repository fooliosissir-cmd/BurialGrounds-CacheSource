/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_ondialogabort]

function meslayer_ondialogabort(): void {
    switch (varc_meslayermode) {
        case 7:
            proc_meslayer_close(7);
            break;
        case 8:
            proc_meslayer_close(8);
            break;
        case 9:
            proc_meslayer_close(9);
            break;
        case 13:
            proc_meslayer_close(13);
            break;
        default:
            if (getWindowMode() >= 2) {
                proc_subchanged();
            }
            break;
    }
}
