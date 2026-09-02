/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5324

function cs2_5324(intArg0: number): void {
    cs2_5323();

    switch (intArg0) {
        case 1:
            ifSetHide(false, Component.clan_keep_theatre_backdrop.greenscreen_selected);
            break;
        case 2:
            ifSetHide(false, Component.clan_keep_theatre_backdrop.cave_selected);
            break;
        case 3:
            ifSetHide(false, Component.clan_keep_theatre_backdrop.crypt_selected);
            break;
        case 4:
            ifSetHide(false, Component.clan_keep_theatre_backdrop.forest_selected);
            break;
        case 5:
            ifSetHide(false, Component.clan_keep_theatre_backdrop.ocean_selected);
            break;
        case 6:
            ifSetHide(false, Component.clan_keep_theatre_backdrop.hills_selected);
            break;
        case 7:
            ifSetHide(false, Component.clan_keep_theatre_backdrop.room_selected);
            break;
        case 8:
            ifSetHide(false, Component.clan_keep_theatre_backdrop.village_selected);
            break;
    }
}
