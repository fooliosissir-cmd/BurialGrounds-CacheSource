/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4030

function cs2_4030(): void {
    createConnectrequest();

    if (stringLength(createGetEmail()) > 0) {
        proc_create_focus(7, 1);
    } else {
        proc_create_focus(6, 1);
    }
    varc_1089 = -1;
    create_please_wait(1);
    ifSetOnTimer(hook(cs2_5633, "", []), Component.interface_673.component_673_26);
}
