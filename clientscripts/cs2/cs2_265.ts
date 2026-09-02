/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_265

function cs2_265(): void {
    ifSetHide(true, Component.interface_923.component_923_5);
    ifSetHide(true, Component.interface_923.component_923_0);
    ifSetHide(true, Component.interface_923.component_923_7);
    ifSetHide(true, Component.interface_923.component_923_9);
    ifSetHide(true, Component.interface_923.component_923_11);
    ifSetHide(true, Component.interface_923.component_923_13);
    ifSetHide(true, Component.interface_923.component_923_6);
    ifSetHide(true, Component.interface_923.component_923_1);
    ifSetHide(true, Component.interface_923.component_923_8);
    ifSetHide(true, Component.interface_923.component_923_10);
    ifSetHide(true, Component.interface_923.component_923_12);
    ifSetHide(true, Component.interface_923.component_923_14);
    let str0: string = "Hook: None";

    switch (varc_fishcomp_client_hook) {
        case 2:
            str0 = "Hook: slim";
            ifSetHide(false, Component.interface_923.component_923_6);
            break;
        case 1:
            str0 = "Hook: standard";
            ifSetHide(false, Component.interface_923.component_923_1);
            break;
        case 3:
            str0 = "Hook: large";
            ifSetHide(false, Component.interface_923.component_923_8);
            break;
        case 6:
            str0 = "Hook: double";
            ifSetHide(false, Component.interface_923.component_923_10);
            break;
        case 4:
            str0 = "Hook: bone";
            ifSetHide(false, Component.interface_923.component_923_12);
            break;
        case 5:
            str0 = "Hook: wooden";
            ifSetHide(false, Component.interface_923.component_923_14);
            break;
    }
    ifSetText(str0, Component.interface_923.component_923_103);

    if (varc_fishcomp_client_hook == 0) {
        ifSetOnTimer(hook(cs2_6255, "", []), Component.interface_923.component_923_107);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_923.component_923_107);
        ifSetHide(false, Component.interface_923.component_923_106);
    }
}
