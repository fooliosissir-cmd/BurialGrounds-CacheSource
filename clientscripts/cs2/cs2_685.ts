/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_685

function cs2_685(intArg0: component, intArg1: number, intArg2: number, intArg3: number, intArg4: number, intArg5: number): void {
    intArg3 = (intArg3 + intArg5) % (intArg4 * 4);

    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg3 <= intArg4) {
            ccSetModelAngle(0, 0, ccGetModelAngleX(), (intArg2 + intArg3) % 2048, ccGetModelAngleZ(), ccGetModelZoom());
        } else if (intArg3 <= intArg4 * 2) {
            ccSetModelAngle(0, 0, ccGetModelAngleX(), (intArg2 + intArg4 - (intArg3 - intArg4)) % 2048, ccGetModelAngleZ(), ccGetModelZoom());
        } else if (intArg3 <= intArg4 * 3) {
            ccSetModelAngle(0, 0, ccGetModelAngleX(), cs2_686(intArg2 - (intArg3 - intArg4 * 2), 2048), ccGetModelAngleZ(), ccGetModelZoom());
        } else {
            ccSetModelAngle(0, 0, ccGetModelAngleX(), cs2_686(intArg2 - intArg4 + (intArg3 - intArg4 * 3), 2048), ccGetModelAngleZ(), ccGetModelZoom());
        }
        ccSetOnTimer(hook(cs2_685, "Iiiiii", [event_com, event_comsubid, intArg2, intArg3, intArg4, intArg5]));
    }
}
