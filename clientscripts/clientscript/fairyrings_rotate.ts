/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,fairyrings_rotate]

function fairyrings_rotate(intArg0: component, intArg1: component, intArg2: component, intArg3: component, intArg4: component, intArg5: component, intArg6: component, intArg7: component, intArg8: component, intArg9: component, intArg10: component, intArg11: component, intArg12: component, intArg13: component, intArg14: component, intArg15: component, intArg16: component): void {
    fairyrings_rotate_component(intArg0, varc_122);
    fairyrings_rotate_component(intArg1, varc_122);
    fairyrings_rotate_component(intArg2, varc_122);
    fairyrings_rotate_component(intArg3, varc_122);
    fairyrings_rotate_component(intArg4, varc_122);
    fairyrings_rotate_component(intArg5, varc_123);
    fairyrings_rotate_component(intArg6, varc_123);
    fairyrings_rotate_component(intArg7, varc_123);
    fairyrings_rotate_component(intArg8, varc_123);
    fairyrings_rotate_component(intArg9, varc_123);
    fairyrings_rotate_component(intArg10, varc_124);
    fairyrings_rotate_component(intArg11, varc_124);
    fairyrings_rotate_component(intArg12, varc_124);
    fairyrings_rotate_component(intArg13, varc_124);
    fairyrings_rotate_component(intArg14, varc_124);

    if (varc_125 < clientClock()) {
        ifSetHide(false, intArg15);
        ifSetHide(true, intArg16);
    } else {
        if (varc_156 <= clientClock() && varc_157 == 1) {
            soundVorbisRate(7540, 1, 0, 100, randomSoundPitch(15, 15));
            varc_156 = clientClock() + 30;
        }
        ifSetHide(true, intArg15);
        ifSetHide(false, intArg16);
    }
}
