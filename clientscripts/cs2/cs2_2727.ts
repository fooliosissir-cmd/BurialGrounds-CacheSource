/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2727

function cs2_2727(): number {
    if (testBit(worldListSpecificThisworld(), 10) == 1) {
        return 1;
    }
    return 0;
}
