/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,regicide_still_left_wheel]

function regicide_still_left_wheel(intArg0: component): void {
    if (testBit(varp_regicide_still_settings, 26) == 1) {
        ifSetModelAngle(0, 0, 512, 1024, 0, 1000, intArg0);
    } else if (testBit(varp_regicide_still_settings, 27) == 1) {
        ifSetModelAngle(0, 0, 512, 1536, 0, 1000, intArg0);
    } else if (testBit(varp_regicide_still_settings, 28) == 1) {
        ifSetModelAngle(0, 0, 512, 0, 0, 1000, intArg0);
    }
}
