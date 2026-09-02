/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4501

function cs2_4501(intArg0: component, strArg0: string): void {
    ccDeleteAll(intArg0);
    ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
    ccSetText(strArg0);

    if (intArg0 == Component.interface_190.component_190_27) {
        ccSetTextFont(Graphic.p11_full);
    } else {
        ccSetTextFont(Graphic.verdana_11pt_regular);
    }
    ccSetPosition(5, 0, 0, 1);
    ccSetSize(5, 16384, 1, 2);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xEFB063));
}
