/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lore_updateicon_v2]

function lore_updateicon_v2(intArg0: component, intArg1: graphic, intArg2: graphic, intArg3: number, intArg4: obj, intArg5: number, intArg6: obj, intArg7: number, intArg8: obj, intArg9: number, intArg10: obj, intArg11: number): void {
    if (ifGetHide(intArg0) == 0 && ccFind(intArg0, 0) == 1) {
        if (intArg4 != -1 && magic_runecount(intArg4, Component.interface_662.component_662_74) < intArg5) {
            ccSetGraphic(intArg2);
            return;
        }
        if (intArg6 != -1 && magic_runecount(intArg6, Component.interface_662.component_662_74) < intArg7) {
            ccSetGraphic(intArg2);
            return;
        }
        if (intArg8 != -1 && magic_runecount(intArg8, Component.interface_662.component_662_74) < intArg9) {
            ccSetGraphic(intArg2);
            return;
        }
        if (intArg10 != -1 && magic_runecount(intArg10, Component.interface_662.component_662_74) < intArg11) {
            ccSetGraphic(intArg2);
            return;
        }
        if (statBase(23) < intArg3) {
            ccSetGraphic(intArg2);
        } else {
            ccSetGraphic(intArg1);
        }
    }
}
