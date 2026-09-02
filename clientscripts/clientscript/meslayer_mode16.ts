/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_mode16]

function meslayer_mode16(): void {
    let int0: number = -1;
    let int1: number = -1;
    let int2: number = -1;

    if (activeClanChannelFindAffined() == 1) {
        int0 = activeClanChannelGetUserSlot(chatPlayerName());
        if (int0 == -1) {
            return;
        }
        int1 = activeClanChannelGetUserRank(int0);
        int2 = activeClanChannelGetRankKick();
    } else {
        mes("You must be in a clan to do that.");
    }

    if (int1 >= 0) {
        if (int1 < int2) {
            return;
        }
        if (varc_has_displayname_client == 0) {
            return;
        }
        if (varc_snapshot_open == 1) {
            cs2_675();
        }
        if (getWindowMode() >= 2) {
            ifSetHide(false, Component.interface_746.component_746_22);
        }
        ifSetHide(false, Component.interface_752.component_752_3);
        ifSetHide(true, Component.interface_752.component_752_7);
        ifSetHide(true, Component.interface_752.component_752_8);
        ifSetText("Enter the player to ban from the channel:", Component.interface_752.component_752_4);
        varc_meslayermode = 16;
        meslayer_setupinput("");
        ifSetOnClick(noHook(""), Component.interface_752.component_752_3);
        cs2_2026();
        ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
        cs2_1188();
    }
}
