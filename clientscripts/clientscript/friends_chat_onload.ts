/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,friends_chat_onload]

function friends_chat_onload(intArg0: component, intArg1: number): void {
    ifSetOnClanChannelTransmit(hook(friends_chat_onclantransmit, "I", [event_com]), intArg0);
    ifSetOnFriendTransmit(hook(friends_chat_onclantransmit, "I", [event_com]), intArg0);
    cs2_1600();
    ccDeleteAll(Component.interface_1109.component_1109_4);
    let int2: number = 0;

    while (int2 < 50) {
        ccCreate(Component.interface_1109.component_1109_4, 3, int2);
        ccSetSize(0, 19, 1, 0);
        ccSetPosition(0, int2 * 2 * 19, 1, 0);
        ccSetColour(colour(0x232220));
        ccSetfill(true);
        ccSetTrans(128);
        int2 = int2 + 1;
    }
}
