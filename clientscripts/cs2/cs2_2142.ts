/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2142

function cs2_2142(strArg0: string, intArg0: number, intArg1: number, intArg2: number): number {
    let int3: number = paraheight(strArg0, 390, Graphic.p12_full);
    let int4: number = 15;

    ccCreate(Component.interface_864.component_864_6, 4, intArg0);
    ccSetSize(390, int3 * int4, 0, 0);
    ccSetText(strArg0);
    ccSetPosition(15, intArg1, 0, 0);
    ccSetTextAlign(0, 0, 0);
    ccSetColour(colour(0x46320A));
    ccSetTextFont(Graphic.p12_full);
    ccSetTextShadow(false);
    ccSetOp(1, "Teleport");
    ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x645028)]));
    ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x46320A)]));
    return int3 * int4 + 5;
}
