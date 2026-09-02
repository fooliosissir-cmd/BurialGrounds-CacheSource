/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_193

function cs2_193(intArg0: number): number {
    if (varc_chat_view == 0) {
        return 1;
    }
    let int1: number = chatGettypebyline(intArg0);

    if (int1 == -1) {
        return 0;
    } else if (int1 == 115 || int1 == 120) {
        return 1;
    }

    switch (varc_chat_view) {
        case 1:
            if (int1 == 0 || int1 == 4 || int1 == 27 || int1 == 28 || int1 == 29 || int1 == 109 || int1 == 110 || int1 == 26 || int1 == 117) {
                return 1;
            }
            break;
        case 2:
            if (int1 == 1 || int1 == 2 || int1 == 17 || int1 == 116) {
                return 1;
            }
            break;
        case 3:
            switch (int1) {
                case 3:
                case 6:
                case 5:
                case 18:
                case 19:
                case 7:
                case 30:
                case 31:
                    return 1;
            }
            break;
        case 4:
            switch (int1) {
                case 9:
                case 11:
                case 20:
                    return 1;
            }
            break;
        case 5:
            switch (int1) {
                case 100:
                case 101:
                case 103:
                case 105:
                case 106:
                case 108:
                case 111:
                case 112:
                case 113:
                case 114:
                case 118:
                case 119:
                    return 1;
            }
            if (partnercheck(intArg0) == 1) {
                return 1;
            }
            break;
        case 6:
            if (int1 == 102 || int1 == 104) {
                return 1;
            }
            break;
        case 7:
            switch (int1) {
                case 41:
                case 43:
                case 107:
                case 42:
                case 44:
                case 46:
                case 45:
                    return 1;
            }
            break;
    }
    return 0;
}
