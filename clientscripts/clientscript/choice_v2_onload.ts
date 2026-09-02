/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,choice_v2_onload]

function choice_v2_onload(): void {
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_3);
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_24);
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_29);
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_34);
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_39);
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_12);
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_25);
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_30);
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_35);
    ifSetColour(colour(0xC8C8C8), Component.interface_1188.component_1188_40);
    ifSetSize(250, 30, 0, 0, Component.interface_1188.component_1188_5);
    ifSetOnTimer(hook(cs2_5594, "II", [Component.interface_1188.component_1188_11, Component.interface_1188.component_1188_3]), Component.interface_1188.component_1188_11);
    ifSetOnTimer(hook(cs2_5594, "II", [Component.interface_1188.component_1188_13, Component.interface_1188.component_1188_24]), Component.interface_1188.component_1188_13);
    ifSetOnTimer(hook(cs2_5594, "II", [Component.interface_1188.component_1188_14, Component.interface_1188.component_1188_29]), Component.interface_1188.component_1188_14);
    ifSetOnTimer(hook(cs2_5594, "II", [Component.interface_1188.component_1188_15, Component.interface_1188.component_1188_34]), Component.interface_1188.component_1188_15);
    ifSetOnTimer(hook(cs2_5594, "II", [Component.interface_1188.component_1188_16, Component.interface_1188.component_1188_39]), Component.interface_1188.component_1188_16);
    ifSetOnKey(hook(choice_v2_keypress, "iz", [event_keycode, event_keychar]), Component.interface_1188.component_1188_4);
}
