/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3395

function cs2_3395(): void {
    let int0: number = 0;

    while (int0 < ifGetNextSubId(Component.interface_979.component_979_25)) {
        if (ccFind(Component.interface_979.component_979_25, int0) == 1) {
            ccSetTrans(255);
        }
        int0 = int0 + 1;
    }

    if (ccFind(Component.interface_979.component_979_25, varc_792) == 1) {
        ccSetTrans(0);
    }
}
