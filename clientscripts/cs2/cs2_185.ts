/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_185

function cs2_185(intArg0: number): number {
    switch (intArg0) {
        case 1:
            return varbit_chat_filter_gamespam;
        case 2:
            return chatGetFilterPublic();
        case 3:
            return chatGetFilterPrivate();
        case 4:
            return varp_2159;
        case 5:
            return chatGetFilterTrade();
        case 6:
            return varp_1055;
        case 7:
            return varp_1054;
    }
    return 0;
}
