/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_184

function cs2_184(intArg0: number, intArg1: number): void {
    switch (intArg0) {
        case 1:
            if (intArg1 > 0) {
                varbit_chat_filter_gamespam = 1;
            } else {
                varbit_chat_filter_gamespam = 0;
            }
            break;
        case 2:
            chatSetFilter(intArg1, chatGetFilterPrivate(), chatGetFilterTrade());
            break;
        case 3:
            chatSetFilter(chatGetFilterPublic(), intArg1, chatGetFilterTrade());
            break;
        case 4:
            varp_2159 = intArg1;
            break;
        case 5:
            chatSetFilter(chatGetFilterPublic(), chatGetFilterPrivate(), intArg1);
            break;
        case 6:
            varp_1055 = intArg1;
            break;
        case 7:
            varp_1054 = intArg1;
            break;
    }
}
