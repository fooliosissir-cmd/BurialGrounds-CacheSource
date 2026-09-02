/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,cruc_overlay_fee_change]

function cruc_overlay_fee_change(intArg0: number): void {
    ccCreate(Component.interface_1296.component_1296_3, 4, 0);
    ccSetSize(90, 12, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(2, 1, 0);
    varc_cruc_overlay_fee_pause = 0;

    if (intArg0 < 1) {
        ccSetText("Fee: " + tostring_spacer(intArg0, ","));
        ccSetColour(colour(0xFF0000));
    } else {
        ccSetText("Fee: + " + tostring_spacer(intArg0, ","));
        ccSetColour(colour(0x00FF00));
    }
    ccSetTextShadow(true);
    ifSetOnTimer(hook(cs2_6291, "", []), Component.interface_1296.component_1296_3);
}
