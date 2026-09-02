/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_phrase_setup]

function quickchat_phrase_setup(intArg0: component, intArg1: number): void {
    let int2: number = chatPhraseGetdynamiccommand(intArg1);
    let int3: number = 0;

    if (int2 > 0) {
        while (varc_134 < int2 && varc_134 < 10) {
            int3 = chatPhraseGetdynamiccommandparamEnum(intArg1, varc_134);
            if (int3 == 0) {
                quickchat_phrase_listdialog(intArg1);
                return;
            }
            if (int3 == 1) {
                quickchat_phrase_objdialog(intArg1, 0);
                return;
            }
            if (int3 == 10) {
                quickchat_phrase_objdialog(intArg1, 1);
                return;
            }
            if (int3 == 2) {
                quickchat_phrase_countdialog(intArg1);
                return;
            }
            varc_134 = varc_134 + 1;
        }
    }
    quickchat_phrase_send(intArg1);
}
