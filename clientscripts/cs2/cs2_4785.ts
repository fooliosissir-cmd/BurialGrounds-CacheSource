/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4785

function cs2_4785(): number {
    switch (pushVarClanBit<2580>()) {
        case 1:
            if (cs2_4789(1) < 1) {
                return 0;
            }
            break;
        case 2:
            if (cs2_4789(1) < 2) {
                return 0;
            }
            if (cs2_4789(2) < 1) {
                return 0;
            }
            break;
        case 3:
            if (cs2_4789(1) < 2) {
                return 0;
            }
            if (cs2_4789(2) < 2) {
                return 0;
            }
            if (cs2_4789(4) < 2) {
                return 0;
            }
            if (cs2_4789(3) < 2) {
                return 0;
            }
            break;
        case 4:
            if (cs2_4789(1) < 3) {
                return 0;
            }
            if (cs2_4789(2) < 4) {
                return 0;
            }
            if (cs2_4789(4) < 4) {
                return 0;
            }
            if (cs2_4789(3) < 3) {
                return 0;
            }
            break;
        case 5:
            if (cs2_4789(1) < 4) {
                return 0;
            }
            if (cs2_4789(2) < 4) {
                return 0;
            }
            if (cs2_4789(4) < 5) {
                return 0;
            }
            if (cs2_4789(3) < 5) {
                return 0;
            }
            if (cs2_4789(5) < 3) {
                return 0;
            }
            if (cs2_4789(7) < 3) {
                return 0;
            }
            break;
        case 6:
            if (cs2_4789(1) < 6) {
                return 0;
            }
            if (cs2_4789(2) < 6) {
                return 0;
            }
            if (cs2_4789(4) < 6) {
                return 0;
            }
            if (cs2_4789(3) < 6) {
                return 0;
            }
            if (cs2_4789(5) < 6) {
                return 0;
            }
            if (cs2_4789(7) < 6) {
                return 0;
            }
            if (cs2_4789(6) < 6) {
                return 0;
            }
            break;
    }
    return 1;
}
