/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3219

function cs2_3219(intArg0: number, intArg1: component, intArg2: number): void {
    if (varc_loginscreen_focus == intArg2 && (clientClock() - intArg0) % 40 < 20 && createReply() != -3 && createEmailValidateReply() != -3 && createConnectReply() != -3 && appletHasFocus() == 1) {
        ifSetHide(false, intArg1);
    } else {
        ifSetHide(true, intArg1);
    }
}
