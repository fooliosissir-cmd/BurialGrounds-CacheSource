/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5071

function cs2_5071(intArg0: number, intArg1: number, intArg2: number, intArg3: Enum): void {
    if (intArg0 != 1 || intArg3 == -1) {
        return;
    }

    if (intArg2 >= min(enumGetoutputcount(intArg3), 256)) {
        return;
    }

    switch (intArg1) {
        case 1:
            varbit_clan_field_editor_option1 = intArg2;
            break;
        case 2:
            varbit_clan_field_editor_option2 = intArg2;
            break;
        case 3:
            varbit_clan_field_editor_option3 = intArg2;
            break;
        default:
            return;
    }
    soundVorbisVolume(6185, 1, 0, 200);
    cs2_5067();
}
