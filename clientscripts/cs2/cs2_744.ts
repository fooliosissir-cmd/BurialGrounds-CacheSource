/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_744

function cs2_744(intArg0: component, intArg1: number, intArg2: component, intArg3: number, intArg4: number): void {
    let int5: obj = -1;
    let int6: obj = -1;

    if (intArg0 == Component.interface_18.component_18_9) {
        if (intArg2 == Component.interface_18.component_18_9) {
            if (ccFind(intArg0, intArg1) == 1 && ccFind<1>(intArg2, intArg3) == 1) {
                [int5, int6] = [ccGetInvObject(), ccGetInvObject<1>()];
                ccSetObjectNonum(int6, 1);
                ccSetObjectNonum<1>(int5, 1);
                ccSetOpBase("<col=ff9040>" + ocName(int6) + "</col>");
                ccSetOpBase<1>("<col=ff9040>" + ocName(int5) + "</col>");
            }
            return;
        }
        if (intArg2 == Component.interface_18.component_18_17) {
            cs2_1535(intArg1, 0);
            cs2_59(intArg4);
        }
        return;
    }

    if (intArg0 == Component.interface_18.component_18_17 && intArg2 == Component.interface_18.component_18_9) {
        cs2_1535(intArg3, intArg1);
        cs2_59(intArg4);
    }
}
