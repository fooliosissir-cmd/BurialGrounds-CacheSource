/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3004

function cs2_3004(intArg0: number, intArg1: number): void {
    ifSetOnClick(noHook(""), Component.interface_907.component_907_41);
    ifSetOnClick(noHook(""), Component.interface_907.component_907_29);
    ifSetOnClick(noHook(""), Component.interface_907.component_907_17);
    ifSetOnClick(noHook(""), Component.interface_907.component_907_55);

    if (ifGetGraphic(cs2_3013(intArg1)) == Graphic.graphic_2669) {
        cs2_3007(...cs2_3011(intArg1));
    } else {
        cs2_3009(...cs2_3011(intArg1));
    }
    ifSetOnTimer(hook(cs2_3005, "ii", [intArg1, intArg0]), Component.interface_907.component_907_2);
}
