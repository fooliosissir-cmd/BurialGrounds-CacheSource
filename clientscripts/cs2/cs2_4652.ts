/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4652

function cs2_4652(): void {
    ifSetHide(true, Component.fremsaga_map.signature_map);
    ifSetHide(true, Component.fremsaga_map.vengeance);
    ifSetHide(false, Component.fremsaga_map.thok_maps);
    ifSetHide(true, Component.fremsaga_map.thok_icefiend);
    ifSetHide(true, Component.fremsaga_map.stomp_map);
    ifSetHide(false, Component.fremsaga_map.thok_main);
    ifSetHide(false, Component.fremsaga_map.thok_shadowforger);
    ifSetHide(false, Component.fremsaga_map.thok_shadowforgericon);

    if (testBit(varp_fremsaga_door, 0) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_scl);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_scl);
    }

    if (testBit(varp_fremsaga_door, 1) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_monolith);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_monolith);
    }

    if (testBit(varp_fremsaga_door, 2) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_west_ferret);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_west_ferret);
    }

    if (testBit(varp_fremsaga_door, 3) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_ferret);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_ferret);
    }

    if (testBit(varp_fremsaga_door, 4) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_pillar);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_pillar);
    }

    if (testBit(varp_fremsaga_door, 5) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_rsl);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_rsl);
    }

    if (testBit(varp_fremsaga_door, 6) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_lightsout);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_lightsout);
    }

    if (testBit(varp_fremsaga_door, 7) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_rammernaut);
        ifSetHide(false, Component.fremsaga_map.thok_rammernauticon);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_rammernaut);
        ifSetHide(true, Component.fremsaga_map.thok_rammernauticon);
    }

    if (testBit(varp_fremsaga_door, 8) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_btl);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_btl);
    }

    if (testBit(varp_fremsaga_door, 9) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_bulwalk);
        ifSetHide(false, Component.fremsaga_map.thok_bulkwalkicon);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_bulwalk);
        ifSetHide(true, Component.fremsaga_map.thok_bulkwalkicon);
    }

    if (testBit(varp_fremsaga_door, 10) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_eastofbtl);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_eastofbtl);
    }

    if (testBit(varp_fremsaga_door, 11) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_eastofferret);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_eastofferret);
    }

    if (testBit(varp_fremsaga_door, 12) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_startroom);
        ifSetHide(false, Component.fremsaga_map.thok_starticon);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_startroom);
        ifSetHide(true, Component.fremsaga_map.thok_starticon);
    }

    if (testBit(varp_fremsaga_door, 13) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_ramokee);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_ramokee);
    }

    if (testBit(varp_fremsaga_door, 14) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_ocl);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_ocl);
    }

    if (testBit(varp_fremsaga_door, 15) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_demon);
        ifSetHide(false, Component.fremsaga_map.thok_demonicon);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_demon);
        ifSetHide(true, Component.fremsaga_map.thok_demonicon);
    }

    if (testBit(varp_fremsaga_door, 16) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_ock);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_ock);
    }

    if (testBit(varp_fremsaga_door, 17) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_gulega);
        ifSetHide(false, Component.fremsaga_map.thok_gulegaicon);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_gulega);
        ifSetHide(true, Component.fremsaga_map.thok_gulegaicon);
    }

    if (testBit(varp_fremsaga_door, 18) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_empty_north_monolith);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_empty_north_monolith);
    }

    if (testBit(varp_fremsaga_door, 19) == 1) {
        ifSetHide(false, Component.fremsaga_map.thok_toughguy);
        ifSetHide(false, Component.fremsaga_map.thok_toughguyicon);
    } else {
        ifSetHide(true, Component.fremsaga_map.thok_toughguy);
        ifSetHide(true, Component.fremsaga_map.thok_toughguyicon);
    }
    cs2_4653();
}
