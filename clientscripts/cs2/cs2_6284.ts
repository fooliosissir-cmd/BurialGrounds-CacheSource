/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6284

function cs2_6284(intArg0: number): void {
    let int1: graphic = -1;
    let int2: graphic = -1;
    let str0: string = "";

    if (intArg0 == -1) {
        int1 = -1;
        str0 = "";
    } else if (intArg0 == 0) {
        int1 = Graphic.aif_crucible_head_timer_icons_0;
        str0 = "6";
    } else if (intArg0 == 1) {
        int1 = Graphic.aif_crucible_head_timer_icons_1;
        str0 = "5";
    } else if (intArg0 == 2) {
        int1 = Graphic.aif_crucible_head_timer_icons_2;
        str0 = "4";
    } else if (intArg0 == 3) {
        int1 = Graphic.aif_crucible_head_timer_icons_3;
        str0 = "3";
    } else if (intArg0 == 4) {
        int1 = Graphic.aif_crucible_head_timer_icons_4;
        str0 = "2";
    } else if (intArg0 == 5) {
        int1 = Graphic.aif_crucible_head_timer_icons_5;
        str0 = "1";
    } else if (intArg0 == 6) {
        int1 = Graphic.aif_crucible_head_timer_icons_6;
        str0 = "";
    } else if (intArg0 == 7) {
        int1 = Graphic.aif_crucible_head_timer_icons_7;
        str0 = "";
    }

    if (ccFind(Component.interface_1296.component_1296_14, 0) == 1) {
        if (int1 != -1) {
            int2 = ccGetGraphic();
            if (int2 == int1) {
                return;
            }
            ifSetHide(false, Component.interface_1296.component_1296_15);
            if (intArg0 != 6) {
                ifSetText("<br>" + "Supreme Champions:" + "<br>" + "None", Component.interface_1296.component_1296_0);
                ifSetHide(true, Component.interface_1296.component_1296_10);
            }
            ifSetText(str0, Component.interface_1296.component_1296_18);
            ccSetGraphic(int1);
            ccCreate(Component.interface_1296.component_1296_14, 5, 1);
            ccSetGraphic(int2);
            ccSetSize(50, 50, 0, 0);
            ccSetPosition(0, 0, 4, 4);
            ifSetOnTimer(hook(cruc_graphic_fade, "i", [1]), Component.interface_1296.component_1296_14);
        } else {
            ccSetGraphic(-1);
            ifSetHide(true, Component.interface_1296.component_1296_15);
            varc_cruc_overlay_sh_state = 0;
            ifSetHide(true, Component.interface_1296.component_1296_1);
            ifSet2dangle(0, Component.interface_1296.component_1296_4);
        }
    } else if (int1 != -1) {
        ifSetHide(false, Component.interface_1296.component_1296_15);
        ifSetText(str0, Component.interface_1296.component_1296_18);
        ccCreate(Component.interface_1296.component_1296_14, 5, 0);
        ccSetGraphic(int1);
        ccSetSize(50, 50, 0, 0);
        ccSetPosition(0, 0, 4, 4);
    }
}
