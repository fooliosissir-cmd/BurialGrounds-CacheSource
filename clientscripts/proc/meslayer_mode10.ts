/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,meslayer_mode10]

function meslayer_mode10(): void {
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
    ifSetText("Enter the player name whose channel you wish to join:", Component.interface_752.component_752_4);
    varc_meslayermode = 10;
    meslayer_setupinput("");
    ifSetOnClick(noHook(""), Component.interface_752.component_752_3);
    cs2_2026();
    ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
    ccCreate(Component.interface_752.component_752_3, 4, 0);
    meslayer_setupdynamicbutton();

    if (varc_last_clanchannelowner_init == 1 && stringLength(varcstr_last_clanchannelowner) > 0) {
        ccSetText("Last name entered: " + varcstr_last_clanchannelowner);
    } else {
        varcstr_last_clanchannelowner = removetags(chatPlayerName());
        varc_last_clanchannelowner_init = 1;
        ccSetText("Your name: " + varcstr_last_clanchannelowner);
    }
    ccSetOp(1, "Use:");
    ccSetOpBase("<col=ff9040>" + removetags(varcstr_last_clanchannelowner) + "</col>");
    ccSetOnOpt(hook(meslayer_lastname, "iiIis", [varc_meslayermode, event_opindex, event_com, event_comsubid, varcstr_last_clanchannelowner]));
    cs2_1188();
}
