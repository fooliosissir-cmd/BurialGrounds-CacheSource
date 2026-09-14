/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1370

function cs2_1370(intArg0: component, intArg1: component, intArg2: number, intArg3: number): void {
    if (worldMapIsloaded() == 0) {
        return;
    }
    let int4: number = 1;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = varc_worldmap_zoom;

    if (intArg2 > 0) {
        switch (varc_worldmap_zoom) {
            case 50:
                varc_worldmap_zoom = 37;
                break;
            case 75:
                varc_worldmap_zoom = 50;
                break;
            case 100:
                varc_worldmap_zoom = 75;
                break;
            case 200:
                varc_worldmap_zoom = 100;
                break;
            default:
                varc_worldmap_zoom = 37;
                int4 = 0;
                break;
        }
    } else {
        switch (varc_worldmap_zoom) {
            case 37:
                varc_worldmap_zoom = 50;
                break;
            case 50:
                varc_worldmap_zoom = 75;
                break;
            case 75:
                varc_worldmap_zoom = 100;
                break;
            case 100:
                varc_worldmap_zoom = 200;
                break;
            default:
                varc_worldmap_zoom = 200;
                int4 = 0;
                break;
        }
        if (intArg3 == 1 && int15 < 200) {
            [int5, int6] = worldMapGetSize();
            [int9, int10] = [ifGetWidth(intArg1), ifGetHeight(intArg1)];
            if (int5 > 0 && int6 > 0) {
                [int7, int8] = worldMapGetDisplayPosition();
                int11 = getMouseX() - if_getx_absolute(intArg1) - int9 / 2;
                int12 = getMouseY() - trh_esc_mouseleave(intArg1) - int10 / 2;
                [int13, int14] = [scale(int5, int9, int11), scale(int6, int10, int12)];
                int7 = int7 + int13;
                int8 = int8 - int14;
                ifSetOnTimer(hook(cs2_2054, "iIc", [clientClock() + 1, intArg0, moveCoord(0, int7, 0, int8)]), intArg0);
            }
        }
    }
    worldmap_setzoom();
    cs2_305(int4);
}
