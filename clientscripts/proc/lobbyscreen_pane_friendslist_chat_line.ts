/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_friendslist_chat_line]

function lobbyscreen_pane_friendslist_chat_line(intArg0: number, strArg0: string, intArg1: number, strArg1: string, strArg2: string, intArg2: number): number {
    let int3: number = ifGetWidth(Component.interface_909.component_909_52);
    let int4: number = max(paraheight(strArg0, int3, Graphic.p11_full), 1) * 15;

    ccCreate(Component.interface_909.component_909_52, 4, intArg0);
    ccSetSize(0, int4, 1, 0);
    ccSetColour(colour(0xFFFFFF));
    ccSetTextFont(Graphic.p11_full);
    ccSetText(strArg0);
    ccSetTextAlign(0, 0, 15);
    let int5: number = 0;
    let int6: number = 0;

    while (int6 < intArg0) {
        if (ccFind<1>(Component.interface_909.component_909_52, int6) == 1) {
            int5 = int5 + ccGetHeight<1>();
        }
        int6 = int6 + 1;
    }
    ccSetPosition(0, int5, 0, 2);
    let str3: string = "";

    if (intArg1 == 1) {
        ccSetOpBase(removetags(strArg1));
        ccSetOnOpt(hook(lobbyscreen_pane_friendslist_chat_op, "iss", [event_opindex, strArg1, strArg2]));
        switch (intArg2) {
            case 3:
            case 6:
            case 7:
            case 18:
                str3 = removetags(strArg2);
                if (compare(removetags(chatPlayerNameUnfiltered()), str3) != 0) {
                    if (friendTest(str3) == 0 && ignoreTest(str3) == 0) {
                        ccSetOp(1, "Add friend");
                        ccSetOp(2, "Add ignore");
                    } else if (friendTest(str3) == 1 && userDetailQuickChat() == 0) {
                        ccSetOp(3, "Message");
                    }
                    if (varbit_snapshot_right_click_enabled == 1 || staffmodlevel() > 0 || playermod() > 0) {
                        ccSetOp(5, "Report");
                    }
                }
                break;
        }
    }
    return intArg0 + 1;
}
