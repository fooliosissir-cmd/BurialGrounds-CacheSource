/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,objdialog_onkey]

function objdialog_onkey(intArg0: number, intArg1: number): void {
    if (intArg0 == 84) {
        varc_objdialog_timer = 0;
        ifSetOnTimer(noHook(""), Component.interface_389.component_389_9);
        objdialog_refreshsearch();
        return;
    }
    let str0: string = add_to_inputstring(varcstr_meslayerinput, 0, intArg0, intArg1);

    if (compare(varcstr_meslayerinput, str0) == 0) {
        return;
    }
    varcstr_meslayerinput = str0;
    ifSetText(escape(varcstr_meslayerinput) + "*", Component.interface_389.component_389_9);
    varc_objdialog_timer = 50;
    ifSetOnTimer(hook(objdialog_delay_timer, "", []), Component.interface_389.component_389_9);
}
