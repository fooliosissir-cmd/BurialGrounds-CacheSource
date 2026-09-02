/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5059

function cs2_5059(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = intArg1 * 12;

    if (intArg2 == 1) {
        if (ccFind(intArg0, int3 + 2) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_7);
        }
        if (ccFind(intArg0, int3 + 3) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_6);
        }
        if (ccFind(intArg0, int3 + 4) == 1) {
            ccSetGraphic(Graphic.aif_button_group_2_8);
        }
        if (ccFind(intArg0, int3) == 1) {
            ccHookMouseEnter(noHook(""));
            ccHookMouseExit(noHook(""));
        }
        if (ifGetHide(Component.interface_1111.component_1111_18) == 1) {
            cs2_5063(intArg0, intArg1, false);
            if (ccFind(intArg0, int3 + 1) == 1) {
                ccHookMouseEnter(hook(cs2_5061, "Ii11", [event_com, intArg1, true, false]));
                ccHookMouseExit(hook(cs2_5061, "Ii11", [event_com, intArg1, false, false]));
            }
        } else {
            if (ccFind(intArg0, int3 + 5) == 1) {
                ccSetGraphic(Graphic.aif_button_group_2_7);
            }
            if (ccFind(intArg0, int3 + 6) == 1) {
                ccSetGraphic(Graphic.aif_button_group_2_6);
            }
            if (ccFind(intArg0, int3 + 7) == 1) {
                ccSetGraphic(Graphic.aif_button_group_2_8);
            }
            if (ccFind(intArg0, int3 + 10) == 1) {
                ccSetGraphic(Graphic.aif_settings_icon_0);
            }
            if (ccFind(intArg0, int3 + 1) == 1) {
                ccHookMouseEnter(noHook(""));
                ccHookMouseExit(noHook(""));
            }
        }
    } else {
        cs2_5062(intArg0, intArg1, false);
        cs2_5063(intArg0, intArg1, false);
        if (ccFind(intArg0, int3) == 1) {
            ccHookMouseEnter(hook(cs2_5060, "Ii1", [event_com, intArg1, true]));
            ccHookMouseExit(hook(cs2_5060, "Ii1", [event_com, intArg1, false]));
        }
        if (ccFind(intArg0, int3 + 1) == 1) {
            ccHookMouseEnter(hook(cs2_5061, "Ii11", [event_com, intArg1, true, true]));
            ccHookMouseExit(hook(cs2_5061, "Ii11", [event_com, intArg1, false, true]));
        }
    }
}
