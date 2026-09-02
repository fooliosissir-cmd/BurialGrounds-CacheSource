/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objdialog_refreshsearch]

function objdialog_refreshsearch(): void {
    ifSetObject(-1, -1, Component.interface_389.component_389_15);
    ccDeleteAll(Component.interface_389.component_389_4);

    if (stringLength(varcstr_meslayerinput) > 0) {
        ifSetHide(true, Component.interface_389.component_389_5);
        objdialog_dosearch(varcstr_meslayerinput);
    } else {
        ifSetHide(false, Component.interface_389.component_389_5);
        ifSetScrollSize(0, 15, Component.interface_389.component_389_4);
        objdialog_doscrollbar();
    }
}
