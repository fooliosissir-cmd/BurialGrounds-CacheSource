/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_qfc_return]

function proc_clan_qfc_return(intArg0: number): void {
    if (intArg0 == 1) {
        resumeClanforumqfcdialog(varcstr_qfc_input_varc);
    } else {
        resumeClanforumqfcdialog("");
    }
}
