/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6198

function cs2_6198(intArg0: number, intArg1: number, intArg2: component, intArg3: component): void {
    if (intArg2 == Component.interface_906.component_906_361) {
        varc_1920 = 1;
        varc_1921 = ifGetcharindexatpos(intArg0, intArg1, intArg2);
        cs2_6199(intArg2, intArg3, varcstr_evalid_input_1);
    } else if (intArg2 == Component.interface_906.component_906_368) {
        varc_1920 = 2;
        varc_1922 = ifGetcharindexatpos(intArg0, intArg1, intArg2);
        cs2_6199(intArg2, intArg3, varcstr_evalid_input_2);
    }
    ifSetOnKey(noHook(""), Component.interface_137.component_137_55);

    if (varc_1920 == 1) {
        ifSetOnKey(noHook(""), Component.interface_906.component_906_368);
    } else if (varc_1920 == 2) {
        ifSetOnKey(noHook(""), Component.interface_906.component_906_361);
    }
    ifSetOnKey(hook(evalid_input_keyboard, "izIi", [event_keycode, event_keychar, event_com, 0]), intArg2);
}
