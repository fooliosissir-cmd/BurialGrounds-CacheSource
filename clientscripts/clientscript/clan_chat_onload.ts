/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_chat_onload]

function clan_chat_onload(): void {
    let int0: component = Component.interface_1110.component_1110_54;

    ifSetOnTimer(hook(cs2_4431, "I", [event_com]), int0);

    if (activeClanChannelFindAffined() == 1) {
        varc_client_timer = 0;
        ifSetOnClanTransmit(hook(clan_chat_onclantransmit, "I", [event_com]), int0);
        ifSetOnFriendTransmit(hook(clan_chat_onclantransmit, "I", [event_com]), int0);
        ifSetScrollSize(0, 0, int0);
        ifSetScrollPos(0, 0, int0);
        ifSetMouseOverCursor(Cursor.friends_arrow_cursor, Component.interface_1110.component_1110_28);
        ifSetHide(false, Component.interface_1110.component_1110_22);
        ifSetHide(false, Component.interface_1110.component_1110_24);
        cs2_4470();
        cs2_5395();
        cs2_4436(int0, varc_1035);
        cs2_4447();
    }
    ccDeleteAll(Component.interface_1110.component_1110_12);
    ccDeleteAll(Component.interface_1110.component_1110_4);
    let int1: number = 0;
    let int2: number = (500 + 100) / 2;

    while (int1 < int2) {
        ccCreate(Component.interface_1110.component_1110_12, 3, int1);
        ccCreate<1>(Component.interface_1110.component_1110_4, 3, int1);
        ccSetSize(0, 19, 1, 0);
        ccSetSize<1>(0, 19, 1, 0);
        ccSetPosition(0, int1 * 2 * 19, 1, 0);
        ccSetPosition<1>(0, ccGetY(), 1, 0);
        ccSetColour(colour(0x232220));
        ccSetColour<1>(colour(0x232220));
        ccSetfill(true);
        ccSetfill<1>(true);
        ccSetTrans(128);
        ccSetTrans<1>(128);
        int1 = int1 + 1;
    }
}
