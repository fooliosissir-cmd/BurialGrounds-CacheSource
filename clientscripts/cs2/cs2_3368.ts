/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3368

function cs2_3368(intArg0: number, intArg1: number, strArg0: string): void {
    if (ccFind(Component.interface_1216.component_1216_3, intArg0) == 1 && stringLength(ccGetText()) == 0 && clientClock() > intArg1) {
        strArg0 = append("New: ", strArg0);
        ccSetText(strArg0);
        ccSetTextFont(Graphic.graphic_3795);
        ccSetTextShadow(true);
        ccSetColour(colour(0xF5B241));
        ccSetTextAlign(1, 1, 15);
    }
    cs2_3370(intArg0, intArg1);
}
