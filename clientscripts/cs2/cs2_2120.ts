/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2120

function cs2_2120(intArg0: number, intArg1: component, intArg2: number, intArg3: component, intArg4: component): void {
    if (intArg0 != 1) {
        return;
    }
    let int5: number = 0;

    while (int5 < invSize(307)) {
        if (ccFind(intArg1, int5 * 7) == 1) {
            if (int5 == intArg2) {
                ccSetTrans(100);
            } else {
                ccSetTrans(200);
            }
        }
        int5 = int5 + 1;
    }
    ifSetText("Confirm:" + "<br>" + enumOp(type_int, type_string, Enum.ame_rewards_categories, intArg2), intArg4);
    ccDeleteAll(intArg3);
    let int6: graphic = Graphic.graphic_833;
    int5 = 0;

    while (int5 < invSize(307)) {
        if (int5 == intArg2) {
            ccCreate(intArg3, 5, int5);
            ccSetSize(90, 56, 0, 0);
            ccSetPosition(0, 0, 0, 0);
            ccSetGraphic(int6);
            ccSetHide(false);
            ccSetOnMouseLeave(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int6]));
            int6 = Graphic.graphic_834;
            ccSetOnMouseOver(hook(cc_graphic_swapper, "Iid", [event_com, event_comsubid, int6]));
            ccSetOp(1, "Confirm");
            return;
        } else {
            ccCreate(intArg3, 3, int5);
            ccSetPosition(-1, -1, 0, 0);
            ccSetSize(0, 0, 0, 0);
            ccSetHide(true);
        }
        int5 = int5 + 1;
    }
}
