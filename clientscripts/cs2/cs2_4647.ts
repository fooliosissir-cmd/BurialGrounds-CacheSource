/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4647

function cs2_4647(): void {
    ifSetHide(true, Component.fremsaga_map.vengeance);
    ifSetHide(true, Component.fremsaga_map.thok_maps);
    ifSetHide(false, Component.fremsaga_map.signature_map);
    ifSetHide(false, Component.fremsaga_map.sig_startroom);
    ifSetHide(false, Component.fremsaga_map.sig_startroomstairs);

    if (testBit(varp_fremsaga_door, 0) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_rubble);
    } else {
        ifSetHide(false, Component.fremsaga_map.sig_rubble);
        ifSetGraphic(Graphic.rand_map_rooms_on_2, Component.fremsaga_map.sig_rubble);
    }

    if (testBit(varp_fremsaga_door, 1) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_slidey);
    } else if (testBit(varp_fremsaga_door, 0) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_slidey);
        ifSetGraphic(Graphic.rand_map_rooms_on_2, Component.fremsaga_map.sig_slidey);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_slidey);
    }

    if (testBit(varp_fremsaga_door, 2) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_summoning);
    } else if (testBit(varp_fremsaga_door, 1) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_summoning);
        ifSetGraphic(Graphic.rand_map_rooms_on_1, Component.fremsaga_map.sig_summoning);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_summoning);
    }

    if (testBit(varp_fremsaga_door, 3) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_warriors);
    } else if (testBit(varp_fremsaga_door, 2) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_warriors);
        ifSetGraphic(Graphic.rand_map_rooms_on_1, Component.fremsaga_map.sig_warriors);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_warriors);
    }

    if (testBit(varp_fremsaga_door, 4) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_library);
    } else if (testBit(varp_fremsaga_door, 3) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_library);
        ifSetGraphic(Graphic.rand_map_rooms_on_0, Component.fremsaga_map.sig_library);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_library);
    }

    if (testBit(varp_fremsaga_door, 5) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_charged);
    } else {
        ifSetGraphic(Graphic.rand_map_rooms_on_1, Component.fremsaga_map.sig_charged);
    }

    if (testBit(varp_fremsaga_door, 6) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_precog);
    } else if (testBit(varp_fremsaga_door, 5) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_precog);
        ifSetGraphic(Graphic.rand_map_rooms_on_2, Component.fremsaga_map.sig_precog);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_precog);
    }

    if (testBit(varp_fremsaga_door, 7) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_2rangers);
    } else {
        ifSetGraphic(Graphic.rand_map_rooms_on_0, Component.fremsaga_map.sig_2rangers);
    }

    if (testBit(varp_fremsaga_door, 8) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_guard);
    } else if (testBit(varp_fremsaga_door, 7) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_guard);
        ifSetGraphic(Graphic.rand_map_rooms_on_1, Component.fremsaga_map.sig_guard);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_guard);
    }

    if (testBit(varp_fremsaga_door, 9) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_statues);
    } else if (testBit(varp_fremsaga_door, 8) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_statues);
        ifSetGraphic(Graphic.rand_map_rooms_on_1, Component.fremsaga_map.sig_statues);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_statues);
    }

    if (testBit(varp_fremsaga_door, 10) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_pick);
    } else if (testBit(varp_fremsaga_door, 9) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_pick);
        ifSetGraphic(Graphic.rand_map_rooms_on_1, Component.fremsaga_map.sig_pick);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_pick);
    }

    if (testBit(varp_fremsaga_door, 11) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_runeflip);
    } else if (testBit(varp_fremsaga_door, 9) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_runeflip);
        ifSetGraphic(Graphic.rand_map_rooms_on_2, Component.fremsaga_map.sig_runeflip);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_runeflip);
    }

    if (testBit(varp_fremsaga_door, 12) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_crescent);
    } else if (testBit(varp_fremsaga_door, 11) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_crescent);
        ifSetGraphic(Graphic.rand_map_rooms_on_1, Component.fremsaga_map.sig_crescent);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_crescent);
    }

    if (testBit(varp_fremsaga_door, 13) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_sword);
    } else if (testBit(varp_fremsaga_door, 9) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_sword);
        ifSetGraphic(Graphic.rand_map_rooms_on_0, Component.fremsaga_map.sig_sword);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_sword);
    }

    if (testBit(varp_fremsaga_door, 14) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_boss);
        ifSetHide(false, Component.fremsaga_map.sig_bossmark);
    } else if (testBit(varp_fremsaga_door, 7) == 1) {
        ifSetHide(false, Component.fremsaga_map.sig_boss);
        ifSetGraphic(Graphic.rand_map_rooms_on_0, Component.fremsaga_map.sig_boss);
        ifSetHide(true, Component.fremsaga_map.sig_bossmark);
    } else {
        ifSetHide(true, Component.fremsaga_map.sig_boss);
        ifSetHide(true, Component.fremsaga_map.sig_bossmark);
    }
    cs2_4653();
}
