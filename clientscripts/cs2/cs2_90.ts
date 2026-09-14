/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_90

function cs2_90(intArg0: number, intArg1: number): number {
    switch (chatGethistorytype(intArg0)) {
        case -1:
            return 0;
        case 0:
        case 4:
        case 27:
        case 28:
        case 29:
        case 1:
        case 110:
        case 26:
        case 30:
        case 31:
        case 115:
        case 116:
        case 117:
        case 120:
            return 1;
        case 109:
            if (varbit_chat_filter_gamespam == 1) {
                return 0;
            }
            return 1;
        case 2:
        case 17:
            if (chatGetFilterPublic() == 0) {
                return 1;
            }
            if (chatGetFilterPublic() == 1 && friendTest(unknownCommand5019(intArg0)) == 1) {
                return 1;
            }
            return 0;
        case 3:
        case 18:
            if (varp_287 > 0 && varc_chat_view >= 0 && intArg1 == 0 && partnercheck(intArg0) == 0) {
                return 0;
            }
            if (chatGetFilterPrivate() == 0) {
                return 1;
            }
            if (chatGetFilterPrivate() == 1 && friendTest(unknownCommand5019(intArg0)) == 1) {
                return 1;
            }
            return 0;
        case 100:
        case 101:
        case 105:
        case 106:
        case 108:
        case 111:
        case 112:
        case 113:
        case 114:
        case 118:
            if (chatGetFilterTrade() == 0) {
                return 1;
            }
            if (chatGetFilterTrade() == 1 && friendTest(unknownCommand5019(intArg0)) == 1) {
                return 1;
            }
            return 0;
        case 5:
        case 6:
        case 19:
            if (varp_287 > 0 && varc_chat_view >= 0 && intArg1 == 0 && partnercheck(intArg0) == 0) {
                return 0;
            }
            if (chatGetFilterPrivate() < 2) {
                return 1;
            }
            return 0;
        case 7:
            if (varp_287 > 0 && varc_chat_view >= 0 && intArg1 == 0 && partnercheck(intArg0) == 0) {
                return 0;
            }
            return 1;
        case 41:
        case 107:
        case 42:
        case 44:
        case 45:
            if (varp_1054 == 0) {
                return 1;
            }
            if (varp_1054 == 1 && friendTest(unknownCommand5019(intArg0)) == 1) {
                return 1;
            }
            return 0;
        case 9:
        case 20:
            if (varp_2159 == 0) {
                return 1;
            }
            if (varp_2159 == 1 && friendTest(unknownCommand5019(intArg0)) == 1) {
                return 1;
            }
            return 0;
        case 102:
            if (varp_1055 == 0) {
                return 1;
            }
            if (varp_1055 == 1 && friendTest(unknownCommand5019(intArg0)) == 1) {
                return 1;
            }
            return 0;
        case 11:
            if (varp_2159 < 2) {
                return 1;
            }
            return 0;
        case 43:
        case 46:
            if (varp_1054 < 2) {
                return 1;
            }
            return 0;
        case 103:
            if (chatGetFilterTrade() < 2) {
                return 1;
            }
            return 0;
        case 119:
            if (chatGetFilterTrade() >= 2 || ignoreTest(chatGethistoryname(intArg0)) == 1) {
                return 0;
            }
            break;
        case 104:
            if (varp_1055 < 2) {
                return 1;
            }
            return 0;
    }
    return 1;
}
