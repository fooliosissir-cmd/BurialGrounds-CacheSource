/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_785

function cs2_785(intArg0: component): void {
    varc_988 = 0;
    varc_989 = 0;
    varc_990 = 0;
    varc_991 = 0;

    switch (intArg0) {
        case Component.interface_192.component_192_7:
            varc_988 = 1;
            if (varbit_magre_filter_modern_combat == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_192.component_192_9:
            varc_989 = 1;
            if (varbit_magre_filter_modern_tele == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_192.component_192_11:
            varc_990 = 1;
            if (varbit_magre_filter_modern_misc == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_192.component_192_13:
            varc_991 = 1;
            if (varbit_magre_filter_modern_skill == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_430.component_430_5:
            varc_988 = 1;
            if (varbit_magre_filter_lunar_combat == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_430.component_430_9:
            varc_990 = 1;
            if (varbit_magre_filter_lunar_misc == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_430.component_430_7:
            varc_989 = 1;
            if (varbit_magre_filter_lunar_tele == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_193.component_193_5:
            varc_988 = 1;
            if (varbit_magre_filter_ancient_combat == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_193.component_193_7:
            varc_989 = 1;
            if (varbit_magre_filter_ancient_tele == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_950.component_950_7:
            varc_988 = 1;
            if (varbit_magre_filter_dungeon_combat == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_950.component_950_9:
            varc_989 = 1;
            if (varbit_magre_filter_dungeon_tele == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_950.component_950_11:
            varc_990 = 1;
            if (varbit_magre_filter_dungeon_misc == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
        case Component.interface_950.component_950_13:
            varc_991 = 1;
            if (varbit_magre_filter_dungeon_skill == 1) {
                ifSetGraphic(Graphic.graphic_1702, intArg0);
            }
            break;
    }
}
