/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4597

function cs2_4597(): void {
    let str0: string = "What if I entered the Wilderness?";
    let str1: string = "Back";
    let int0: number = 0;

    if (varbit_9226 >= 2) {
        ifSetHide(true, Component.interface_17.component_17_28);
        ifSetSize(16, 0, 1, 1, Component.interface_17.component_17_26);
        ifSetSize(16, 0, 0, 1, Component.interface_17.component_17_27);
    } else {
        int0 = max(paraheight(str0, ifGetWidth(Component.interface_17.component_17_30), Graphic.p12_full), paraheight(str1, ifGetWidth(Component.interface_17.component_17_30), Graphic.p12_full));
        int0 = int0 * 12 + 10;
        ifSetSize(10, int0, 1, 0, Component.interface_17.component_17_28);
        ifSetHide(false, Component.interface_17.component_17_28);
        int0 = int0 + 5;
        ifSetSize(16, int0, 1, 1, Component.interface_17.component_17_26);
        ifSetSize(16, int0, 0, 1, Component.interface_17.component_17_27);
        cs2_680(Component.interface_17.component_17_29);
        hookMouseEnter(hook(cs2_95, "I", [Component.interface_17.component_17_29]), Component.interface_17.component_17_28);
        hookMouseExit(hook(cs2_93, "I", [Component.interface_17.component_17_29]), Component.interface_17.component_17_28);
        if (varbit_9226 == 1) {
            ifSetText(str1, Component.interface_17.component_17_30);
        } else {
            ifSetText(str0, Component.interface_17.component_17_30);
        }
    }
    ccDeleteAll(Component.interface_17.component_17_26);
    int0 = paraheight(varcstr_352, ifGetWidth(Component.interface_17.component_17_26), Graphic.p11_full) * 10 + 2;
    ccCreate(Component.interface_17.component_17_26, 4, 0);
    ccSetSize(0, int0, 1, 0);
    ccSetPosition(0, 0, 1, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(1, 1, 0);
    ccSetColour(colour(0xFF981F));
    ccSetTextShadow(true);
    ccSetText(varcstr_352);

    if (int0 > ifGetHeight(Component.interface_17.component_17_26)) {
        ifSetScrollSize(0, int0, Component.interface_17.component_17_26);
        proc_scrollbar_vertical(Component.interface_17.component_17_27, Component.interface_17.component_17_26, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
        ifSetHide(false, Component.interface_17.component_17_27);
        ifSetPosition(0, 0, 0, 0, Component.interface_17.component_17_26);
    } else {
        ifSetScrollSize(0, 0, Component.interface_17.component_17_26);
        ifSetHide(true, Component.interface_17.component_17_27);
        ifSetPosition(0, 0, 1, 0, Component.interface_17.component_17_26);
        ifSetScrollPos(0, 0, Component.interface_17.component_17_26);
    }
}
