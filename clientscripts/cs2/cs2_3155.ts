/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3155

function cs2_3155(intArg0: component): void {
    cc_add_graphic(intArg0, 0, 16, 16, 0, 0, Graphic.graphic_1547, false, false, false, 0);
    ccHookMouseEnter(hook(cs2_3156, "I", [intArg0]));
    ccHookMouseExit(hook(cs2_3157, "I", [intArg0]));
    cc_add_graphic(intArg0, 1, 16, 16, 0, 0, Graphic.graphic_1548, false, false, false, 0);
    ccSetHide(true);
}
