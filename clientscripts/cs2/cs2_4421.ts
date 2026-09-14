/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4421

function cs2_4421(intArg0: component, intArg1: component, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, longArg0: bigint): void {
    let int10: Enum = enumOp(type_int, type_enum, Enum.enum_3689, intArg6);
    let str0: string = "";

    if (intArg2 >= dateRuneday() && intArg5 > 0 && intArg4 > 0 && intArg6 > 0) {
        str0 = fromDate(intArg2) + "<br>" + enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, intArg3);
        if (pushVarClanSettingBit<5>() == 0) {
            str0 = str0 + " Game time:";
        } else {
            str0 = str0 + " Clan time:";
        }
        if (intArg5 > 0) {
            str0 = str0 + "<br>" + "World " + tostring(intArg5);
        }
        str0 = str0 + "<br>" + enumOp(type_int, type_string, Enum.enum_3696, intArg4);
        ifSetText(str0, intArg0);
        str0 = enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, intArg6);
        if (int10 != -1 && intArg7 > 0) {
            str0 = str0 + "<br>" + enumOp(type_int, type_string, int10, intArg7);
        }
        str0 = str0 + "<br>" + "Open to: " + enumOp(type_int, type_string, Enum.clan_core_rank_int_to_rank_plus, intArg8);
        if (intArg9 == 1) {
            str0 = str0 + "<br>" + "Attendance is mandatory.";
        }
        ifSetText(str0, intArg1);
        if (longArg0 != -1n) {
            ifSetHide(false, Component.interface_1107.component_1107_136);
            ifSetOnOp(hook(cs2_4330, "\xa7", [longArg0]), Component.interface_1107.component_1107_136);
        } else {
            ifSetOnClick(noHook(""), Component.interface_1107.component_1107_136);
            ifSetHide(true, Component.interface_1107.component_1107_52);
        }
    }
}
