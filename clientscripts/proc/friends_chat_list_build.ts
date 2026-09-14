/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,friends_chat_list_build]

function proc_friends_chat_list_build(intArg0: component): void {
    let int1: number = 0;
    let int2: number = clanGetChatCount();
    let int3: number = 2;
    let int4: number = 100;
    let int5: number = 19;
    let str0: string = "";

    if (int2 > 0) {
        ccDeleteAll(intArg0);
        while (int1 < int2) {
            str0 = clanGetChatUserName(int1);
            ccCreate(intArg0, 4, ifGetNextSubId(intArg0));
            ccSetColour(colour(0xA4997D));
            ccSetTextFont(Graphic.verdana_11pt_regular);
            ccSetTextShadow(false);
            ccSetPosition(0, int1 * int5, 0, 0);
            ccSetSize(int4, int5, 0, 0);
            ccSetText(str0);
            int1 = int1 + 1;
        }
        ifSetOnClanChannelTransmit(hook(clientscript_friends_chat_list_build, "I", [event_com]), intArg0);
    }
}
