/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,regicide_still_pressure_needle]

function regicide_still_pressure_needle(intArg0: component): void {
    if (testBit(varp_regicide_still_settings, 0) == 1) {
        ifSetModelAngle(0, 0, 512, 1536, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 1) == 1) {
        ifSetModelAngle(0, 0, 512, 1664, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 2) == 1) {
        ifSetModelAngle(0, 0, 512, 1792, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 3) == 1) {
        ifSetModelAngle(0, 0, 512, 1920, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 4) == 1) {
        ifSetModelAngle(0, 0, 512, 0, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 5) == 1) {
        ifSetModelAngle(0, 0, 512, 128, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 6) == 1) {
        ifSetModelAngle(0, 0, 512, 256, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 7) == 1) {
        ifSetModelAngle(0, 0, 512, 384, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 8) == 1) {
        ifSetModelAngle(0, 0, 512, 512, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 9) == 1) {
        ifSetModelAngle(0, 0, 512, 640, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 10) == 1) {
        ifSetModelAngle(0, 0, 512, 768, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 11) == 1) {
        ifSetModelAngle(0, 0, 512, 896, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 12) == 1) {
        ifSetModelAngle(0, 0, 512, 1024, 0, 400, intArg0);
    }
}
