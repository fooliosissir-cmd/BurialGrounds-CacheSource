/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1143

function cs2_1143(strArg0: string, intArg0: graphic, strArg1: string, strArg2: string, intArg1: graphic, strArg3: string, strArg4: string, intArg2: graphic, strArg5: string, strArg6: string, intArg3: graphic, strArg7: string): void {
    let int4: number = 0;

    if (compare(strArg0, "") != 0 && intArg0 != -1) {
        ifSetGraphic(intArg0, Component.interface_884.component_884_25);
        ifSetText(strArg0, Component.interface_884.component_884_26);
        ifSetHide(false, Component.interface_884.component_884_7);
        ifSetOp(1, strArg0, Component.interface_884.component_884_7);
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [Component.interface_884.component_884_7, Component.interface_884.component_884_14, strArg1, 25, 190]), Component.interface_884.component_884_7);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_884.component_884_14]), Component.interface_884.component_884_7);
        int4 = int4 + 1;
        ifSetPosition(...cs2_6031(int4), 0, 0, Component.interface_884.component_884_7);
    } else {
        ifClearops(Component.interface_884.component_884_7);
        ifSetHide(true, Component.interface_884.component_884_7);
    }

    if (compare(strArg2, "") != 0 && intArg1 != -1) {
        ifSetGraphic(intArg1, Component.interface_884.component_884_23);
        ifSetText(strArg2, Component.interface_884.component_884_22);
        ifSetHide(false, Component.interface_884.component_884_8);
        ifSetOp(1, strArg2, Component.interface_884.component_884_8);
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [Component.interface_884.component_884_8, Component.interface_884.component_884_14, strArg3, 25, 190]), Component.interface_884.component_884_8);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_884.component_884_14]), Component.interface_884.component_884_8);
        int4 = int4 + 1;
        ifSetPosition(...cs2_6031(int4), 0, 0, Component.interface_884.component_884_8);
    } else {
        ifClearops(Component.interface_884.component_884_8);
        ifSetHide(true, Component.interface_884.component_884_8);
    }

    if (compare(strArg4, "") != 0 && intArg2 != -1) {
        ifSetGraphic(intArg2, Component.interface_884.component_884_19);
        ifSetText(strArg4, Component.interface_884.component_884_20);
        ifSetHide(false, Component.interface_884.component_884_9);
        ifSetOp(1, strArg4, Component.interface_884.component_884_9);
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [Component.interface_884.component_884_9, Component.interface_884.component_884_14, strArg5, 25, 190]), Component.interface_884.component_884_9);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_884.component_884_14]), Component.interface_884.component_884_9);
        int4 = int4 + 1;
        ifSetPosition(...cs2_6031(int4), 0, 0, Component.interface_884.component_884_9);
    } else {
        ifClearops(Component.interface_884.component_884_9);
        ifSetHide(true, Component.interface_884.component_884_9);
    }

    if (compare(strArg6, "") != 0 && intArg3 != -1) {
        ifSetGraphic(intArg3, Component.interface_884.component_884_16);
        ifSetText(strArg6, Component.interface_884.component_884_17);
        ifSetHide(false, Component.interface_884.component_884_10);
        ifSetOp(1, strArg6, Component.interface_884.component_884_10);
        ifSetOnMouseOver(hook(cs2_38, "IIsii", [Component.interface_884.component_884_10, Component.interface_884.component_884_14, strArg7, 25, 190]), Component.interface_884.component_884_10);
        hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_884.component_884_14]), Component.interface_884.component_884_10);
        int4 = int4 + 1;
        ifSetPosition(...cs2_6031(int4), 0, 0, Component.interface_884.component_884_10);
    } else {
        ifClearops(Component.interface_884.component_884_10);
        ifSetHide(true, Component.interface_884.component_884_10);
    }
    let str8: string = "When active, you will automatically fight back if attacked.";
    ifSetOnMouseOver(hook(cs2_38, "IIsii", [Component.interface_884.component_884_11, Component.interface_884.component_884_14, str8, 25, 190]), Component.interface_884.component_884_11);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_884.component_884_14]), Component.interface_884.component_884_11);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_884.component_884_14]), Component.interface_884.component_884_4);
}
