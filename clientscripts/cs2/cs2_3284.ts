/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_3284

function cs2_3284(intArg0: number, intArg1: component, intArg2: component, intArg3: component): void {
    let int4: number = 61 + 10 * (intArg0 - 1);

    soundSynth(Sound.sound_8809, 1, 0);
    ifSetPosition(0, int4, 0, 0, intArg1);
    ifSetText(tostring(intArg0), intArg2);

    switch (enumOp(type_int, type_int, Enum.enum_1264, intArg0)) {
        case 1:
            ifSetText("Frozen", intArg3);
            break;
        case 2:
            ifSetText("Abandoned", intArg3);
            break;
        case 3:
            ifSetText("Furnished", intArg3);
            break;
        case 4:
            ifSetText("Occult", intArg3);
            break;
        case 5:
            ifSetText("Warped", intArg3);
            break;
        default:
            ifSetText("Dungeon", intArg3);
            break;
    }
}
