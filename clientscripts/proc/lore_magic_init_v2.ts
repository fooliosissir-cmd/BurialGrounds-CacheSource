/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lore_magic_init_v2]

function lore_magic_init_v2(intArg0: component, intArg1: graphic, intArg2: graphic, intArg3: number, strArg0: string, strArg1: string, intArg4: obj, intArg5: number, intArg6: obj, intArg7: number, intArg8: obj, intArg9: number, intArg10: obj, intArg11: number): void {
    if (ccFind(Component.interface_662.component_662_74, 0) == 1) {
        ccSetOnTargetEnter(hook(lore_magic_entertargetmode, "I", [event_com]));
        ccSetOnOp(hook(lore_magic_leavetargetmode, "I", [event_com]));
        ccSetOnInvTransmit(hook(cs2_660, "IIddissoioioioiY", [Component.interface_662.component_662_74, intArg0, intArg1, intArg2, intArg3, strArg0, strArg1, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11], [93]));
        ccSetOnStatTransmit(hook(cs2_660, "IIddissoioioioiY", [Component.interface_662.component_662_74, intArg0, intArg1, intArg2, intArg3, strArg0, strArg1, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11], [23]));
        ccSetOnVarTransmit(hook(cs2_660, "IIddissoioioioiY", [Component.interface_662.component_662_74, intArg0, intArg1, intArg2, intArg3, strArg0, strArg1, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11], [1175, 448]));
        cs2_661(Component.interface_662.component_662_74, intArg0, intArg1, intArg2, intArg3, strArg0, strArg1, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11);
    }

    if (ccFind(Component.interface_747.component_747_18, 0) == 1) {
        ccSetOnTargetEnter(hook(cs2_697, "I", [Component.interface_747.component_747_2]));
        ccSetOnOp(hook(cs2_698, "I", [Component.interface_747.component_747_2]));
    }
}
