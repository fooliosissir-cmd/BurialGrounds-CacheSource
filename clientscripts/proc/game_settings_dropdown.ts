/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,game_settings_dropdown]

function game_settings_dropdown(intArg0: number): void {
    let int1: component = Component.game_settings.dropdown;
    let int2: number = game_settings_values(intArg0);
    ccDeleteAll(int1);
    ifSetPosition(ifGetX(Component.game_settings.rows) + ifGetWidth(Component.game_settings.rows) - 140, ifGetY(Component.game_settings.rows) + intArg0 * 20 + 16, 0, 0, int1);
    ifSetSize(140, int2 * 14 + 2, 0, 0, int1);
    let int3: number = 0;
    while (int3 < int2) {
        ccCreate(int1, 4, int3);
        ccSetSize(140, 14, 0, 0);
        ccSetPosition(0, 1 + int3 * 14, 0, 0);
        ccSetTextFont(Graphic.p11_full);
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0xEBE0BC));
        ccSetText(game_settings_value_text(intArg0, int3));
        ccSetOp(intArg0 + 1, "Select");
        ccHookMouseEnter(hook(cs2_2691, "Ii1ii1", [event_com, int3, true, int3, colour(0xFFFFFF), true]));
        ccHookMouseExit(hook(cs2_2691, "Ii1ii1", [event_com, int3, false, int3, colour(0xEBE0BC), true]));
        int3 = int3 + 1;
    }
    ifSetHide(false, int1);
}
