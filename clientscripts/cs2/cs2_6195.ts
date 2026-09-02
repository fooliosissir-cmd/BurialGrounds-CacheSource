/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6195

function cs2_6195(): void {
    let int0: number = 0;

    ifSetOnKey(noHook(""), Component.interface_137.component_137_55);

    if (varc_1920 == 1) {
        ifSetOnKey(hook(evalid_input_keyboard, "izIi", [event_keycode, event_keychar, event_com, int0]), Component.interface_906.component_906_361);
        varc_1921 = 0;
        ifSetOnClick(hook(cs2_6197, "iiII", [event_mousex, event_mousey, Component.interface_906.component_906_361, Component.interface_906.component_906_362]), Component.interface_906.component_906_361);
        cs2_6199(Component.interface_906.component_906_361, Component.interface_906.component_906_362, "");
        ifSetHide(true, Component.interface_906.component_906_362);
    } else if (varc_1920 == 2) {
        ifSetOnKey(hook(evalid_input_keyboard, "izIi", [event_keycode, event_keychar, event_com, int0]), Component.interface_906.component_906_368);
        varc_1922 = 0;
        ifSetOnClick(hook(cs2_6197, "iiII", [event_mousex, event_mousey, Component.interface_906.component_906_368, Component.interface_906.component_906_369]), Component.interface_906.component_906_368);
        cs2_6199(Component.interface_906.component_906_368, Component.interface_906.component_906_369, "");
        ifSetHide(true, Component.interface_906.component_906_369);
    }
}
