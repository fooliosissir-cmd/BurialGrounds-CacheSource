/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4350

function cs2_4350(): void {
    let int0: Enum = -1;
    let int1: number = 0;

    switch (varp_clan_event_current_varp) {
        case 1:
            int1 = varbit_clan_event_type_1_varp;
            break;
        case 2:
            int1 = varbit_clan_event_type_2_varp;
            break;
        case 3:
            int1 = varbit_clan_event_type_3_varp;
            break;
        case 4:
            int1 = varbit_clan_event_type_4_varp;
            break;
        case 5:
            int1 = varbit_clan_event_type_5_varp;
            break;
        case 6:
            int1 = varbit_clan_event_type_6_varp;
            break;
        case 7:
            int1 = varbit_clan_event_type_7_varp;
            break;
        case 8:
            int1 = varbit_clan_event_type_8_varp;
            break;
    }

    if (int1 > 0) {
        int0 = enumOp(type_int, type_enum, Enum.enum_3689, int1);
        if (int0 != -1) {
            ifSetHide(true, Component.interface_1098.component_1098_111);
            ifSetScrollPos(0, 0, Component.interface_1098.component_1098_116);
            switch (varp_clan_event_current_varp) {
                case 1:
                    cs2_4499(int0, 1, enumOp(type_int, type_string, int0, varbit_clan_event_specific_1_varp), enumGetoutputcount(int0), 4, Component.interface_1098.component_1098_105, Component.interface_1098.component_1098_115, Component.interface_1098.component_1098_117, Component.interface_1098.component_1098_116, Component.interface_1098.component_1098_239);
                    break;
                case 2:
                    cs2_4499(int0, 1, enumOp(type_int, type_string, int0, varbit_clan_event_specific_2_varp), enumGetoutputcount(int0), 4, Component.interface_1098.component_1098_105, Component.interface_1098.component_1098_115, Component.interface_1098.component_1098_117, Component.interface_1098.component_1098_116, Component.interface_1098.component_1098_239);
                    break;
                case 3:
                    cs2_4499(int0, 1, enumOp(type_int, type_string, int0, varbit_clan_event_specific_3_varp), enumGetoutputcount(int0), 4, Component.interface_1098.component_1098_105, Component.interface_1098.component_1098_115, Component.interface_1098.component_1098_117, Component.interface_1098.component_1098_116, Component.interface_1098.component_1098_239);
                    break;
                case 4:
                    cs2_4499(int0, 1, enumOp(type_int, type_string, int0, varbit_clan_event_specific_4_varp), enumGetoutputcount(int0), 4, Component.interface_1098.component_1098_105, Component.interface_1098.component_1098_115, Component.interface_1098.component_1098_117, Component.interface_1098.component_1098_116, Component.interface_1098.component_1098_239);
                    break;
                case 5:
                    cs2_4499(int0, 1, enumOp(type_int, type_string, int0, varbit_clan_event_specific_5_varp), enumGetoutputcount(int0), 4, Component.interface_1098.component_1098_105, Component.interface_1098.component_1098_115, Component.interface_1098.component_1098_117, Component.interface_1098.component_1098_116, Component.interface_1098.component_1098_239);
                    break;
                case 6:
                    cs2_4499(int0, 1, enumOp(type_int, type_string, int0, varbit_clan_event_specific_6_varp), enumGetoutputcount(int0), 4, Component.interface_1098.component_1098_105, Component.interface_1098.component_1098_115, Component.interface_1098.component_1098_117, Component.interface_1098.component_1098_116, Component.interface_1098.component_1098_239);
                    break;
                case 7:
                    cs2_4499(int0, 1, enumOp(type_int, type_string, int0, varbit_clan_event_specific_7_varp), enumGetoutputcount(int0), 4, Component.interface_1098.component_1098_105, Component.interface_1098.component_1098_115, Component.interface_1098.component_1098_117, Component.interface_1098.component_1098_116, Component.interface_1098.component_1098_239);
                    break;
                case 8:
                    cs2_4499(int0, 1, enumOp(type_int, type_string, int0, varbit_clan_event_specific_8_varp), enumGetoutputcount(int0), 4, Component.interface_1098.component_1098_105, Component.interface_1098.component_1098_115, Component.interface_1098.component_1098_117, Component.interface_1098.component_1098_116, Component.interface_1098.component_1098_239);
                    break;
            }
            return;
        }
    }
    cs2_4501(Component.interface_1098.component_1098_105, "Select a sub-type");
    ifSetHide(false, Component.interface_1098.component_1098_111);
}
