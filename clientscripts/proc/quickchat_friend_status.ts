/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_friend_status]

function quickchat_friend_status(strArg0: string): number {
    let int0: number = friendGetSlotFromName(strArg0);

    if (int0 == -1) {
        return -1;
    } else if (friendGetWorld(int0) == 0) {
        return 0;
    } else if (friendPlatform(int0) == 0) {
        return 1;
    } else {
        return 2;
    }
}
