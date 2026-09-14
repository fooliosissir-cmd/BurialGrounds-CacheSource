/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4634

function cs2_4634(intArg0: number): void {
    if (createConnectReply() == 2) {
        lobbyLeaveLobby();
    }
    let int1: number = -1;
    proc_loginscreen_setactivemenu(11);

    switch (intArg0) {
        case 1:
            int1 = 0;
            break;
    }
    varc_login_reply_last = -1;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    varc_loginscreen_hopblocked_time = 0;
    varc_201 = 0;
    let int6: component = Component.interface_596.component_596_58;
    let int7: component = Component.interface_596.component_596_44;

    if (hasSignonKey() == 1) {
        int6 = Component.interface_975.component_975_49;
        int7 = Component.interface_975.component_975_44;
    }
    ifSetText("Logging in...", int6);
    ifSetOnClick(noHook(""), int7);
    login_popup(-3, 0, "Logging In - Please Wait", 1, -1, 1, 1, "Abort Login", 0, "");
    ifSetOnClick(hook(cs2_4635, "", []), Component.interface_596.component_596_14);
    ifSetHide(false, Component.interface_596.component_596_8);
    varc_login_reply_last = -3;
    lobbyEnterLobbySocialNetwork(int1);

    if (hasSignonKey() == 1) {
        ifSetOnTimer(hook(login_reply, "i", [intArg0]), Component.interface_975.component_975_26);
    } else {
        ifSetOnTimer(hook(login_reply, "i", [intArg0]), Component.interface_596.component_596_6);
    }
}
