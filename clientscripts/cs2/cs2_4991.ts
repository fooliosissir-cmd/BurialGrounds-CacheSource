/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4991

function cs2_4991(): void {
    cs2_4993();
    cs2_4994();
    let int0: number = -1;
    let int1: number = 0;

    if (clanProfileFind() == 1) {
        int0 = pushVarClanBit<2580>();
        ifSetHide(false, Component.interface_1261.component_1261_36);
        ifSetHide(false, Component.interface_1261.component_1261_37);
        ifSetHide(false, Component.interface_1261.component_1261_38);
        ifSetHide(false, Component.interface_1261.component_1261_39);
        int1 = 4;
        if (int0 >= 2) {
            ifSetHide(false, Component.interface_1261.component_1261_40);
            int1 = int1 + 1;
        }
        if (int0 >= 3) {
            ifSetHide(false, Component.interface_1261.component_1261_41);
            ifSetHide(false, Component.interface_1261.component_1261_42);
            int1 = int1 + 2;
        }
        if (int0 >= 5) {
            ifSetHide(false, Component.interface_1261.component_1261_44);
            ifSetHide(false, Component.interface_1261.component_1261_253);
            int1 = int1 + 2;
        }
        if (int0 >= 6) {
            ifSetHide(false, Component.interface_1261.component_1261_43);
            int1 = int1 + 1;
        }
        if (int1 % 2 != 0) {
            int1 = int1 + 1;
        }
        ifSetScrollSize(ifGetWidth(Component.interface_1261.component_1261_56), int1 / 2 * 58 + 6, Component.interface_1261.component_1261_56);
        proc_scrollbar_vertical(Component.interface_1261.component_1261_55, Component.interface_1261.component_1261_56, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    }
}
