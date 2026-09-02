/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,cc_add_text]

function cc_add_text(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, strArg0: string, intArg6: colour, intArg7: graphic, intArg8: number, intArg9: number, intArg10: number, intArg11: boolean): void {
    ccCreate(intArg0, 4, intArg1);
    ccSetSize(intArg2, intArg3, 0, 0);
    ccSetPosition(intArg4, intArg5, 0, 0);
    ccSetText(strArg0);
    ccSetColour(intArg6);
    ccSetTextFont(intArg7);
    ccSetTextAlign(intArg8, intArg9, intArg10);
    ccSetTextShadow(intArg11);
}
