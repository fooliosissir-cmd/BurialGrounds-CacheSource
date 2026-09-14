/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2696

function cs2_2696(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: struct, intArg6: number, intArg7: number, intArg8: number, intArg9: number, intArg10: number): void {
    if (intArg10 == 1) {
        ccDeleteAll(Component.interface_742.component_742_21);
        ccDeleteAll(Component.interface_742.component_742_22);
        ifSetHide(true, Component.interface_742.component_742_20);
        ifSetOnClick(noHook(""), Component.interface_742.component_742_4);
    } else if (intArg10 == 2) {
        ccDeleteAll(Component.interface_911.component_911_73);
        ccDeleteAll(Component.interface_911.component_911_66);
        ifSetHide(true, Component.interface_911.component_911_74);
        ifSetOnClick(noHook(""), Component.interface_911.component_911_1);
    } else {
        ccDeleteAll(Component.interface_882.component_882_6);
        ccDeleteAll(Component.interface_882.component_882_7);
        ifSetHide(true, Component.interface_882.component_882_5);
        ifSetOnClick(noHook(""), Component.interface_882.component_882_4);
    }

    if (ccFind(intArg0, intArg2) == 1) {
        ccSetGraphic(Graphic.graphic_2554);
    }

    if (intArg4 != -1 && ccFind(intArg0, intArg4) == 1) {
        ccSetColour(colour(0xEBE0BC));
    }

    if (ccFind(intArg0, intArg1) == 1) {
        ccSetOnClick(hook(cs2_2695, "IiiiiJiiiii", [event_com, event_comsubid, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10]));
        ccSetOnMouseOver(hook(cs2_2691, "Ii1ii1", [event_com, intArg2, true, intArg3, colour(0x80786D), true]));
        ccSetOnMouseLeave(hook(cs2_2691, "Ii1ii1", [event_com, intArg2, false, intArg3, colour(0x5F5B52), true]));
        if (ccFind<1>(intArg0, intArg3) == 1) {
            ccSetColour<1>(colour(0x5F5B52));
            ccSetSize<1>(ccGetWidth<1>(), ccGetHeight(), 0, 0);
        }
    }
}
