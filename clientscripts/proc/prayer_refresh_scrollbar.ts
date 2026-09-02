/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,prayer_refresh_scrollbar]

function proc_prayer_refresh_scrollbar(): void {
    let int0: number = 0;

    if (varbit_prayer_mode == 0) {
        if (varc_1052 == 1) {
            if (varc_181 == 1) {
                ccDeleteAll(Component.interface_271.component_271_6);
                ifSetScrollPos(0, 0, Component.interface_271.component_271_5);
                int0 = 1;
            } else if (ifGetNextSubId(Component.interface_271.component_271_6) == 0) {
                proc_scrollbar_vertical(Component.interface_271.component_271_6, Component.interface_271.component_271_5, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
                int0 = 1;
            }
        } else if (ifGetNextSubId(Component.interface_271.component_271_6) != 0) {
            ccDeleteAll(Component.interface_271.component_271_6);
            ifSetScrollPos(0, 0, Component.interface_271.component_271_5);
            int0 = 1;
        }
    } else if (ifGetNextSubId(Component.interface_271.component_271_6) != 0) {
        ccDeleteAll(Component.interface_271.component_271_6);
        ifSetScrollPos(0, 0, Component.interface_271.component_271_5);
        ifSetSize(16384, 19 + ifGetHeight(Component.interface_271.component_271_0), 2, 1, Component.interface_271.component_271_5);
        int0 = 1;
    }

    if (int0 == 1) {
        proc_prayer_load_buttons(Component.interface_271.component_271_8);
        cs2_1293(Component.interface_271.component_271_7);
    }
}
