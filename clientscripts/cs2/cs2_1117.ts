/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1117

function cs2_1117(intArg0: component): void {
    let int1: component = -1;
    let str0: string = "";

    switch (intArg0) {
        case Component.interface_192.component_192_7:
            if (varbit_magre_filter_modern_combat == 0) {
                str0 = "Hide combat spells.";
            } else {
                str0 = "Show combat spells.";
            }
            int1 = Component.interface_192.component_192_96;
            break;
        case Component.interface_192.component_192_9:
            if (varbit_magre_filter_modern_tele == 0) {
                str0 = "Hide teleport spells.";
            } else {
                str0 = "Show teleport spells.";
            }
            int1 = Component.interface_192.component_192_96;
            break;
        case Component.interface_192.component_192_11:
            if (varbit_magre_filter_modern_misc == 0) {
                str0 = "Hide miscellaneous spells.";
            } else {
                str0 = "Show miscellaneous spells.";
            }
            int1 = Component.interface_192.component_192_96;
            break;
        case Component.interface_192.component_192_13:
            if (varbit_magre_filter_modern_skill == 0) {
                str0 = "Hide skill spells.";
            } else {
                str0 = "Show skill spells.";
            }
            int1 = Component.interface_192.component_192_96;
            break;
        case Component.interface_430.component_430_5:
            if (varbit_magre_filter_lunar_combat == 0) {
                str0 = "Hide combat spells.";
            } else {
                str0 = "Show combat spells.";
            }
            int1 = Component.interface_430.component_430_65;
            break;
        case Component.interface_430.component_430_9:
            if (varbit_magre_filter_lunar_misc == 0) {
                str0 = "Hide miscellaneous spells.";
            } else {
                str0 = "Show miscellaneous spells.";
            }
            int1 = Component.interface_430.component_430_65;
            break;
        case Component.interface_430.component_430_7:
            if (varbit_magre_filter_lunar_tele == 0) {
                str0 = "Hide teleport spells.";
            } else {
                str0 = "Show teleport spells.";
            }
            int1 = Component.interface_430.component_430_65;
            break;
        case Component.interface_193.component_193_5:
            if (varbit_magre_filter_ancient_combat == 0) {
                str0 = "Hide combat spells.";
            } else {
                str0 = "Show combat spells.";
            }
            int1 = Component.interface_193.component_193_53;
            break;
        case Component.interface_193.component_193_7:
            if (varbit_magre_filter_ancient_tele == 0) {
                str0 = "Hide teleport spells.";
            } else {
                str0 = "Show teleport spells.";
            }
            int1 = Component.interface_193.component_193_53;
            break;
        case Component.interface_950.component_950_7:
            if (varbit_magre_filter_dungeon_combat == 0) {
                str0 = "Hide combat spells.";
            } else {
                str0 = "Show combat spells.";
            }
            int1 = Component.interface_950.component_950_72;
            break;
        case Component.interface_950.component_950_9:
            if (varbit_magre_filter_dungeon_tele == 0) {
                str0 = "Hide teleport spells.";
            } else {
                str0 = "Show teleport spells.";
            }
            int1 = Component.interface_950.component_950_72;
            break;
        case Component.interface_950.component_950_11:
            if (varbit_magre_filter_dungeon_misc == 0) {
                str0 = "Hide miscellaneous spells.";
            } else {
                str0 = "Show miscellaneous spells.";
            }
            int1 = Component.interface_950.component_950_72;
            break;
        case Component.interface_950.component_950_13:
            if (varbit_magre_filter_dungeon_skill == 0) {
                str0 = "Hide skill spells.";
            } else {
                str0 = "Show skill spells.";
            }
            int1 = Component.interface_950.component_950_72;
            break;
        default:
            return;
    }
    cs2_39(intArg0, int1, str0, 25, ifGetWidth(ifGetLayer(int1)));
}
