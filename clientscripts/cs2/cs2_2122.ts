/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2122

function cs2_2122(strArg0: string, intArg0: number, intArg1: component): void {
    let int2: number = intArg0 / 10 * 64;

    ccCreate(intArg1, 4, intArg0 - 1);
    ccSetSize(ifGetWidth(intArg1) - 10, 17, 0, 0);
    ccSetPosition(5, int2 + 2, 0, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(0, 0, 0);
    ccSetColour(colour(0xFF981F));
    ccSetText(strArg0);
    let int3: number = 0;

    while (int3 < 7) {
        cs2_2123(intArg0 + int3, int3, intArg1, int2);
        int3 = int3 + 1;
    }
    ccCreate(intArg1, 4, intArg0 + 7);
    ccSetSize(100, 64, 0, 0);
    ccSetPosition(ifGetWidth(intArg1) - 100, int2, 0, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0xFF981F));

    switch (intArg0) {
        case 1:
            ccSetText("Points:" + "<br>" + tostring(varbit_ame_rewards_mime));
            break;
        case 11:
            ccSetText("Points:" + "<br>" + tostring(varbit_ame_rewards_frog));
            break;
        case 21:
            ccSetText("Points:" + "<br>" + tostring(varbit_ame_rewards_gravedigger));
            break;
        case 31:
            ccSetText("Points:" + "<br>" + tostring(varbit_ame_rewards_drilldemon));
            break;
        case 41:
            ccSetText("Points:" + "<br>" + tostring(varbit_ame_rewards_freakyforester));
            break;
        default:
            ccSetText("");
            break;
    }

    if (intArg0 + 10 < 43) {
        ccCreate(intArg1, 5, intArg0 + 8);
        ccSetGraphic(Graphic.graphic_962);
        ccSetSize(ifGetWidth(intArg1), 32, 0, 0);
        ccSettiling(true);
        ccSetPosition(0, int2 + 58, 0, 0);
    }
}
