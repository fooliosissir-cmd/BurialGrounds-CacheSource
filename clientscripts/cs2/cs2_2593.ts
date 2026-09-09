/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2593

function cs2_2593(intArg0: number): void {
    if (intArg0 == 0) {
        if (detailGetGroundblending() == 0) {
            detailWaterDetailHigh(0);
            detailFogOn(0);
            detailTexturing(0);
        } else if (detailGetFogOn() == 0) {
            detailWaterDetailHigh(0);
        }
    }
}
