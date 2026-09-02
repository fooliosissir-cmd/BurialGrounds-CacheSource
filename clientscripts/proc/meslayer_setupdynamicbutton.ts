/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,meslayer_setupdynamicbutton]

function meslayer_setupdynamicbutton(): void {
    ccSetTextAlign(1, 1, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetColour(colour(0x0000FF));
    ccSetTextShadow(false);
    ccSetSize(0, ifGetHeight(ccGetLayer()) - (ifGetY(Component.interface_752.component_752_5) + ifGetHeight(Component.interface_752.component_752_5)), 1, 0);
    ccSetPosition(0, 0, 1, 2);
    ccHookMouseEnter(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0xFFFFFF)]));
    ccHookMouseExit(hook(cc_text_colour_swapper, "Iii", [event_com, event_comsubid, colour(0x0000FF)]));
}
