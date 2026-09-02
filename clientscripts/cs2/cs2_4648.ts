/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4648

function cs2_4648(): void {
    ifSetHide(true, Component.fremsaga_map.signature_map);
    ifSetHide(true, Component.fremsaga_map.thok_maps);
    ifSetHide(false, Component.fremsaga_map.vengeance);
    ifSetHide(false, Component.fremsaga_map.veng_start);
    ifSetHide(false, Component.fremsaga_map.veng_startstairs);

    if (testBit(varp_fremsaga_door, 1) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_1);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_1);
    }

    if (testBit(varp_fremsaga_door, 2) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_lotheria);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_lotheria);
    }

    if (testBit(varp_fremsaga_door, 3) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_2);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_2);
    }

    if (testBit(varp_fremsaga_door, 4) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_ican);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_ican);
    }

    if (testBit(varp_fremsaga_door, 5) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_hellhounds);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_hellhounds);
    }

    if (testBit(varp_fremsaga_door, 6) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_argax);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_argax);
    }

    if (testBit(varp_fremsaga_door, 7) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_empty);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_empty);
    }

    if (testBit(varp_fremsaga_door, 8) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_spidersandhellhound);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_spidersandhellhound);
    }

    if (testBit(varp_fremsaga_door, 9) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_levers);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_levers);
    }

    if (testBit(varp_fremsaga_door, 10) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_korel);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_korel);
    }

    if (testBit(varp_fremsaga_door, 11) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_lola_1);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_lola_1);
    }

    if (testBit(varp_fremsaga_door, 12) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_lola_2);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_lola_2);
    }

    if (testBit(varp_fremsaga_door, 13) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_lola_3);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_lola_3);
    }

    if (testBit(varp_fremsaga_door, 14) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_lola_4);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_lola_4);
    }

    if (testBit(varp_fremsaga_door, 15) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_corpse);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_corpse);
    }

    if (testBit(varp_fremsaga_door, 16) == 1) {
        ifSetHide(false, Component.fremsaga_map.veng_boss);
        ifSetHide(false, Component.fremsaga_map.veng_bossmark);
    } else {
        ifSetHide(true, Component.fremsaga_map.veng_boss);
        ifSetHide(true, Component.fremsaga_map.veng_bossmark);
    }
    cs2_4653();
}
