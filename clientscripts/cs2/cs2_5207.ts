/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5207

function cs2_5207(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = 0;
    let int4: graphic = Graphic.aif_bronze_icon_button_1_3;
    let int5: graphic = Graphic.aif_bronze_icon_button_1_0;

    while (int3 < ifGetNextSubId(intArg0)) {
        if (ccFind(intArg0, int3) == 1 && ccGetGraphic() == int4) {
            ccClearscripthooks();
            ccSetGraphic(int5);
        }
        int3 = int3 + 1;
    }

    if (ccFind(intArg0, intArg1) == 1) {
        ccClearscripthooks();
        ccSetGraphic(int4);
    }
    varc_hcape_local_crest = intArg2;
    cs2_5202(0);
    cs2_5204();
}
