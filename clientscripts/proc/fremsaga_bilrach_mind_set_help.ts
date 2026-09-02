/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_bilrach_mind_set_help]

function fremsaga_bilrach_mind_set_help(intArg0: number): void {
    let str0: string = "- Place probes in the mind of your victim to invade their consciousness and steal their memories." + "<br>" + "- Place each in a perfect position to obtain a clear memory." + "<br>" + "- Use the flashing hint circle to find the ideal positions. A faster flash is better." + "<br>" + "- You may also make use of audio hints to help find the ideal positions." + "<br>" + "- You have three probes to place." + "<br>" + "- Click the screen to add a probe in place." + "<br>" + "- You will exit the mind of your victim when you have placed all three probes.";
    let int1: number = 10;
    let int2: number = 16;
    let int3: number = ifGetWidth(Component.interface_1270.component_1270_76) - int1 * 2;
    let int4: number = paraheight(str0, int3, Graphic.p12_full);

    ifSetTextAlign(0, 0, int2, Component.interface_1270.component_1270_77);
    let int5: number = int2 * int4;
    ifSetPosition(int1, int1, 0, 0, Component.interface_1270.component_1270_77);
    ifSetSize(int3, int5, 0, 0, Component.interface_1270.component_1270_77);
    ifSetText(str0, Component.interface_1270.component_1270_77);
    let int6: number = int5 + int1 + int1;

    if (int6 < ifGetHeight(Component.interface_1270.component_1270_76)) {
        int6 = ifGetHeight(Component.interface_1270.component_1270_76);
    }
    ifSetScrollSize(ifGetWidth(Component.interface_1270.component_1270_76), int6, Component.interface_1270.component_1270_76);
    proc_scrollbar_vertical(Component.interface_1270.component_1270_75, Component.interface_1270.component_1270_76, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);

    if (intArg0 == 1) {
        ifSetHide(false, Component.interface_1270.component_1270_71);
    } else {
        ifSetHide(true, Component.interface_1270.component_1270_71);
    }
}
