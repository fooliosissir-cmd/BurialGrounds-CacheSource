/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,instance_system_stepper]

function instance_system_stepper(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, strArg0: string): void {
    ccCreate(intArg0, 5, ifGetNextSubId(intArg0));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(intArg1, intArg2, 0, 0);
    ccSetGraphic(intArg3);
    ccSetOp(intArg4, strArg0);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetSize(26, 26, 0, 0);
    ccSetPosition(intArg1, intArg2 - 3, 0, 0);
    ccSetTextFont(Graphic.verdana_11pt_regular);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0xEBE0BC));
    ccSetText(strArg0);
    ccSetOp(intArg4, strArg0);
}
