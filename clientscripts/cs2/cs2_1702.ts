/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1702

function cs2_1702(intArg0: number): void {
    let int1: number = ifGetHeight(Component.interface_271.component_271_9);
    let str0: string = "This is the effect that prayers and curses have during combat. It includes curses that have been used against you. The adjustment has no effect outside of combat. The percentage shown is relative to your skill level, and may vary depending on the enemy you are fighting, and the prayers or curses used. Partial percentages are not shown.";

    if (intArg0 >= 0) {
        if (varc_1052 == 1) {
            if (int1 < 63) {
                int1 = min(int1 + 3, 63);
                ifSetOnTimer(hook(cs2_1702, "i", [0]), Component.interface_271.component_271_9);
                ifSetSize(16384, int1, 2, 0, Component.interface_271.component_271_9);
                ifSetSize(16384, int1 + ifGetHeight(Component.interface_271.component_271_0), 2, 1, Component.interface_271.component_271_5);
                ifSetSize(16, int1 + ifGetHeight(Component.interface_271.component_271_0) + 2, 0, 1, Component.interface_271.component_271_6);
            }
            if (ifGetHeight(Component.interface_271.component_271_9) >= 63) {
                ifSetOnTimer(noHook(""), Component.interface_271.component_271_9);
                proc_prayer_refresh_scrollbar();
                ifSetHide(false, Component.interface_271.component_271_24);
                ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_271.component_271_13, Component.interface_271.component_271_49, str0, 25, 190]), Component.interface_271.component_271_13);
                ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_271.component_271_49]), Component.interface_271.component_271_13);
            }
        } else {
            if (int1 > 19) {
                int1 = max(int1 - 3, 19);
                ifSetOnTimer(hook(cs2_1702, "i", [0]), Component.interface_271.component_271_9);
                ifSetSize(16384, int1, 2, 0, Component.interface_271.component_271_9);
                ifSetSize(16384, int1 + ifGetHeight(Component.interface_271.component_271_0), 2, 1, Component.interface_271.component_271_5);
                ifSetSize(16, int1 + ifGetHeight(Component.interface_271.component_271_0) + 2, 0, 1, Component.interface_271.component_271_6);
                ifSetOnMouseRepeat(noHook(""), Component.interface_271.component_271_13);
                ifSetOnMouseLeave(noHook(""), Component.interface_271.component_271_13);
            }
            if (ifGetHeight(Component.interface_271.component_271_9) <= 19) {
                ifSetOnTimer(noHook(""), Component.interface_271.component_271_9);
                proc_prayer_refresh_scrollbar();
                ifSetHide(true, Component.interface_271.component_271_24);
            }
        }
    } else {
        ifSetOnTimer(hook(cs2_1702, "i", [intArg0 + 1]), Component.interface_271.component_271_9);
    }
}
