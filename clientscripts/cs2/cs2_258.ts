/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_258

function cs2_258(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ccSetPosition(0, 0, 1, 1);
        ccSetSize(16, 15, 0, 0);
        ccSetGraphic(Graphic.aif_bronze_close_button_1_0);
        ccSetOp(1, "Close");
    }
}
