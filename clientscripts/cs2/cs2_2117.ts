/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2117

function cs2_2117(intArg0: number, intArg1: number, intArg2: number, intArg3: component, intArg4: component, intArg5: component): void {
    let int6: number = intArg2 + intArg1 / 2 * (64 + intArg2);
    let int7: number = intArg2 + intArg1 % 2 * (160 + intArg2);

    ccCreate(intArg3, 3, intArg0 * 7);
    ccSetSize(160, 64, 0, 0);
    ccSetPosition(int7, int6, 0, 0);
    ccSetColour(colour(0x000000));
    ccSetTrans(200);
    ccSetfill(true);
    ccSetOp(1, "Choose");

    if (intArg0 == 26) {
        ccSetOp(10, "Explain");
        ccSetOpBase("<col=ff9040>" + "Emote" + "</col>");
    } else if (intArg0 == 27) {
        ccSetOp(10, "Explain");
        ccSetOpBase("<col=ff9040>" + "Costume point" + "</col>");
    } else {
        ccSetOp(10, "Examine");
        ccSetOpBase("<col=ff9040>" + ocName(invGetobj(307, intArg0)) + "</col>");
    }
    ccSetOnOpt(hook(cs2_2120, "iIiII", [event_opindex, intArg3, intArg0, intArg4, intArg5]));
    ccCreate(intArg3, 5, intArg0 * 7 + 1);
    ccSetSize(159, 32, 0, 0);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_1074);
    ccSetPosition(int7, int6 - 17, 0, 0);
    ccCreate(intArg3, 5, intArg0 * 7 + 2);
    ccSetSize(160, 32, 0, 0);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_1074);
    ccSetvflip(true);
    ccSetPosition(int7, int6 + 49, 0, 0);
    ccCreate(intArg3, 5, intArg0 * 7 + 3);
    ccSetSize(32, 63, 0, 0);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_1075);
    ccSetPosition(int7 - 14, int6, 0, 0);
    ccCreate(intArg3, 5, intArg0 * 7 + 4);
    ccSetSize(32, 63, 0, 0);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_1075);
    ccSethflip(true);
    ccSetPosition(int7 + 142, int6, 0, 0);
    ccCreate(intArg3, 5, intArg0 * 7 + 5);

    if (intArg0 == 26) {
        ccSetSize(22, 22, 0, 0);
        ccSetPosition(int7 + 15, int6 + 20, 0, 0);
        ccSetOutline(0);
        ccSetGraphic(gameframe_skin_graphic(Graphic.stonemenusideicons_13));
    } else if (intArg0 == 27) {
        ccSetSize(42, 42, 0, 0);
        ccSetPosition(int7 + 5, int6 + 12, 0, 0);
        ccSetOutline(0);
        ccSetGraphic(Graphic.player_kit_fancy_0);
    } else {
        ccSetSize(36, 32, 0, 0);
        ccSetPosition(int7 + 8, int6 + 16, 0, 0);
        ccSetOutline(1);
        ccSetGraphicShadow(3153952);
        if (invGetNum(307, intArg0) > 1 && ocStackable(invGetobj(307, intArg0)) == 1) {
            ccSetObject(invGetobj(307, intArg0), invGetNum(307, intArg0));
        } else {
            ccSetObject(invGetobj(307, intArg0), -1);
        }
    }
    ccCreate<1>(intArg3, 4, intArg0 * 7 + 6);
    ccSetTextFont<1>(Graphic.b12_full);
    ccSetColour<1>(colour(0xFF981F));
    ccSetTextAlign<1>(1, 1, 0);
    ccSetSize<1>(160 - (ccGetX() - int7 + ccGetWidth() + 4), 64, 0, 0);
    ccSetPosition<1>(int7 + 160 - ccGetWidth<1>() - 2, int6, 0, 0);

    if (intArg0 == 26) {
        ccSetText<1>("Unlock emote!");
    } else if (intArg0 == 27) {
        ccSetText<1>("Save up for a costume!");
    } else if (invGetNum(307, intArg0) == 1) {
        ccSetText<1>(enumOp(type_int, type_string, Enum.ame_rewards_categories, intArg0) + ":" + "<br>" + ocName(invGetobj(307, intArg0)));
    } else {
        ccSetText<1>(enumOp(type_int, type_string, Enum.ame_rewards_categories, intArg0) + ":" + "<br>" + tostring(invGetNum(307, intArg0)) + " x " + ocName(invGetobj(307, intArg0)));
    }
}
