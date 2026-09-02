/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4650

function cs2_4650(): void {
    ifSetHide(true, Component.fremsaga_map.signature_map);
    ifSetHide(true, Component.fremsaga_map.vengeance);
    ifSetHide(false, Component.fremsaga_map.thok_maps);
    ifSetHide(true, Component.fremsaga_map.stomp_map);
    ifSetHide(true, Component.fremsaga_map.thok_main);
    ifSetHide(false, Component.fremsaga_map.thok_icefiend);
    cs2_4653();
}
