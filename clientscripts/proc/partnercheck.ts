/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,partnercheck]

function partnercheck(intArg0: number): number {
    let int1: number = chatGethistorytype(intArg0);

    if (varc_chat_view == 5 && stringLength(varcstr_partnername) > 0) {
        switch (int1) {
            case 2:
            case 1:
            case 3:
            case 6:
            case 7:
            case 41:
            case 18:
            case 19:
            case 42:
                if (compare(removetags(unknownCommand5019(intArg0)), removetags(varcstr_partnername)) == 0 || compare(removetags(unknownCommand5019(intArg0)), removetags(chatPlayerName())) == 0) {
                    if (chatGetFilterTrade() == 0) {
                        return 1;
                    }
                    if (chatGetFilterTrade() == 1 && friendTest(unknownCommand5019(intArg0)) == 1) {
                        return 1;
                    }
                    if (int1 == 1 || int1 == 7) {
                        return 1;
                    }
                }
                break;
        }
    }
    return 0;
}
