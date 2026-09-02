/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_close]

function proc_quickchat_close(): void {
    ifSetHide(false, Component.interface_137.component_137_50);
    ifSetOnKey(hook(chatdefault_onkey, "iz", [event_keycode, event_keychar]), Component.interface_137.component_137_55);
    ifSetHide(true, Component.interface_137.component_137_0);
    let int0: number = 0;

    while (enumOp(type_int, type_component, Enum.enum_1550, int0) != -1) {
        ifSetOnKey(noHook(""), enumOp(type_int, type_component, Enum.enum_1550, int0));
        int0 = int0 + 1;
    }

    if (getWindowMode() >= 2) {
        proc_subchanged();
    }
}
