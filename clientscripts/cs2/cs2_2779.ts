/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2779

function cs2_2779(intArg0: number, intArg1: number, strArg0: string, intArg2: number, intArg3: graphic, intArg4: number, intArg5: number, strArg1: string, strArg2: string, intArg6: number, strArg3: string, strArg4: string, intArg7: number): void {
    if (ifGetHide(Component.interface_906.component_906_44) == 0) {
        return;
    }
    ifClearops(Component.interface_906.component_906_253);
    ifClearops(Component.interface_906.component_906_258);
    ifSetOnOp(noHook(""), Component.interface_906.component_906_253);
    ifSetOnOp(noHook(""), Component.interface_906.component_906_258);
    let int8: number = intArg7;

    if (intArg4 == 1) {
        int8 = max(intArg7, stringWidth(strArg1, Graphic.verdana_11pt_regular) + 26);
        if (int8 % 2 == 0) {
            int8 = int8 + 1;
        }
    }
    ifSetSize(int8, 154, 0, 0, Component.interface_906.component_906_44);
    let int9: number = paraheight(strArg0, ifGetWidth(Component.interface_906.component_906_252), Graphic.verdana_11pt_regular) * 16 + 5;
    ifSetSize(20, int9, 1, 0, Component.interface_906.component_906_252);
    ifSetText(strArg0, Component.interface_906.component_906_252);

    if (intArg2 == 1) {
        varc_1092 = clientClock() + 5;
        ifSetGraphic(Graphic.loading_wheel_1_0, Component.interface_906.component_906_251);
        ifSetSize(111, 111, 0, 0, Component.interface_906.component_906_251);
        ifSetPosition(0, 7, 1, 0, Component.interface_906.component_906_251);
        ifSetPosition(0, 112, 1, 0, Component.interface_906.component_906_252);
        ifSetOnTimer(hook(cs2_3094, "", []), Component.interface_906.component_906_251);
    } else {
        varc_1092 = 0;
        ifSetOnTimer(noHook(""), Component.interface_906.component_906_251);
        ifSetGraphic(intArg3, Component.interface_906.component_906_251);
        ifSetSize(76, 63, 0, 0, Component.interface_906.component_906_251);
        ifSetPosition(0, 18, 1, 0, Component.interface_906.component_906_251);
        ifSetPosition(0, 123, 1, 0, Component.interface_906.component_906_252);
        int9 = int9 - 35;
    }
    let int10: number = 0;
    int9 = ifGetY(Component.interface_906.component_906_252) + int9;

    if (intArg4 == 0 && intArg6 == 0) {
        int10 = 12;
        int9 = int9 + int10;
        ifSetHide(true, Component.interface_906.component_906_253);
        ifSetHide(true, Component.interface_906.component_906_258);
    } else if (intArg4 == 1 && intArg6 == 0) {
        int10 = 41;
        int9 = int9 + int10;
        ifSetPosition(0, 8, 1, 2, Component.interface_906.component_906_253);
        ifSetHide(false, Component.interface_906.component_906_253);
        ifSetHide(true, Component.interface_906.component_906_258);
        cs2_3098(strArg1, strArg2, Component.interface_906.component_906_253, Component.interface_906.component_906_254, Component.interface_906.component_906_255, Component.interface_906.component_906_256, intArg5);
    } else if (intArg4 == 0 && intArg6 == 1) {
        int10 = 41;
        int9 = int9 + int10;
        ifSetPosition(0, 8, 1, 2, Component.interface_906.component_906_258);
        ifSetHide(false, Component.interface_906.component_906_258);
        ifSetHide(true, Component.interface_906.component_906_253);
        cs2_3099(strArg3, strArg4, Component.interface_906.component_906_258, Component.interface_906.component_906_259, Component.interface_906.component_906_260, Component.interface_906.component_906_261);
    } else {
        int10 = 70;
        int9 = int9 + int10;
        ifSetPosition(0, 40, 1, 2, Component.interface_906.component_906_253);
        ifSetPosition(0, 10, 1, 2, Component.interface_906.component_906_258);
        ifSetHide(false, Component.interface_906.component_906_258);
        ifSetHide(false, Component.interface_906.component_906_253);
        cs2_3098(strArg1, strArg2, Component.interface_906.component_906_253, Component.interface_906.component_906_254, Component.interface_906.component_906_255, Component.interface_906.component_906_256, intArg5);
        cs2_3099(strArg3, strArg4, Component.interface_906.component_906_258, Component.interface_906.component_906_259, Component.interface_906.component_906_260, Component.interface_906.component_906_261);
    }
    ifSetSize(ifGetWidth(Component.interface_906.component_906_44), int9, 0, 0, Component.interface_906.component_906_44);
    cs2_3095(Component.interface_906.component_906_253, Component.interface_906.component_906_258, intArg0);
    ifSetPosition(0, int10, 1, 2, Component.interface_906.component_906_252);
    ifSetOnKey(hook(cs2_3100, "i", [event_keycode]), Component.interface_906.component_906_59);
    ifSetHide(false, Component.interface_906.component_906_59);
    ifSetHide(false, Component.interface_906.component_906_44);
}
