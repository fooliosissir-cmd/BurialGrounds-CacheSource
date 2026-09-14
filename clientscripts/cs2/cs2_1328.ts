/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1328

function cs2_1328(intArg0: number): void {
    if (ifGetHide(Component.interface_906.component_906_56) == 0 || ifGetHide(Component.interface_906.component_906_57) == 0 || ifGetHide(Component.interface_906.component_906_58) == 0 || ifGetHide(Component.interface_906.component_906_44) == 0 || ifGetHide(Component.interface_906.component_906_60) == 0 || ifGetHide(Component.interface_906.component_906_70) == 0 || ifGetHide(Component.interface_906.component_906_71) == 0) {
        return;
    }
    let int1: number = -1;

    if (intArg0 == 80) {
        if (ifGetHide(Component.interface_906.component_906_208) == 0) {
            int1 = 0;
        }
        if (ifGetHide(Component.interface_906.component_906_209) == 0) {
            int1 = 1;
        }
        if (ifGetHide(Component.interface_906.component_906_210) == 0) {
            int1 = 2;
        }
        if (ifGetHide(Component.interface_906.component_906_211) == 0) {
            int1 = 3;
        }
        if (ifGetHide(Component.interface_906.component_906_212) == 0) {
            int1 = 5;
        }
        if (ifGetHide(Component.interface_906.component_906_213) == 0) {
            int1 = 4;
        }
        if (keyheldShift() == 0) {
            switch (int1) {
                case 0:
                    proc_lobbyscreen_tabswitch(1);
                    return;
                case 1:
                    proc_lobbyscreen_tabswitch(2);
                    return;
                case 2:
                    proc_lobbyscreen_tabswitch(3);
                    return;
                case 3:
                    proc_lobbyscreen_tabswitch(5);
                    return;
                case 5:
                    proc_lobbyscreen_tabswitch(4);
                    return;
                case 4:
                    proc_lobbyscreen_tabswitch(0);
                    return;
                default:
                    proc_lobbyscreen_tabswitch(0);
                    return;
            }
        } else {
            switch (int1) {
                case 0:
                    proc_lobbyscreen_tabswitch(4);
                    return;
                case 1:
                    proc_lobbyscreen_tabswitch(0);
                    return;
                case 2:
                    proc_lobbyscreen_tabswitch(1);
                    return;
                case 3:
                    proc_lobbyscreen_tabswitch(2);
                    return;
                case 5:
                    proc_lobbyscreen_tabswitch(3);
                    return;
                case 4:
                    proc_lobbyscreen_tabswitch(5);
                    return;
                default:
                    proc_lobbyscreen_tabswitch(0);
                    return;
            }
        }
    }
    let int2: number = 0;
    let str0: string = "";
    let str1: string = "";

    if (intArg0 == 84 && ifGetHide(Component.interface_906.component_906_210) == 0) {
        if (stringLength(varcstr_276) > 0) {
            int2 = friendGetSlotFromName(varcstr_276);
            if (int2 != -1 && userDetailQuickChat() == 0) {
                [str0, str1] = friendGetName(int2);
                lobbyscreen_input("Send message to " + str0, "", 0, varcstr_276, "");
                return;
            }
            if (varc_1271 > clientClock() - 100) {
                return;
            }
            mes("That player is not on your Friends list.");
            varc_1271 = clientClock();
            return;
        }
        if (varc_1271 > clientClock() - 100) {
            return;
        }
        mes("You haven't received any messages to which you can reply.");
        varc_1271 = clientClock();
        return;
    }
}
