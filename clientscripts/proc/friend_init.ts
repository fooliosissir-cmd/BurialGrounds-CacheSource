/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,friend_init]

function proc_friend_init(): void {
    ifSetText("Friends List" + "<br>" + "Burial Grounds - World " + tostring(mapWorld()), Component.interface_550.component_550_18);
    ifSetOnFriendTransmit(hook(friend_transmit, "", []), Component.interface_550.component_550_6);
    ifSetScrollSize(0, 0, Component.interface_550.component_550_10);
    ifSetScrollPos(0, 0, Component.interface_550.component_550_10);
    proc_scrollbar_vertical(Component.interface_550.component_550_11, Component.interface_550.component_550_10, Graphic.aif_scrollbar_dragger_2_3, Graphic.aif_scrollbar_dragger_2_0, Graphic.aif_scrollbar_dragger_2_1, Graphic.aif_scrollbar_dragger_2_2, Graphic.aif_scrollbar_arrow_2_1, Graphic.aif_scrollbar_arrow_2_0);
    let int0: component = Component.interface_550.component_550_0;
    ccDeleteAll(int0);
    let int1: number = 0;
    let int2: number = 0;

    while (int2 < 200) {
        int1 = int2 * 15 + 5;
        if (int2 % 2 != 0) {
            ccCreate(int0, 3, ifGetNextSubId(int0));
            ccSetSize(16384, 15, 2, 0);
            ccSetPosition(0, int1, 0, 0);
            ccSetColour(colour(0x232220));
            ccSetfill(true);
            ccSetTrans(128);
        }
        int2 = int2 + 1;
    }
    proc_friend_update(varc_1036);
}
