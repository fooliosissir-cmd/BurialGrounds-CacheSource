/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,hex_to_rgb]

function hex_to_rgb(intArg0: colour): [number, number, number] {
    return [intArg0 / 65536, (intArg0 & 0xFF00) / 256, intArg0 & 0xFF];
}
