/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2295

function cs2_2295(intArg0: number): number {
    if (mapMembers() == 0 && cs2_2294(intArg0) == 1) {
        return 0;
    }

    if (prayer_points_level() == 0) {
        soundSynth(Sound.sound_2673, 1, 0);
        return 0;
    }
    let int1: Enum = Enum.enum_2279;

    if (varbit_prayer_mode == 1) {
        int1 = Enum.enum_863;
    }

    if (statBase(5) < structParam(enumOp(type_int, type_struct, int1, intArg0), Param.prayer_level_req)) {
        soundSynth(Sound.sound_2673, 1, 0);
        return 0;
    }

    if (intArg0 == 25 && (statBase(1) < 55 || varbit_kr_knightwaves_state != 8)) {
        soundSynth(Sound.sound_2673, 1, 0);
        return 0;
    }

    if (intArg0 == 26 && (statBase(1) < 70 || varbit_kr_knightwaves_state != 8)) {
        soundSynth(Sound.sound_2673, 1, 0);
        return 0;
    }
    return 1;
}
