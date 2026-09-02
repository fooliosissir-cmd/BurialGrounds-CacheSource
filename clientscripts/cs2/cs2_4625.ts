/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4625

function cs2_4625(): void {
    if (compare(varcstr_last_guestclanchannel, "") != 0 && compare(varcstr_last_guestclanchannel, "null") != 0) {
        varcstr_stringdialog_suggested_string = varcstr_last_guestclanchannel;
    } else {
        varcstr_stringdialog_suggested_string = "";
    }
}
