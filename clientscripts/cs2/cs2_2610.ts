/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2610

function cs2_2610(intArg0: component): void {
    let str0: string = "";

    if (varbit_mob_current_scenario == 2) {
        ifSetHide(false, intArg0);
        if (varbit_mob_capture_catapult == 15) {
            if (varbit_mob_capture_rocks > 0) {
                str0 = "Collected " + tostring(varbit_mob_capture_rocks) + " out of 4 rocks";
                ifSetGraphic(Graphic.graphic_1985, Component.interface_37.component_37_36);
            } else {
                str0 = "Send a squad to collect rocks";
                ifSetGraphic(Graphic.graphic_1990, Component.interface_37.component_37_36);
            }
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_37.component_37_0, Component.interface_37.component_37_41, str0, 50, 150]), Component.interface_37.component_37_0);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_37.component_37_41]), Component.interface_37.component_37_0);
            if (varbit_mob_capture_rocks > 1) {
                str0 = "Collected " + tostring(varbit_mob_capture_rocks) + " out of 4 rocks";
                ifSetGraphic(Graphic.graphic_1985, Component.interface_37.component_37_39);
            } else {
                str0 = "Send a squad to collect rocks.";
                ifSetGraphic(Graphic.graphic_1990, Component.interface_37.component_37_39);
            }
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_37.component_37_3, Component.interface_37.component_37_41, str0, 50, 150]), Component.interface_37.component_37_3);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_37.component_37_41]), Component.interface_37.component_37_3);
            if (varbit_mob_capture_rocks > 2) {
                str0 = "Collected " + tostring(varbit_mob_capture_rocks) + " out of 4 rocks";
                ifSetGraphic(Graphic.graphic_1985, Component.interface_37.component_37_38);
            } else {
                str0 = "Send a squad to collect rocks.";
                ifSetGraphic(Graphic.graphic_1990, Component.interface_37.component_37_38);
            }
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_37.component_37_4, Component.interface_37.component_37_41, str0, 50, 150]), Component.interface_37.component_37_4);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_37.component_37_41]), Component.interface_37.component_37_4);
            if (varbit_mob_capture_rocks > 3) {
                str0 = "Collected " + tostring(varbit_mob_capture_rocks) + " out of 4 rocks";
                ifSetGraphic(Graphic.graphic_1985, Component.interface_37.component_37_37);
            } else {
                str0 = "Send a squad to collect rocks.";
                ifSetGraphic(Graphic.graphic_1990, Component.interface_37.component_37_37);
            }
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_37.component_37_5, Component.interface_37.component_37_41, str0, 50, 150]), Component.interface_37.component_37_5);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_37.component_37_41]), Component.interface_37.component_37_5);
        } else {
            if (varbit_mob_capture_catapult_part1 > 0) {
                str0 = "Collected wheels";
                ifSetGraphic(Graphic.graphic_1981, Component.interface_37.component_37_36);
            } else {
                str0 = "Send a squad to collect wheels.";
                ifSetGraphic(Graphic.graphic_1986, Component.interface_37.component_37_36);
            }
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_37.component_37_0, Component.interface_37.component_37_41, str0, 50, 150]), Component.interface_37.component_37_0);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_37.component_37_41]), Component.interface_37.component_37_0);
            if (varbit_mob_capture_catapult_part3 > 0) {
                str0 = "Collected logs";
                ifSetGraphic(Graphic.graphic_1982, Component.interface_37.component_37_39);
            } else {
                str0 = "Send a squad to collect logs.";
                ifSetGraphic(Graphic.graphic_1987, Component.interface_37.component_37_39);
            }
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_37.component_37_3, Component.interface_37.component_37_41, str0, 50, 150]), Component.interface_37.component_37_3);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_37.component_37_41]), Component.interface_37.component_37_3);
            if (varbit_mob_capture_catapult_part4 > 0) {
                str0 = "Collected rope";
                ifSetGraphic(Graphic.graphic_1983, Component.interface_37.component_37_38);
            } else {
                str0 = "Send a squad to collect rope.";
                ifSetGraphic(Graphic.graphic_1988, Component.interface_37.component_37_38);
            }
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_37.component_37_4, Component.interface_37.component_37_41, str0, 50, 150]), Component.interface_37.component_37_4);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_37.component_37_41]), Component.interface_37.component_37_4);
            if (varbit_mob_capture_catapult_part2 > 0) {
                str0 = "Collected metal limbs";
                ifSetGraphic(Graphic.graphic_1984, Component.interface_37.component_37_37);
            } else {
                str0 = "Send a squad to collect metal limbs.";
                ifSetGraphic(Graphic.graphic_1989, Component.interface_37.component_37_37);
            }
            ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_37.component_37_5, Component.interface_37.component_37_41, str0, 50, 150]), Component.interface_37.component_37_5);
            ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_37.component_37_41]), Component.interface_37.component_37_5);
        }
    } else if (varbit_mob_current_scenario == 1) {
        ifSetHide(true, intArg0);
    } else if (varbit_mob_current_scenario == 3) {
        ifSetHide(true, intArg0);
    } else if (varbit_mob_current_scenario == 4) {
        ifSetHide(true, intArg0);
    }
}
