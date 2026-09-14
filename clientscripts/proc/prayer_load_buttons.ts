/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,prayer_load_buttons]

function proc_prayer_load_buttons(intArg0: component): void {
    ccDeleteAll(intArg0);
    let int1: number = 5;
    let int2: number = 30;
    let int3: number = 30;
    let int4: number = 0;
    let int5: number = 8;
    let int6: number = int5;
    let int7: number = 6;
    let int8: number = 30 + 7;

    if (varc_1052 == 1 && varbit_prayer_mode == 0) {
        int5 = 5;
        int6 = int5;
        int8 = 30 + 4;
    }
    let int9: number = 30 + 6;

    if (varc_181 == 1) {
        int5 = 8;
        int6 = int5;
        int7 = 30;
        int8 = 30 + 7;
        int9 = 30 + 5;
    }
    let int10: struct = -1;
    let int11: graphic = -1;
    let int12: graphic = -1;
    let str0: string = "";
    let int13: number = 0;
    let int14: number = 30;

    if (varbit_prayer_mode == 1) {
        int14 = 20;
    }

    while (int4 < int14) {
        int10 = enumOp(type_int, type_struct, Enum.enum_2279, int4);
        if (varbit_prayer_mode == 1) {
            int10 = enumOp(type_int, type_struct, Enum.enum_863, int4);
        }
        int12 = structParam(int10, Param.prayer_graphic_off);
        int11 = structParam(int10, Param.prayer_graphic_on);
        str0 = structParam(int10, Param.prayer_tooltip);
        int13 = structParam(int10, Param.prayer_level_req);
        ccCreate(intArg0, 5, int4);
        ccSetSize(int2, int3, 0, 0);
        ccSetPosition(int6, int7, 0, 0);
        ccSetGraphic(int12);
        ccSetClickMask(false);
        if (varc_181 == 0) {
            ccSetOp(1, "Activate" + "<col=ff9040>");
            ccSetOnVarTransmit(hook(prayer_varupdate, "IIiY", [event_com, Component.interface_271.component_271_7, int4], [1395, 1582]));
            ccSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [event_com, event_comsubid, Component.interface_271.component_271_49, str0, 25, 190]));
        }
        ccSetOnStatTransmit(hook(prayer_statupdate, "iddIiY", [int13, int12, int11, event_com, event_comsubid], [5]));
        ccSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_271.component_271_49]));
        int4 = int4 + 1;
        if (int4 % int1 == 0) {
            int6 = int5;
            int7 = int7 + int9;
        } else {
            int6 = int6 + int8;
        }
    }
}
