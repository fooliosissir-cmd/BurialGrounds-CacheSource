/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_tutorial_addtext]

function quickchat_tutorial_addtext(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, strArg0: string, intArg5: colour): void {
    ccCreate(Component.interface_157.component_157_25, 4, intArg0);
    ccSetPosition(intArg1, intArg2, 0, 0);
    ccSetSize(intArg3, intArg4, 0, 0);
    ccSetColour(intArg5);
    ccSetTextShadow(true);
    ccSetTextFont(Graphic.p12_full);
    ccSetText(strArg0);
}
