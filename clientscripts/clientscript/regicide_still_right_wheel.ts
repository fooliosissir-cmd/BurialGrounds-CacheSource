/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,regicide_still_right_wheel]

function regicide_still_right_wheel(intArg0: component): void {
    if (testBit(varp_regicide_still_settings, 29) == 1) {
        ifSetModelAngle(0, 0, 512, 1024, 0, 1000, intArg0);
    } else if (testBit(varp_regicide_still_settings, 30) == 1) {
        ifSetModelAngle(0, 0, 512, 1536, 0, 1000, intArg0);
    } else if (testBit(varp_regicide_still_settings, 31) == 1) {
        ifSetModelAngle(0, 0, 512, 0, 0, 1000, intArg0);
    }
}
