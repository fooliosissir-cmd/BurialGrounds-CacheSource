/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4504

function cs2_4504(intArg0: component): void {
    let int1: component = ifGetLayer(intArg0);

    if (int1 == -1) {
        return;
    }
    let int2: number = ifGetNextSubId(int1) - 1;

    while (int2 >= 0) {
        if (ccFind(int1, int2) == 1) {
            ccClearops();
        }
        int2 = int2 - 1;
    }
    ifSetHide(true, int1);
    cs2_6364(int1);
}
