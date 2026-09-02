/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_phrase]

function proc_quickchat_phrase(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg2 >= 0) {
        proc_quickchat_return(intArg0, intArg2);
    }
    varc_134 = 0;

    if (chatPhraseGetdynamiccommand(intArg1) > 0) {
        quickchat_phrase_setup(intArg0, intArg1);
    } else {
        quickchat_phrase_send(intArg1);
    }
}
