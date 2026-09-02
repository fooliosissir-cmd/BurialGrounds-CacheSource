/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5328

function cs2_5328(): void {
    let int0: number = 0;
    let int1: number = 1;
    let int2: number = (ifGetWidth(Component.agidad_overlay.foreground) - (8 - 1) * int1) / 8;
    let int3: number = (int2 + int1) * 8 - int1;

    ifSetSize(int3 + 12, ifGetHeight(Component.agidad_overlay.timerbar), 0, 0, Component.agidad_overlay.timerbar);
    ccDeleteAll(Component.agidad_overlay.foreground);
    let int4: number = 0;

    while (int0 < 8) {
        ccCreate(Component.agidad_overlay.foreground, 5, int0 * 6);
        ccSetGraphic(Graphic.aif_progress_bar_fill_3_0);
        ccSetSize(6, 0, 0, 1);
        ccSetPosition(int4, 0, 0, 0);
        ccSetColour(colour(0x535353));
        ccCreate(Component.agidad_overlay.foreground, 5, int0 * 6 + 1);
        ccSetGraphic(Graphic.aif_progress_bar_fill_3_1);
        ccSetSize(int2 - 12, 0, 0, 1);
        ccSetPosition(int4 + 6, 0, 0, 0);
        ccSetHide(false);
        ccSetColour(colour(0x535353));
        ccCreate(Component.agidad_overlay.foreground, 5, int0 * 6 + 2);
        ccSetGraphic(Graphic.aif_progress_bar_fill_3_2);
        ccSetSize(6, 0, 0, 1);
        ccSetPosition(int4 + int2 - 6, 0, 0, 0);
        ccSetColour(colour(0x535353));
        ccCreate(Component.agidad_overlay.foreground, 5, int0 * 6 + 3);
        ccSetGraphic(Graphic.aif_progress_bar_fill_3_0);
        ccSetSize(6, 0, 0, 1);
        ccSetPosition(int4, 0, 0, 0);
        ccCreate(Component.agidad_overlay.foreground, 5, int0 * 6 + 4);
        ccSetGraphic(Graphic.aif_progress_bar_fill_3_1);
        ccSetSize(int2 - 12, 0, 0, 1);
        ccSetPosition(int4 + 6, 0, 0, 0);
        ccSetHide(false);
        ccCreate(Component.agidad_overlay.foreground, 5, int0 * 6 + 5);
        ccSetGraphic(Graphic.aif_progress_bar_fill_3_2);
        ccSetSize(6, 0, 0, 1);
        ccSetPosition(int4 + int2 - 6, 0, 0, 0);
        int4 = int4 + int1 + int2;
        int0 = int0 + 1;
    }
    varc_agidad_ifcv_last_fade_segment = -1;
    varc_agidad_ifcv_fade_elapsed = 0;
}
