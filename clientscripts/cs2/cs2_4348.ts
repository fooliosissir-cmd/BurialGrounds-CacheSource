/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4348

function cs2_4348(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;

    cs2_4501(Component.interface_1098.component_1098_194, "Day");
    cs2_4501(Component.interface_1098.component_1098_182, "Month");
    cs2_4501(Component.interface_1098.component_1098_172, "Year");
    cs2_4501(Component.interface_1098.component_1098_224, "World");
    cs2_4501(Component.interface_1098.component_1098_119, "Select Event Type");
    cs2_4501(Component.interface_1098.component_1098_134, "Select Event Place");
    cs2_4501(Component.interface_1098.component_1098_149, "Select Event Attendees");
    ifSetScrollPos(0, 0, Component.interface_1098.component_1098_160);
    scrollbar_ondrag_doscroll(Component.interface_1098.component_1098_159, Component.interface_1098.component_1098_160, 0, 1);
    ifSetScrollPos(0, 0, Component.interface_1098.component_1098_145);
    scrollbar_ondrag_doscroll(Component.interface_1098.component_1098_144, Component.interface_1098.component_1098_145, 0, 1);
    ifSetScrollPos(0, 0, Component.interface_1098.component_1098_130);
    scrollbar_ondrag_doscroll(Component.interface_1098.component_1098_129, Component.interface_1098.component_1098_130, 0, 1);

    if (varbit_clan_events_time_varp == 1) {
        ifSetText("All events relative to clan time", Component.interface_1098.component_1098_41);
    } else {
        ifSetText("All events relative to game time", Component.interface_1098.component_1098_41);
    }

    switch (varp_clan_event_current_varp) {
        case 1:
            if (varbit_9115 > 0) {
                [int0, int1, int2] = dateRunedayTodate(varbit_9115);
                int1 = int1 + 1;
                int2 = max(11, int2 - 2000);
            }
            if (int0 > 0) {
                cs2_4501(Component.interface_1098.component_1098_194, enumOp(type_int, type_string, Enum.clan_noticeboard_event_day, int0));
            }
            if (int1 > 0) {
                cs2_4501(Component.interface_1098.component_1098_182, enumOp(type_int, type_string, Enum.clan_noticeboard_event_month, int1));
            }
            if (int2 > 0) {
                cs2_4501(Component.interface_1098.component_1098_172, enumOp(type_int, type_string, Enum.enum_3699, int2));
            }
            cs2_4501(Component.interface_1098.component_1098_208, enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, varbit_9123));
            if (varbit_9107 > 0) {
                cs2_4501(Component.interface_1098.component_1098_224, enumOp(type_int, type_string, Enum.clan_noticeboard_event_world, varbit_9107));
            }
            if (varbit_clan_event_type_1_varp > 0) {
                cs2_4501(Component.interface_1098.component_1098_119, enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, varbit_clan_event_type_1_varp));
            }
            if (varbit_9099 > 0) {
                cs2_4501(Component.interface_1098.component_1098_134, enumOp(type_int, type_string, Enum.enum_3696, varbit_9099));
            }
            if (varp_2120 >= 0) {
                cs2_4501(Component.interface_1098.component_1098_149, enumOp(type_int, type_string, Enum.clan_offset_rank_int_to_rank_plus, varp_2120));
            }
            cs2_4358(71958773);
            break;
        case 2:
            if (varbit_9116 > 0) {
                [int0, int1, int2] = dateRunedayTodate(varbit_9116);
                int1 = int1 + 1;
                int2 = max(11, int2 - 2000);
            }
            if (int0 > 0) {
                cs2_4501(Component.interface_1098.component_1098_194, enumOp(type_int, type_string, Enum.clan_noticeboard_event_day, int0));
            }
            if (int1 > 0) {
                cs2_4501(Component.interface_1098.component_1098_182, enumOp(type_int, type_string, Enum.clan_noticeboard_event_month, int1));
            }
            if (int2 > 0) {
                cs2_4501(Component.interface_1098.component_1098_172, enumOp(type_int, type_string, Enum.enum_3699, int2));
            }
            cs2_4501(Component.interface_1098.component_1098_208, enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, varbit_9124));
            if (varbit_9108 > 0) {
                cs2_4501(Component.interface_1098.component_1098_224, enumOp(type_int, type_string, Enum.clan_noticeboard_event_world, varbit_9108));
            }
            if (varbit_clan_event_type_2_varp > 0) {
                cs2_4501(Component.interface_1098.component_1098_119, enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, varbit_clan_event_type_2_varp));
            }
            if (varbit_9100 > 0) {
                cs2_4501(Component.interface_1098.component_1098_134, enumOp(type_int, type_string, Enum.enum_3696, varbit_9100));
            }
            if (varp_2121 >= 0) {
                cs2_4501(Component.interface_1098.component_1098_149, enumOp(type_int, type_string, Enum.clan_offset_rank_int_to_rank_plus, varp_2121));
            }
            cs2_4358(71958780);
            break;
        case 3:
            if (varbit_9117 > 0) {
                [int0, int1, int2] = dateRunedayTodate(varbit_9117);
                int1 = int1 + 1;
                int2 = max(11, int2 - 2000);
            }
            if (int0 > 0) {
                cs2_4501(Component.interface_1098.component_1098_194, enumOp(type_int, type_string, Enum.clan_noticeboard_event_day, int0));
            }
            if (int1 > 0) {
                cs2_4501(Component.interface_1098.component_1098_182, enumOp(type_int, type_string, Enum.clan_noticeboard_event_month, int1));
            }
            if (int2 > 0) {
                cs2_4501(Component.interface_1098.component_1098_172, enumOp(type_int, type_string, Enum.enum_3699, int2));
            }
            cs2_4501(Component.interface_1098.component_1098_208, enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, varbit_9125));
            if (varbit_9109 > 0) {
                cs2_4501(Component.interface_1098.component_1098_224, enumOp(type_int, type_string, Enum.clan_noticeboard_event_world, varbit_9109));
            }
            if (varbit_clan_event_type_3_varp > 0) {
                cs2_4501(Component.interface_1098.component_1098_119, enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, varbit_clan_event_type_3_varp));
            }
            if (varbit_9101 > 0) {
                cs2_4501(Component.interface_1098.component_1098_134, enumOp(type_int, type_string, Enum.enum_3696, varbit_9101));
            }
            if (varp_2122 >= 0) {
                cs2_4501(Component.interface_1098.component_1098_149, enumOp(type_int, type_string, Enum.clan_offset_rank_int_to_rank_plus, varp_2122));
            }
            cs2_4358(71958787);
            break;
        case 4:
            if (varbit_9118 > 0) {
                [int0, int1, int2] = dateRunedayTodate(varbit_9118);
                int1 = int1 + 1;
                int2 = max(11, int2 - 2000);
            }
            if (int0 > 0) {
                cs2_4501(Component.interface_1098.component_1098_194, enumOp(type_int, type_string, Enum.clan_noticeboard_event_day, int0));
            }
            if (int1 > 0) {
                cs2_4501(Component.interface_1098.component_1098_182, enumOp(type_int, type_string, Enum.clan_noticeboard_event_month, int1));
            }
            if (int2 > 0) {
                cs2_4501(Component.interface_1098.component_1098_172, enumOp(type_int, type_string, Enum.enum_3699, int2));
            }
            cs2_4501(Component.interface_1098.component_1098_208, enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, varbit_9126));
            if (varbit_9110 > 0) {
                cs2_4501(Component.interface_1098.component_1098_224, enumOp(type_int, type_string, Enum.clan_noticeboard_event_world, varbit_9110));
            }
            if (varbit_clan_event_type_4_varp > 0) {
                cs2_4501(Component.interface_1098.component_1098_119, enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, varbit_clan_event_type_4_varp));
            }
            if (varbit_9102 > 0) {
                cs2_4501(Component.interface_1098.component_1098_134, enumOp(type_int, type_string, Enum.enum_3696, varbit_9102));
            }
            if (varp_2123 >= 0) {
                cs2_4501(Component.interface_1098.component_1098_149, enumOp(type_int, type_string, Enum.clan_offset_rank_int_to_rank_plus, varp_2123));
            }
            cs2_4358(71958794);
            break;
        case 5:
            if (varbit_9119 > 0) {
                [int0, int1, int2] = dateRunedayTodate(varbit_9119);
                int1 = int1 + 1;
                int2 = max(11, int2 - 2000);
            }
            if (int0 > 0) {
                cs2_4501(Component.interface_1098.component_1098_194, enumOp(type_int, type_string, Enum.clan_noticeboard_event_day, int0));
            }
            if (int1 > 0) {
                cs2_4501(Component.interface_1098.component_1098_182, enumOp(type_int, type_string, Enum.clan_noticeboard_event_month, int1));
            }
            if (int2 > 0) {
                cs2_4501(Component.interface_1098.component_1098_172, enumOp(type_int, type_string, Enum.enum_3699, int2));
            }
            cs2_4501(Component.interface_1098.component_1098_208, enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, varbit_9127));
            if (varbit_9111 > 0) {
                cs2_4501(Component.interface_1098.component_1098_224, enumOp(type_int, type_string, Enum.clan_noticeboard_event_world, varbit_9111));
            }
            if (varbit_clan_event_type_5_varp > 0) {
                cs2_4501(Component.interface_1098.component_1098_119, enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, varbit_clan_event_type_5_varp));
            }
            if (varbit_9103 > 0) {
                cs2_4501(Component.interface_1098.component_1098_134, enumOp(type_int, type_string, Enum.enum_3696, varbit_9103));
            }
            if (varp_2124 >= 0) {
                cs2_4501(Component.interface_1098.component_1098_149, enumOp(type_int, type_string, Enum.clan_offset_rank_int_to_rank_plus, varp_2124));
            }
            cs2_4358(71958801);
            break;
        case 6:
            if (varbit_9120 > 0) {
                [int0, int1, int2] = dateRunedayTodate(varbit_9120);
                int1 = int1 + 1;
                int2 = max(11, int2 - 2000);
            }
            if (int0 > 0) {
                cs2_4501(Component.interface_1098.component_1098_194, enumOp(type_int, type_string, Enum.clan_noticeboard_event_day, int0));
            }
            if (int1 > 0) {
                cs2_4501(Component.interface_1098.component_1098_182, enumOp(type_int, type_string, Enum.clan_noticeboard_event_month, int1));
            }
            if (int2 > 0) {
                cs2_4501(Component.interface_1098.component_1098_172, enumOp(type_int, type_string, Enum.enum_3699, int2));
            }
            cs2_4501(Component.interface_1098.component_1098_208, enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, varbit_9128));
            if (varbit_9112 > 0) {
                cs2_4501(Component.interface_1098.component_1098_224, enumOp(type_int, type_string, Enum.clan_noticeboard_event_world, varbit_9112));
            }
            if (varbit_clan_event_type_6_varp > 0) {
                cs2_4501(Component.interface_1098.component_1098_119, enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, varbit_clan_event_type_6_varp));
            }
            if (varbit_9104 > 0) {
                cs2_4501(Component.interface_1098.component_1098_134, enumOp(type_int, type_string, Enum.enum_3696, varbit_9104));
            }
            if (varp_2125 >= 0) {
                cs2_4501(Component.interface_1098.component_1098_149, enumOp(type_int, type_string, Enum.clan_offset_rank_int_to_rank_plus, varp_2125));
            }
            cs2_4358(71958808);
            break;
        case 7:
            if (varbit_9121 > 0) {
                [int0, int1, int2] = dateRunedayTodate(varbit_9121);
                int1 = int1 + 1;
                int2 = max(11, int2 - 2000);
            }
            if (int0 > 0) {
                cs2_4501(Component.interface_1098.component_1098_194, enumOp(type_int, type_string, Enum.clan_noticeboard_event_day, int0));
            }
            if (int1 > 0) {
                cs2_4501(Component.interface_1098.component_1098_182, enumOp(type_int, type_string, Enum.clan_noticeboard_event_month, int1));
            }
            if (int2 > 0) {
                cs2_4501(Component.interface_1098.component_1098_172, enumOp(type_int, type_string, Enum.enum_3699, int2));
            }
            cs2_4501(Component.interface_1098.component_1098_208, enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, varbit_9129));
            if (varbit_9113 > 0) {
                cs2_4501(Component.interface_1098.component_1098_224, enumOp(type_int, type_string, Enum.clan_noticeboard_event_world, varbit_9113));
            }
            if (varbit_clan_event_type_7_varp > 0) {
                cs2_4501(Component.interface_1098.component_1098_119, enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, varbit_clan_event_type_7_varp));
            }
            if (varbit_9105 > 0) {
                cs2_4501(Component.interface_1098.component_1098_134, enumOp(type_int, type_string, Enum.enum_3696, varbit_9105));
            }
            if (varp_2126 >= 0) {
                cs2_4501(Component.interface_1098.component_1098_149, enumOp(type_int, type_string, Enum.clan_offset_rank_int_to_rank_plus, varp_2126));
            }
            cs2_4358(71958815);
            break;
        case 8:
            if (varbit_9122 > 0) {
                [int0, int1, int2] = dateRunedayTodate(varbit_9122);
                int1 = int1 + 1;
                int2 = max(11, int2 - 2000);
            }
            if (int0 > 0) {
                cs2_4501(Component.interface_1098.component_1098_194, enumOp(type_int, type_string, Enum.clan_noticeboard_event_day, int0));
            }
            if (int1 > 0) {
                cs2_4501(Component.interface_1098.component_1098_182, enumOp(type_int, type_string, Enum.clan_noticeboard_event_month, int1));
            }
            if (int2 > 0) {
                cs2_4501(Component.interface_1098.component_1098_172, enumOp(type_int, type_string, Enum.enum_3699, int2));
            }
            cs2_4501(Component.interface_1098.component_1098_208, enumOp(type_int, type_string, Enum.clan_noticeboard_event_time, varbit_9130));
            if (varbit_9114 > 0) {
                cs2_4501(Component.interface_1098.component_1098_224, enumOp(type_int, type_string, Enum.clan_noticeboard_event_world, varbit_9114));
            }
            if (varbit_clan_event_type_8_varp > 0) {
                cs2_4501(Component.interface_1098.component_1098_119, enumOp(type_int, type_string, Enum.clan_noticeboard_event_type, varbit_clan_event_type_8_varp));
            }
            if (varbit_9106 > 0) {
                cs2_4501(Component.interface_1098.component_1098_134, enumOp(type_int, type_string, Enum.enum_3696, varbit_9106));
            }
            if (varp_2127 >= 0) {
                cs2_4501(Component.interface_1098.component_1098_149, enumOp(type_int, type_string, Enum.clan_offset_rank_int_to_rank_plus, varp_2127));
            }
            cs2_4358(71958822);
            break;
    }
    cs2_4353(Component.interface_1098.component_1098_47);
    cs2_4356(Component.interface_1098.component_1098_49);
    cs2_4350();
}
