/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5269

function cs2_5269(intArg0: number, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number, intArg11: number, intArg12: number, intArg13: number, intArg14: number, intArg15: number, intArg16: number, intArg17: number, intArg18: number, intArg19: number, intArg20: number, intArg21: number, intArg22: number, intArg23: number, intArg24: number, intArg25: number, intArg26: number, intArg27: number, strArg0: string, strArg1: string, strArg2: string, strArg3: string, strArg4: string, strArg5: string, strArg6: string, strArg7: string, strArg8: string, strArg9: string): void {
    let int28: number = 0;
    let int29: number = 0;
    let int30: number = 0;

    ifSetText(strArg0, Component.interface_1137.component_1137_43);
    ifSetOnMouseOver(hook(cs2_1160, "IiIsii", [event_com, -1, Component.interface_1137.component_1137_6, strArg1, 25, 519]), Component.interface_1137.component_1137_30);
    hookMouseExit(hook(clientscript_deltooltip, "I", [Component.interface_1137.component_1137_6]), Component.interface_1137.component_1137_6);
    ifSetText(tostring(intArg25), Component.interface_1137.component_1137_48);
    ifSetText(tostring(intArg26 + intArg27), Component.interface_1137.component_1137_39);
    ccDeleteAll(Component.interface_1137.component_1137_28);
    ccDeleteAll(Component.interface_1137.component_1137_83);
    ccDeleteAll(Component.interface_1137.component_1137_94);

    if (intArg0 == 1) {
        ifSetHide(true, Component.interface_1137.component_1137_15);
        ifSetHide(false, Component.interface_1137.component_1137_16);
        ifSetHide(false, Component.interface_1137.component_1137_17);
        ifSetText(tostring(intArg26), Component.interface_1137.component_1137_67);
        ifSetText(tostring(intArg27), Component.interface_1137.component_1137_73);
        if (intArg1 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_83, strArg2, intArg2, intArg3, int28);
        }
        if (intArg4 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_83, strArg3, intArg5, intArg6, int28);
        }
        if (intArg7 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_83, strArg4, intArg8, intArg9, int28);
        }
        if (intArg10 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_83, strArg5, intArg11, intArg12, int28);
        }
        if (intArg13 != -1) {
            int29 = cs2_5271(Component.interface_1137.component_1137_94, strArg6, intArg14, intArg15, int29);
        }
        if (intArg16 != -1) {
            int29 = cs2_5271(Component.interface_1137.component_1137_94, strArg7, intArg17, intArg18, int29);
        }
        if (intArg19 != -1) {
            int29 = cs2_5271(Component.interface_1137.component_1137_94, strArg8, intArg20, intArg21, int29);
        }
        if (intArg22 != -1) {
            int29 = cs2_5271(Component.interface_1137.component_1137_94, strArg9, intArg23, intArg24, int29);
        }
        while (int30 < int28) {
            int30 = cs2_5272(Component.interface_1137.component_1137_83, int30, int28);
        }
        int30 = 0;
        while (int30 < int29) {
            int30 = cs2_5272(Component.interface_1137.component_1137_94, int30, int29);
        }
    } else {
        ifSetHide(false, Component.interface_1137.component_1137_15);
        ifSetHide(true, Component.interface_1137.component_1137_16);
        ifSetHide(true, Component.interface_1137.component_1137_17);
        if (intArg1 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_28, strArg2, intArg2, intArg3, int28);
        }
        if (intArg4 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_28, strArg3, intArg5, intArg6, int28);
        }
        if (intArg7 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_28, strArg4, intArg8, intArg9, int28);
        }
        if (intArg10 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_28, strArg5, intArg11, intArg12, int28);
        }
        if (intArg13 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_28, strArg6, intArg14, intArg15, int28);
        }
        if (intArg16 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_28, strArg7, intArg17, intArg18, int28);
        }
        if (intArg19 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_28, strArg8, intArg20, intArg21, int28);
        }
        if (intArg22 != -1) {
            int28 = cs2_5271(Component.interface_1137.component_1137_28, strArg9, intArg23, intArg24, int28);
        }
        while (int30 < int28) {
            int30 = cs2_5272(Component.interface_1137.component_1137_28, int30, int28);
        }
    }
}
