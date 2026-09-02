/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4590

function cs2_4590(): [number, number, number, number, number, number] {
    let int0: number = -1;
    let int1: number = -1;
    let int2: number = -1;
    let int3: number = -1;
    let int4: number = -1;
    let int5: number = -1;

    if (activeClanChannelFindAffined() == 1) {
        int2 = activeClanChannelGetranktalk();
        int0 = activeClanChannelGetUserSlot(removetags(chatPlayerNameUnfiltered()));
        if (int0 >= 0) {
            int1 = activeClanChannelGetUserRank(int0);
        }
    }

    if (activeClanChannelFindListened() == 1) {
        int5 = activeClanChannelGetranktalk();
        int3 = activeClanChannelGetUserSlot(removetags(chatPlayerNameUnfiltered()));
        if (int3 >= 0) {
            int4 = activeClanChannelGetUserRank(int3);
        }
    }
    return [int0, int1, int2, int3, int4, int5];
}
