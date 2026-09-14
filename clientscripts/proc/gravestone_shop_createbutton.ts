/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,gravestone_shop_createbutton]

function gravestone_shop_createbutton(intArg0: component, intArg1: graphic, intArg2: number, intArg3: component, intArg4: component, intArg5: component, intArg6: component): void {
    let int7: number = (ifGetWidth(intArg0) - 164) / 2;
    let int8: number = int7 + (146 + int7) * intArg2;

    ccCreate(intArg0, 3, intArg2 * 6);
    ccSetSize(164, 146, 0, 0);
    ccSetPosition(int7, int8, 0, 0);

    if (varbit_gravestone_type == intArg1) {
        ccSetColour(colour(0x7F0000));
    } else {
        ccSetColour(colour(0x000000));
    }
    ccSetTrans(200);
    ccSetfill(true);
    ccSetOp(1, "Choose");
    ccSetOpBase("<col=ff9040>" + enumOp(type_int, type_string, Enum.gravestone_name, intArg1) + "</col>");
    ccSetOnOp(hook(gravestone_shop_select, "iIiIIII", [intArg1, intArg0, event_comsubid, intArg3, intArg4, intArg5, intArg6]));
    ccCreate(intArg0, 6, intArg2 * 6 + 1);
    ccSetSize(164, 146, 0, 0);
    ccSetPosition(int7, int8, 0, 0);
    gravestone_shop_model(intArg1);
    ccCreate(intArg0, 5, intArg2 * 6 + 2);
    ccSetSize(165, 32, 0, 0);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_1074);
    ccSetPosition(int7, int8 - 17, 0, 0);
    ccCreate(intArg0, 5, intArg2 * 6 + 3);
    ccSetSize(165, 32, 0, 0);
    ccSettiling(true);
    ccSetvflip(true);
    ccSetGraphic(Graphic.graphic_1074);
    ccSetPosition(int7, int8 + 130, 0, 0);
    ccCreate(intArg0, 5, intArg2 * 6 + 4);
    ccSetSize(32, 144, 0, 0);
    ccSettiling(true);
    ccSetGraphic(Graphic.graphic_1075);
    ccSetPosition(int7 - 14, int8 + 1, 0, 0);
    ccCreate(intArg0, 5, intArg2 * 6 + 5);
    ccSetSize(32, 144, 0, 0);
    ccSettiling(true);
    ccSethflip(true);
    ccSetGraphic(Graphic.graphic_1075);
    ccSetPosition(int7 + 147, int8 + 1, 0, 0);
}
