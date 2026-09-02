/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objdialog_close]

function proc_objdialog_close(): void {
    ccDeleteAll(Component.interface_389.component_389_4);
    ifSetHide(false, Component.interface_752.component_752_8);
    ifSetHide(true, Component.interface_752.component_752_3);
    ifSetHide(true, Component.interface_752.component_752_7);
    ifSetOnKey(noHook(""), Component.interface_389.component_389_9);
    ifSetondialogabort(noHook(""), 25493513);
    ifSetOnTimer(noHook(""), Component.interface_389.component_389_9);

    if (getWindowMode() >= 2) {
        proc_subchanged();
    }
}
