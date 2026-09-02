/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,worldmap_keysort_button]

function worldmap_keysort_button(intArg0: component, intArg1: component, intArg2: component): void {
    switch (varbit_worldmap_keysort) {
        case 0:
            worldmap_key_build(1, intArg0, intArg1, intArg2);
            break;
        case 1:
            worldmap_key_build(2, intArg0, intArg1, intArg2);
            break;
        default:
            worldmap_key_build(0, intArg0, intArg1, intArg2);
            break;
    }
}
