/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,choice_v2_onload_frem]

function choice_v2_onload_frem(): void {
    ifSetSize(250, 30, 0, 0, Component.interface_1193.component_1193_5);
    ifSetOnTimer(hook(cs2_5582, "II", [Component.interface_1193.component_1193_11, Component.interface_1193.component_1193_3]), Component.interface_1193.component_1193_11);
    ifSetOnTimer(hook(cs2_5582, "II", [Component.interface_1193.component_1193_13, Component.interface_1193.component_1193_23]), Component.interface_1193.component_1193_13);
    ifSetOnTimer(hook(cs2_5582, "II", [Component.interface_1193.component_1193_14, Component.interface_1193.component_1193_28]), Component.interface_1193.component_1193_14);
    ifSetOnTimer(hook(cs2_5582, "II", [Component.interface_1193.component_1193_15, Component.interface_1193.component_1193_33]), Component.interface_1193.component_1193_15);
    ifSetOnKey(hook(choice_v2_keypress_frem, "iz", [event_keycode, event_keychar]), Component.interface_1193.component_1193_4);
}
