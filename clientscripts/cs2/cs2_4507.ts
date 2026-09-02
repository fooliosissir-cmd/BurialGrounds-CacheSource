/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4507

function cs2_4507(intArg0: number, intArg1: component, intArg2: component): void {
    let str0: string = "";

    if (ccFind(intArg1, intArg0) == 1) {
        str0 = ccGetText();
    }
    ccDeleteAll(intArg2);
    ccCreate(intArg2, 4, ifGetNextSubId(intArg2));
    ccSetText(str0);

    if (intArg2 == Component.interface_190.component_190_27) {
        ccSetTextFont(Graphic.p11_full);
    } else {
        ccSetTextFont(Graphic.verdana_11pt_regular);
    }
    ccSetPosition(5, 0, 0, 1);
    ccSetSize(5, 16384, 1, 2);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xEFB063));
}
