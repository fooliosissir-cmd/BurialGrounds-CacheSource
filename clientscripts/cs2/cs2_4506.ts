/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4506

function cs2_4506(intArg0: component, intArg1: component, intArg2: component): void {
    let int3: component = ifGetLayer(intArg0);

    if (int3 == -1) {
        return;
    }
    let int4: component = ifGetLayer(int3);

    if (int4 == -1) {
        return;
    }
    let int5: component = ifGetLayer(intArg1);

    if (int5 == -1) {
        return;
    }
    ifSetHide(false, int3);
    ifSetnoclickthrough(true, int3);

    if (intArg2 != -1) {
        ifSetHide(false, intArg2);
    }
    let int6: number = ifGetNextSubId(intArg0) - 1;

    while (int6 >= 0) {
        if (ccFind(intArg0, int6) == 1 && stringLength(ccGetText()) > 0) {
            ccSetOp(1, "Select");
            ccSetOnOp(hook(cs2_4507, "iII", [event_comsubid, intArg0, intArg1]));
        }
        int6 = int6 - 1;
    }
    cs2_6360(int3);
}
