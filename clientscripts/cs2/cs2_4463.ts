/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4463

function cs2_4463(intArg0: number, intArg1: number): void {
    let str0: string = "";
    let int2: number = 0;

    if (activeClanChannelFindAffined() == 1) {
        if (activeClanSettingsFindAffined() == 1) {
            str0 = activeClanChannelGetUserDisplayName(intArg0);
            if (intArg1 == 1) {
                if (friendTest(str0) == 1) {
                    int2 = 1;
                } else {
                    mesTyped(0, 0, "You only message people on your Friends List.");
                }
            } else if (intArg1 == 8) {
                clan_chat_kick(str0);
            }
        } else {
            mes("You must be in a clan to do that.");
        }
    } else {
        mes("You must be in a clan to do that.");
    }

    if (int2 == 1) {
        varc_1650 = 1;
        varcstr_23 = str0;
        cs2_1558(false);
        return;
    }
}
