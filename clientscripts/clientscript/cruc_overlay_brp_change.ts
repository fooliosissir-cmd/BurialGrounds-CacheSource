/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cruc_overlay_brp_change]

function cruc_overlay_brp_change(intArg0: number): void {
    ccCreate(Component.interface_1296.component_1296_2, 4, 0);
    ccSetSize(65, 12, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(2, 1, 0);
    varc_cruc_overlay_brp_pause = 0;

    if (intArg0 < 1) {
        ccSetText("- all rank pts");
        ccSetColour(colour(0xFF0000));
    } else {
        ccSetText("+ " + tostring(intArg0) + " rank pt");
        ccSetColour(colour(0x00FF00));
    }
    ccSetTextShadow(true);
    ifSetOnTimer(hook(cs2_6289, "", []), Component.interface_1296.component_1296_2);
}
