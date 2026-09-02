/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,raf_leave]

function raf_leave(intArg0: number): void {
    switch (intArg0) {
        case 21561344:
            if (ifFind(Component.interface_329.component_329_2) == 1) {
                ccSetGraphic(Graphic.aif_trim_1_green_button_0);
            }
            if (ifFind(Component.interface_329.component_329_3) == 1) {
                ccSetGraphic(Graphic.aif_trim_1_green_button_1);
            }
            if (ifFind(Component.interface_329.component_329_4) == 1) {
                ccSetGraphic(Graphic.aif_trim_1_green_button_2);
            }
            break;
        case 33947660:
            if (ifFind(Component.interface_518.component_518_0) == 1) {
                ccSetGraphic(Graphic.aif_trim_1_green_button_0);
            }
            if (ifFind(Component.interface_518.component_518_1) == 1) {
                ccSetGraphic(Graphic.aif_trim_1_green_button_1);
            }
            if (ifFind(Component.interface_518.component_518_2) == 1) {
                ccSetGraphic(Graphic.aif_trim_1_green_button_2);
            }
            break;
        case 21561345:
            if (ifFind(Component.interface_329.component_329_40) == 1) {
                ccSetGraphic(Graphic.aif_trim_1_green_button_0);
            }
            if (ifFind(Component.interface_329.component_329_41) == 1) {
                ccSetGraphic(Graphic.aif_trim_1_green_button_1);
            }
            if (ifFind(Component.interface_329.component_329_42) == 1) {
                ccSetGraphic(Graphic.aif_trim_1_green_button_2);
            }
            break;
    }
}
