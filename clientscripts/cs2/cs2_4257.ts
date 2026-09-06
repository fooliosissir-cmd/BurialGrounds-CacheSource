/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4257

function cs2_4257(intArg0: component): void {
    if (ifFind(intArg0) == 1) {
        ccSetPosition(0, 0, 1, 1);
        ccSetSize(16, 15, 0, 0);
        ccSetGraphic(gameframe_skin_graphic(Graphic.aif_bronze_close_button_1_0));
        ccSetOnOpt(hook(closebutton_click, "", []));
        ccSetOp(1, "Close");
    }
}
