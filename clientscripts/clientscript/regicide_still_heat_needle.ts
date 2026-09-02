/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,regicide_still_heat_needle]

function regicide_still_heat_needle(intArg0: component): void {
    if (testBit(varp_regicide_still_settings, 13) == 1) {
        ifSetModelAngle(0, 0, 512, 1536, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 14) == 1) {
        ifSetModelAngle(0, 0, 512, 1664, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 15) == 1) {
        ifSetModelAngle(0, 0, 512, 1792, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 16) == 1) {
        ifSetModelAngle(0, 0, 512, 1920, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 17) == 1) {
        ifSetModelAngle(0, 0, 512, 0, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 18) == 1) {
        ifSetModelAngle(0, 0, 512, 128, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 19) == 1) {
        ifSetModelAngle(0, 0, 512, 256, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 20) == 1) {
        ifSetModelAngle(0, 0, 512, 384, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 21) == 1) {
        ifSetModelAngle(0, 0, 512, 512, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 22) == 1) {
        ifSetModelAngle(0, 0, 512, 640, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 23) == 1) {
        ifSetModelAngle(0, 0, 512, 768, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 24) == 1) {
        ifSetModelAngle(0, 0, 512, 896, 0, 400, intArg0);
    } else if (testBit(varp_regicide_still_settings, 25) == 1) {
        ifSetModelAngle(0, 0, 512, 1024, 0, 400, intArg0);
    }
}
