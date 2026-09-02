/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_objdialog_refreshsearch]

function quickchat_objdialog_refreshsearch(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    ccDeleteAll(intArg1);

    if (stringLength(varcstr_30) > 0) {
        quickchat_objdialog_dosearch(intArg0, intArg1, intArg2, intArg3);
    } else {
        ifSetScrollSize(0, 0, intArg1);
        quickchat_objdialog_doscrollbar(intArg1, intArg2);
    }
}
