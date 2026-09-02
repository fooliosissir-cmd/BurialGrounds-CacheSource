/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1599

function cs2_1599(intArg0: number): graphic {
    switch (intArg0) {
        case 0:
            return Graphic.clan_chat_icons_0;
        case 1:
            return Graphic.aif_clan_rank_icons_2;
        case 2:
            return Graphic.aif_clan_rank_icons_1;
        case 3:
            return Graphic.aif_clan_rank_icons_0;
        case 4:
            return Graphic.aif_clan_rank_icons_8;
        case 5:
            return Graphic.aif_clan_rank_icons_9;
        case 6:
            return Graphic.aif_clan_rank_icons_7;
        case 7:
            return Graphic.aif_clan_rank_icons_3;
        case 127:
            return Graphic.clan_chat_icons_1;
        default:
            return -1;
    }
}
