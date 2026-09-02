/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1971

function cs2_1971(intArg0: number, intArg1: component): void {
    switch (intArg0) {
        case 0:
            if (varc_seer_a < 0 || varc_seer_a > 25) {
                varc_seer_a = 0;
            }
            ifSetText(enumOp(type_int, type_string, Enum.seer_letters, varc_seer_a), intArg1);
            break;
        case 1:
            if (varc_seer_b < 0 || varc_seer_b > 25) {
                varc_seer_b = 0;
            }
            ifSetText(enumOp(type_int, type_string, Enum.seer_letters, varc_seer_b), intArg1);
            break;
        case 2:
            if (varc_seer_c < 0 || varc_seer_c > 25) {
                varc_seer_c = 0;
            }
            ifSetText(enumOp(type_int, type_string, Enum.seer_letters, varc_seer_c), intArg1);
            break;
        case 3:
            if (varc_seer_d < 0 || varc_seer_d > 25) {
                varc_seer_d = 0;
            }
            ifSetText(enumOp(type_int, type_string, Enum.seer_letters, varc_seer_d), intArg1);
            break;
    }
}
