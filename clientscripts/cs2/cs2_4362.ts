/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4362

function cs2_4362(intArg0: number, intArg1: component, intArg2: component, intArg3: component, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number, intArg11: number, longArg0: bigint): void {
    if (intArg9 == 0 || intArg8 == 0 || intArg6 == 0) {
        ifSetGraphic(Graphic.aif_notetabs_4, intArg2);
        return;
    }
    let int12: Enum = enumOp(type_int, type_enum, Enum.enum_3689, intArg6);
    let str0: string = fromDate(intArg4) + " at " + enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, intArg5);

    if (pushVarClanSettingBit<5>() == 0) {
        str0 = str0 + " Game Time";
    } else {
        str0 = str0 + " Clan Local Time";
    }
    str0 = str0 + "<br>" + "<br>" + "World " + tostring(intArg9) + " at " + "<br>" + enumOp(type_int, type_string, Enum.enum_3696, intArg8) + "<br>" + "<br>" + enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, intArg6);

    if (int12 != -1 && intArg7 > 0) {
        str0 = str0 + "<br>" + enumOp(type_int, type_string, int12, intArg7);
    }
    str0 = str0 + "<br>" + "<br>" + "Open to " + enumOp(type_int, type_string, Enum.clan_core_rank_int_to_rank_plus, intArg10);

    if (intArg11 == 1) {
        str0 = str0 + "<br>" + "Attendance is mandatory";
    }
    ifSetOnOp(hook(clan_noticeboard_event_show, "is\xa7Iiiiii", [intArg0, str0, longArg0, intArg2, intArg4, intArg5, intArg9, intArg8, intArg6]), intArg1);
    ifSetGraphic(enumOp(type_int, type_graphic, Enum.clan_noticeboard_event_type_graphic, intArg6), intArg3);
    ifSetGraphic(Graphic.aif_notetabs_0, intArg2);
}
