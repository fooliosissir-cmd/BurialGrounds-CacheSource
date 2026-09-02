/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_tutorial_showpage]

function proc_quickchat_tutorial_showpage(intArg0: Enum, intArg1: number, intArg2: number): void {
    ifSetScrollPos(0, 0, Component.interface_157.component_157_25);
    ccDeleteAll(Component.interface_157.component_157_24);
    ifSetHide(false, Component.interface_157.component_157_17);
    ifSetHide(false, Component.interface_157.component_157_35);
    ifSetOnClick(hook(cs2_1028, "", []), Component.interface_157.component_157_30);
    ifSetText("Shortcut keys", Component.interface_157.component_157_30);
    ccDeleteAll(Component.interface_157.component_157_23);
    ccDeleteAll(Component.interface_157.component_157_25);
    quickchat_tutorial_displaydata(enumOp(type_int, type_string, intArg0, intArg1));
    ifSetText("Page " + tostring(intArg1 + 1) + " of " + tostring(intArg2), Component.interface_157.component_157_20);
    let int3: number = intArg1 + 1;
    let int4: number = intArg1 - 1;

    if (intArg1 != intArg2 - 1) {
        ifSetOnClick(hook(clientscript_quickchat_tutorial_showpage, "gii", [intArg0, int3, intArg2]), Component.interface_157.component_157_21);
        ifSetTrans(0, Component.interface_157.component_157_21);
    } else {
        ifSetOnClick(noHook(""), Component.interface_157.component_157_21);
        ifSetTrans(200, Component.interface_157.component_157_21);
    }

    if (intArg1 != 0) {
        ifSetOnClick(hook(clientscript_quickchat_tutorial_showpage, "gii", [intArg0, int4, intArg2]), Component.interface_157.component_157_22);
        ifSetTrans(0, Component.interface_157.component_157_22);
    } else {
        ifSetOnClick(noHook(""), Component.interface_157.component_157_22);
        ifSetTrans(200, Component.interface_157.component_157_22);
    }
}
