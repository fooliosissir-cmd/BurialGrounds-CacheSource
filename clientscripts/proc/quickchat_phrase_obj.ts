/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_phrase_obj]

function proc_quickchat_phrase_obj(intArg0: component, intArg1: number, intArg2: obj): void {
    switch (varc_134) {
        case 0:
            varc_145 = intArg2;
            break;
        case 1:
            varc_146 = intArg2;
            break;
        case 2:
            varc_147 = intArg2;
            break;
        case 3:
            varc_148 = intArg2;
            break;
        case 4:
            varc_149 = intArg2;
            break;
        case 5:
            varc_150 = intArg2;
            break;
        case 6:
            varc_151 = intArg2;
            break;
        case 7:
            varc_152 = intArg2;
            break;
        case 8:
            varc_153 = intArg2;
            break;
        case 9:
            varc_154 = intArg2;
            break;
    }
    varc_134 = varc_134 + 1;
    quickchat_phrase_setup(intArg0, intArg1);
}
