/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,game_settings_rebuild]

function game_settings_rebuild(): void {
    let int0: component = Component.game_settings.rows;
    ifSetHide(true, Component.game_settings.dropdown);
    ccDeleteAll(int0);
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = ifGetWidth(int0) - 140;
    let int4: number = -1;
    let int5: number = -1;
    let int6: number = -1;
    let int7: number = 0;
    while (int1 < game_settings_count()) {
        int7 = max(int7, game_settings_values(int1));
        ccCreate(int0, 4, ifGetNextSubId(int0));
        ccSetSize(int3 - 10, 16, 0, 0);
        ccSetPosition(0, int2, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 1, 0);
        ccSetColour(colour(0xEBE0BC));
        ccSetTextShadow(true);
        ccSetText(game_settings_label(int1));
        ccCreate(int0, 3, ifGetNextSubId(int0));
        ccSetSize(140, 16, 0, 0);
        ccSetPosition(int3, int2, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x2E2B26));
        ccSetOnClick(hook(game_settings_dropdown_open, "i", [int1]));
        int4 = ccGetId();
        ccCreate(int0, 3, ifGetNextSubId(int0));
        ccSetSize(140, 16, 0, 0);
        ccSetPosition(int3, int2, 0, 0);
        ccSetfill(false);
        ccSetColour(colour(0x5F5B52));
        int5 = ccGetId();
        ccCreate(int0, 4, ifGetNextSubId(int0));
        ccSetSize(120, 16, 0, 0);
        ccSetPosition(int3 + 2, int2, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0xEBE0BC));
        ccSetText(game_settings_value_text(int1, game_settings_current(int1)));
        ccCreate(int0, 5, ifGetNextSubId(int0));
        ccSetSize(16, 16, 0, 0);
        ccSetPosition(int3 + 123, int2, 0, 0);
        ccSetGraphic(Graphic.graphic_2554);
        int6 = ccGetId();
        if (ccFind(int0, int4) == 1) {
            ccSetOnMouseOver(hook(cs2_2691, "Ii1ii1", [event_com, int6, true, int5, colour(0x80786D), true]));
            ccSetOnMouseLeave(hook(cs2_2691, "Ii1ii1", [event_com, int6, false, int5, colour(0x5F5B52), true]));
        }
        int2 = int2 + 20;
        int1 = int1 + 1;
    }
    ifSetSize(ifGetWidth(int0), int2, 0, 0, int0);
    ifSetSize(ifGetWidth(Component.game_settings.window), 22 + ifGetY(int0) + int2 + int7 * 14 + 8, 0, 0, Component.game_settings.window);
}
