/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_652

function cs2_652(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: component, intArg6: number, intArg7: component, intArg8: number): void {
    ccCreate(intArg5, 3, intArg6);
    ccSetPosition(intArg0, intArg1, 0, 0);
    ccSetSize(intArg2, intArg3, 0, 0);
    ccSetColour(colour(0x000000));
    ccSetfill(false);
    let str0: string = "null";

    if (stockmarketIsofferempty(intArg4) == 0) {
        if (stockmarketIsofferfinished(intArg4) == 1) {
            if (stockmarketGetoffercompletedcount(intArg4) == stockmarketGetoffercount(intArg4)) {
                str0 = "Completed";
            } else {
                str0 = "Aborted";
            }
        } else {
            str0 = "In progress";
        }
        if (intArg7 != -1) {
            if (intArg8 == 1) {
                ccSetOnMouseOver(hook(cs2_648, "IiIsii", [intArg5, intArg6, intArg7, str0, 25, 106]));
            } else if (intArg8 == 2) {
                ccSetOnMouseOver(hook(cs2_649, "IIsii", [intArg5, intArg7, str0, 25, 106]));
            } else {
                ccSetOnMouseOver(hook(cs2_568, "IiIsii", [intArg5, intArg6, intArg7, str0, 25, 106]));
            }
            ccHookMouseExit(hook(clientscript_deltooltip, "I", [intArg7]));
        }
    }
    let int9: number = intArg0 + 1;
    let int10: number = intArg1 + 1;
    let int11: number = intArg2 - 2;
    let int12: number = intArg3 - 2;
    ccCreate(intArg5, 3, intArg6 + 1);
    ccSetPosition(int9, int10, 0, 0);
    ccSetSize(int11, int12, 0, 0);
    ccSetColour(colour(0x302520));
    ccSetTrans(100);
    ccSetfill(true);
    ccCreate(intArg5, 3, intArg6 + 2);

    if (stockmarketIsofferempty(intArg4) == 0) {
        ccSetPosition(intArg0 + 1, intArg1 + 1, 0, 0);
        ccSetTrans(0);
        ccSetfill(true);
        if (stockmarketIsofferfinished(intArg4) == 1) {
            ccSetSize(int11, int12, 0, 0);
            if (stockmarketGetoffercompletedcount(intArg4) == stockmarketGetoffercount(intArg4)) {
                ccSetColour(colour(0x3F821E));
            } else {
                ccSetColour(colour(0x8A0010));
            }
        } else {
            ccSetSize(scale(stockmarketGetoffercompletedcount(intArg4), stockmarketGetoffercount(intArg4), int11), int12, 0, 0);
            ccSetColour(colour(0xC68B01));
        }
    }
    ccCreate(intArg5, 3, intArg6 + 3);
    ccSetPosition(int9, int10, 0, 0);
    ccSetSize(int11, 3, 0, 0);
    ccSetfill(true);
    ccSetTrans(200);
    ccSetColour(colour(0x000000));
    ccCreate(intArg5, 3, intArg6 + 4);
    ccSetPosition(int9, int10 + 3, 0, 0);
    ccSetSize(3, int12 - 3, 0, 0);
    ccSetfill(true);
    ccSetTrans(200);
    ccSetColour(colour(0x000000));
}
