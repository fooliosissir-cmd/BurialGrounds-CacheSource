/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4329

function cs2_4329(intArg0: component): void {
    if (loadClanSettingVarLong<2>() != -1n) {
        ifSetText(clanforumqfcTostring(loadClanSettingVarLong<2>()), intArg0);
        hookMouseEnter(hook(text_colour_swapper, "Ii", [intArg0, colour(0x0000FF)]), intArg0);
        hookMouseExit(hook(text_colour_swapper, "Ii", [intArg0, colour(0xEAE1C2)]), intArg0);
        ifSetMouseOverCursor(Cursor.cursor_hyperlink_hand, intArg0);
        ifSetOnClick(hook(cs2_4330, "\xa7", [loadClanSettingVarLong<2>()]), intArg0);
        ifSetOpBase("Visit Clan Forum", intArg0);
    } else {
        ifSetText("", intArg0);
    }
}
