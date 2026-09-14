/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2890

function cs2_2890(): void {
    let int0: npc = -1;
    let int1: number = 0;
    let int2: number = -1;
    let int3: number = -1;
    let int4: number = -1;
    let int5: number = -1;
    let int6: number = -1;
    let int7: number = -1;
    let int8: number = 1;
    let int9: number = 0;
    let int10: component = Component.sfa.content_layer;

    while (int8 <= enumGetoutputcount(Enum.sfa_int2fam)) {
        if (int8 != varc_1080 && int8 != varc_1081 && int8 != varc_1082 && int8 != varc_1083 && int8 != varc_1084 && int8 != varc_1085 && testBit(varp_sfa_hunt, int8) == 1) {
            int0 = enumOp(type_int, type_npc, Enum.sfa_int2fam, int8);
            if (int0 != -1 && int1 < 6) {
                int1 = int1 + 1;
                if (varc_1080 == -1) {
                    varc_1080 = int8;
                } else if (varc_1081 == -1) {
                    varc_1081 = int8;
                } else if (varc_1082 == -1) {
                    varc_1082 = int8;
                } else if (varc_1083 == -1) {
                    varc_1083 = int8;
                } else if (varc_1084 == -1) {
                    varc_1084 = int8;
                } else if (varc_1085 == -1) {
                    varc_1085 = int8;
                }
                int0 = -1;
            }
        }
        int8 = int8 + 1;
    }
    int8 = 1;
    let int11: number = 0;

    while (int8 <= 6) {
        int10 = enumOp(type_int, type_component, Enum.sfa_fam_components, int8);
        if (int10 != Component.sfa.content_layer && ifGetGraphic(int10) == -1) {
            switch (int8) {
                case 1:
                    int0 = enumOp(type_int, type_npc, Enum.sfa_int2fam, varc_1080);
                    break;
                case 2:
                    int0 = enumOp(type_int, type_npc, Enum.sfa_int2fam, varc_1081);
                    break;
                case 3:
                    int0 = enumOp(type_int, type_npc, Enum.sfa_int2fam, varc_1082);
                    break;
                case 4:
                    int0 = enumOp(type_int, type_npc, Enum.sfa_int2fam, varc_1083);
                    break;
                case 5:
                    int0 = enumOp(type_int, type_npc, Enum.sfa_int2fam, varc_1084);
                    break;
                case 6:
                    int0 = enumOp(type_int, type_npc, Enum.sfa_int2fam, varc_1085);
                    break;
            }
            if (int0 != -1) {
                ifSetGraphic(enumOp(type_npc, type_graphic, Enum.sfa_fam_graphic, int0), int10);
                ifSetText(enumOp(type_npc, type_string, Enum.sfa_fam2string, int0), enumOp(type_component, type_component, Enum.sfa_fam_components_text, int10));
                ifSetOnMouseRepeat(hook(cs2_1160, "IiIsii", [int10, -1, Component.sfa.tooltip, enumOp(type_npc, type_string, Enum.sfa_fam2string, int0), 25, 200]), int10);
                ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.sfa.tooltip]), int10);
                if (int10 != Component.sfa.fam_graph1 && int10 != Component.sfa.fam_graph2) {
                    ifSetHide(false, Component.sfa.alert);
                    ifSetPosition(ifGetX(int10), ifGetY(int10), 0, 0, Component.sfa.alert);
                    proc_component_flash_start(Component.sfa.alert);
                    int11 = clientClock() + 150;
                    ifSetOnTimer(hook(cs2_2891, "iI", [int11, int10]), int10);
                }
            }
        }
        int8 = int8 + 1;
    }
}
