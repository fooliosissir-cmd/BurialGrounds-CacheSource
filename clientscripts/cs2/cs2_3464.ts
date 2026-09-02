/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3464

function cs2_3464(intArg0: component, intArg1: number): void {
    if (ccFind(intArg0, intArg1) == 1) {
        ccSetModelAngle(ccGetmodelxof(), ccGetmodelyof(), ccGetModelAngleX(), (ccGetModelAngleY() + 2) % 2028, ccGetModelAngleZ(), ccGetModelZoom());
    }
}
