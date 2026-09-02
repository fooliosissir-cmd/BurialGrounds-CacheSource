/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,worldmap_init]

function worldmap_init(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: component, intArg9: component): void {
    cs2_1088(intArg0, 0);
    let int10: worldmap = -1;

    if (varc_worldmap_focus != -1) {
        int10 = worldMapGetMap(varc_worldmap_focus);
        if (int10 == -1) {
            int10 = Worldmap.main;
        }
    }
    int10 = cs2_2785(int10);

    if (worldMapCoordinmap(varc_worldmap_focus, int10) == 1) {
        worldMapSetMapCoordOverride(int10, varc_worldmap_focus);
    } else {
        worldMapSetMap(int10);
    }
    varc_worldmap_zoom = worldMapGetConfigZoom(int10);
    worldmap_setzoom();
    worldmap_showoverview(0);
    cs2_1376(0, intArg5, intArg9);
    proc_worldmap_showmenu(false, intArg6, intArg7, intArg8, intArg4, intArg5);
    worldmap_key_build(varbit_worldmap_keysort, intArg1, intArg2, intArg3);
    ifSetOnVarcTransmit(hook(worldmap_init, "IIIIIIIIIIY", [intArg0, intArg1, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9], [622]), intArg0);
    ifSetOnVarTransmit(hook(worldmap_vartransmit, "IIIIIiY", [intArg1, intArg2, intArg3, intArg5, intArg0, varbit_worldmap_samemaplinks_hidden], [463, 1159]), intArg0);
    ifSetOnKey(hook(worldmap_onkey, "izIc", [event_keycode, event_keychar, intArg4, -1]), intArg4);
    varcstr_worldmap_findtext = "";
    let int11: number = 0;
    let int12: number = 0;
    let int13: coord = varc_worldmap_focus;

    if (varbit_task_priority_mode == 1 && int10 == Worldmap.main && mapMembers() == 1) {
        int13 = coord(2909, 3494, 0);
    }

    if (int13 != -1) {
        [int11, int12] = worldMapGetDisplayCoord(int13);
        if (int11 < 0 || int12 < 0) {
            int13 = moveCoord(0, coordX(int13), cs2_686(coordY(int13) - 1, 4), coordZ(int13));
            [int11, int12] = worldMapGetDisplayCoord(int13);
            if (int11 < 0 || int12 < 0) {
                int13 = moveCoord(0, coordX(int13), cs2_686(coordY(int13) - 1, 4), coordZ(int13));
                [int11, int12] = worldMapGetDisplayCoord(int13);
                if (int11 < 0 || int12 < 0) {
                    return;
                }
            }
        }
        ifSetOnTimer(hook(cs2_2054, "iIc", [clientClock() + 4, intArg0, int13]), intArg0);
    }
}
