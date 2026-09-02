/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,rm_block_getvar]

function rm_block_getvar(intArg0: number): number {
    switch (intArg0) {
        case 0:
            return varbit_rm_block_0;
        case 1:
            return varbit_rm_block_1;
        case 2:
            return varbit_rm_block_2;
        case 3:
            return varbit_rm_block_3;
        case 4:
            return varbit_rm_block_4;
        case 5:
            return varbit_rm_block_5;
        case 6:
            return varbit_rm_block_6;
        case 7:
            return varbit_rm_block_7;
        case 8:
            return varbit_rm_block_8;
    }
    return 0;
}
