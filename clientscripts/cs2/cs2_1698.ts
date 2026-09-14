/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1698

function cs2_1698(): void {
    ifSetOnVarTransmit(hook(cs2_1699, "Y", [], [1583, 1584, 1582, 1395]), Component.interface_271.component_271_9);
    ifSetScrollSize(ifGetWidth(Component.interface_271.component_271_8), ifGetHeight(Component.interface_271.component_271_8), Component.interface_271.component_271_5);
    ifSetOnOp(hook(cs2_1701, "", []), Component.interface_271.component_271_12);
    let str0: string = "This is the effect that prayers and curses have during combat. It includes curses that have used against you. The adjustment has no effect outside of combat. The percentage shown is relative to your skill level and may vary depending on the enemy you are fighting, and the prayers or curses used. Partial percentages are not shown.";

    if (varc_1052 == 1) {
        ifSetSize(16384, 63, 2, 0, Component.interface_271.component_271_9);
        ifSetSize(16384, 63 + ifGetHeight(Component.interface_271.component_271_0), 2, 1, Component.interface_271.component_271_5);
        ifSetSize(16, 63 + ifGetHeight(Component.interface_271.component_271_0) + 2, 0, 1, Component.interface_271.component_271_6);
        ifSetHide(false, Component.interface_271.component_271_24);
        cs2_1700();
        proc_prayer_refresh_scrollbar();
        ifSetOnMouseRepeat(hook(cs2_38, "IIsii", [Component.interface_271.component_271_13, Component.interface_271.component_271_49, str0, 25, 190]), Component.interface_271.component_271_13);
        ifSetOnMouseLeave(hook(clientscript_deltooltip, "I", [Component.interface_271.component_271_49]), Component.interface_271.component_271_13);
    } else {
        ifSetSize(16384, 19, 2, 0, Component.interface_271.component_271_9);
        ifSetSize(16384, 19 + ifGetHeight(Component.interface_271.component_271_0), 2, 1, Component.interface_271.component_271_5);
        ifSetSize(16, 19 + ifGetHeight(Component.interface_271.component_271_0) + 2, 0, 1, Component.interface_271.component_271_6);
        ifSetHide(true, Component.interface_271.component_271_24);
        cs2_1700();
        proc_prayer_refresh_scrollbar();
        ifSetOnMouseRepeat(noHook(""), Component.interface_271.component_271_13);
        ifSetOnMouseLeave(noHook(""), Component.interface_271.component_271_13);
    }
}
