/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5358

function cs2_5358(intArg0: number, intArg1: component): void {
    switch (intArg0) {
        case 0:
            intArg0 = 1;
            break;
        case 1:
            intArg0 = 4;
            break;
        case 2:
            intArg0 = 7;
            break;
        case 3:
            intArg0 = 10;
            break;
        case 4:
            intArg0 = 13;
            break;
        default:
            return;
    }

    if (ccFind(intArg1, 1) == 1) {
        ccSetGraphic(Graphic.aif_loyalty_alpha_button_1_0);
        ccSetOnMouseLeave(hook(cs2_5357, "iI", [1, intArg1]));
    }

    if (ccFind(intArg1, 4) == 1) {
        ccSetGraphic(Graphic.aif_loyalty_alpha_button_1_0);
        ccSetOnMouseLeave(hook(cs2_5357, "iI", [4, intArg1]));
    }

    if (ccFind(intArg1, 7) == 1) {
        ccSetGraphic(Graphic.aif_loyalty_alpha_button_1_0);
        ccSetOnMouseLeave(hook(cs2_5357, "iI", [7, intArg1]));
    }

    if (ccFind(intArg1, 10) == 1) {
        ccSetGraphic(Graphic.aif_loyalty_alpha_button_1_0);
        ccSetOnMouseLeave(hook(cs2_5357, "iI", [10, intArg1]));
    }

    if (ccFind(intArg1, 13) == 1) {
        ccSetGraphic(Graphic.aif_loyalty_alpha_button_1_0);
        ccSetOnMouseLeave(hook(cs2_5357, "iI", [13, intArg1]));
    }

    if (ccFind(intArg1, intArg0) == 1) {
        ccSetGraphic(Graphic.aif_loyalty_alpha_button_1_1);
        ccSetOnMouseLeave(noHook(""));
    }
}
