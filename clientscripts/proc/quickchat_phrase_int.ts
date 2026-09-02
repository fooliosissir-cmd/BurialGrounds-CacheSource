/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_phrase_int]

function proc_quickchat_phrase_int(intArg0: component, intArg1: number, intArg2: number): void {
    switch (varc_134) {
        case 0:
            varc_135 = intArg2;
            break;
        case 1:
            varc_136 = intArg2;
            break;
        case 2:
            varc_137 = intArg2;
            break;
        case 3:
            varc_138 = intArg2;
            break;
        case 4:
            varc_139 = intArg2;
            break;
        case 5:
            varc_140 = intArg2;
            break;
        case 6:
            varc_141 = intArg2;
            break;
        case 7:
            varc_142 = intArg2;
            break;
        case 8:
            varc_143 = intArg2;
            break;
        case 9:
            varc_144 = intArg2;
            break;
    }
    varc_134 = varc_134 + 1;
    quickchat_phrase_setup(intArg0, intArg1);
}
