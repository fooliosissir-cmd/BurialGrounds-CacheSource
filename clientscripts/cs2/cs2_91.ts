/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_91

function cs2_91(intArg0: number): number {
    switch (chatGethistorytype(intArg0)) {
        case 7:
            return 1;
        case 3:
        case 18:
            if (chatGetFilterPrivate() == 0) {
                return 1;
            }
            if (chatGetFilterPrivate() == 1 && friendTest(unknownCommand5019(intArg0)) == 1) {
                return 1;
            }
            return 0;
        case 5:
        case 6:
        case 19:
            if (chatGetFilterPrivate() < 2) {
                return 1;
            }
            return 0;
    }
    return 0;
}
