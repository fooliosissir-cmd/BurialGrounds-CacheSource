/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,player_kit_player_rotate]

function player_kit_player_rotate(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = 0;
    let int4: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 > 0) {
            ccSetModelAngle(ccGetmodelxof(), ccGetmodelyof(), ccGetModelAngleX(), cs2_686(ccGetModelAngleY() - 10, 2048), ccGetModelAngleZ(), ccGetModelZoom());
        } else if (intArg2 < 0) {
            ccSetModelAngle(ccGetmodelxof(), ccGetmodelyof(), ccGetModelAngleX(), (ccGetModelAngleY() + 10) % 2048, ccGetModelAngleZ(), ccGetModelZoom());
        } else {
            int3 = ccGetModelAngleY();
            if (int3 > 1024) {
                int4 = int3 + 15;
                if (int4 >= 2048) {
                    int4 = 0;
                }
                ccSetModelAngle(ccGetmodelxof(), ccGetmodelyof(), ccGetModelAngleX(), int4, ccGetModelAngleZ(), ccGetModelZoom());
            } else if (int3 > 0) {
                ccSetModelAngle(ccGetmodelxof(), ccGetmodelyof(), ccGetModelAngleX(), max(int3 - 15, 0), ccGetModelAngleZ(), ccGetModelZoom());
            } else {
                ccSetOnTimer(noHook(""));
            }
        }
    }
}
