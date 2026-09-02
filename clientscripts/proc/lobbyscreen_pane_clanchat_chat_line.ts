/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobbyscreen_pane_clanchat_chat_line]

function lobbyscreen_pane_clanchat_chat_line(intArg0: number, strArg0: string, intArg1: number, strArg1: string, strArg2: string, intArg2: number): number {
    let int3: number = ifGetWidth(Component.interface_912.component_912_20);
    let int4: number = max(paraheight(strArg0, int3, Graphic.p11_full), 1) * 15;

    ccCreate(Component.interface_912.component_912_20, 4, intArg0);
    ccSetPosition(0, intArg0 * 15, 0, 2);
    ccSetSize(0, int4, 1, 0);
    ccSetColour(colour(0xFFFFFF));
    ccSetTextFont(Graphic.p11_full);
    ccSetText(strArg0);
    ccSetTextAlign(0, 0, 15);
    let int5: number = 0;
    let int6: number = 0;

    while (int6 < intArg0) {
        if (ccFind<1>(Component.interface_912.component_912_20, int6) == 1) {
            int5 = int5 + ccGetHeight<1>();
        }
        int6 = int6 + 1;
    }
    ccSetPosition(0, int5, 0, 2);

    if (intArg1 == 1) {
        ccSetOpBase(removetags(strArg1));
        ccSetOnOpt(hook(lobbyscreen_pane_clanchat_chat_op, "iss", [event_opindex, strArg1, strArg2]));
        switch (intArg2) {
            case 41:
            case 42:
            case 44:
            case 45:
            case 9:
            case 20:
                if (compare(removetags(chatPlayerNameUnfiltered()), removetags(strArg2)) != 0) {
                    if (friendTest(removetags(strArg2)) == 0 && ignoreTest(removetags(strArg2)) == 0) {
                        ccSetOp(1, "Add friend");
                        ccSetOp(2, "Add ignore");
                    } else if (friendTest(removetags(strArg2)) == 1 && userDetailQuickChat() == 0) {
                        ccSetOp(3, "Message");
                    }
                    if (varbit_snapshot_right_click_enabled == 1 || staffmodlevel() > 0 || playermod() > 0) {
                        ccSetOp(5, "Report");
                    }
                    if (cs2_4467() == 1) {
                        ccSetOp(10, "Kick/ban");
                    }
                }
                break;
        }
    }
    return intArg0 + 1;
}
