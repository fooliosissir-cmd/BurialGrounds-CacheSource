/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1523

function cs2_1523(): void {
    if (varbit_tutorial_version == 2) {
        ccCreate(Component.interface_275.component_275_8, 4, 0);
        ccSetPosition(0, -2, 0, 0);
        ccSetSize(102, 23, 0, 0);
        ccSetTextFont(Graphic.quill_oblique_large);
        ccSetTextAlign(0, 1, 0);
        ccSetText("Back");
        ccSetColour(colour(0x46320A));
        ccSetTextShadow(false);
        ccSetOnMouseOver(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
        ccSetOnMouseLeave(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x46320A)]));
        ifSetOp(1, "Back to Index", Component.interface_275.component_275_8);
    }
}
