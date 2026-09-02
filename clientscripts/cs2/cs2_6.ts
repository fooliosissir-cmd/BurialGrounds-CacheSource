/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6

function cs2_6(intArg0: component, intArg1: component, intArg2: graphic, intArg3: graphic, intArg4: number, intArg5: boolean, intArg6: obj, intArg7: number, intArg8: obj, intArg9: number, intArg10: obj, intArg11: number, intArg12: obj, intArg13: number, strArg0: string, strArg1: string): void {
    ifSetOpBase("<col=00ff00>" + strArg0, intArg0);
    cs2_21(intArg0, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, intArg12, intArg13);
    ifSetClickMask(false, intArg0);
    ifSetOnMouseOver(hook(cs2_10, "IIissoioioioi", [intArg0, intArg1, intArg4, strArg0, strArg1, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, intArg12, intArg13]), intArg0);
    hookMouseExit(hook(magic_deltooltip, "I", [intArg1]), intArg0);

    if (ifGetTargetMask(intArg0) != 0) {
        ifSetOnTargetEnter(hook(magic_entertargetmode, "I", [intArg0]), intArg0);
        ifSetOnOp(hook(magic_leavetargetmode, "I", [intArg0]), intArg0);
    }
    ifSetOnInvTransmit(hook(cs2_16, "Iddi1oioioioiY", [intArg0, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, intArg12, intArg13], [93]), intArg0);
    ifSetOnStatTransmit(hook(cs2_16, "Iddi1oioioioiY", [intArg0, intArg2, intArg3, intArg4, intArg5, intArg6, intArg7, intArg8, intArg9, intArg10, intArg11, intArg12, intArg13], [6]), intArg0);
}
