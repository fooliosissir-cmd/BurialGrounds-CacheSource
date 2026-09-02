/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,inventory_drag]

function inventory_drag(intArg0: component, intArg1: number, intArg2: component, intArg3: number): void {
    if (intArg0 != intArg2) {
        return;
    }
    let int4: number = invSize(93);
    intArg1 = intArg1 % int4;
    intArg3 = intArg3 % int4;
    let int5: obj = -1;
    let int6: number = 0;

    if (ccFind(intArg0, intArg1) == 1 && ccFind<1>(intArg2, intArg3) == 1) {
        [int5, int6] = [ccGetInvObject(), ccGetInvCount()];
        ccSetObject(ccGetInvObject<1>(), ccGetInvCount<1>());
        ccSetObject<1>(int5, int6);
        ccClearops();
        ccClearops<1>();
        if (ccGetInvObject() != -1) {
            ccSetHide(false);
            inventory_setophelds(ccGetInvObject());
        } else {
            ccSetOnVarTransmit(noHook(""));
            ccSetHide(true);
        }
        if (ccFind(intArg2, intArg3) == 1) {
            if (ccGetInvObject() != -1) {
                ccSetHide(false);
                inventory_setophelds(ccGetInvObject());
            } else {
                ccSetOnVarTransmit(noHook(""));
                ccSetHide(true);
            }
        }
    }
}
