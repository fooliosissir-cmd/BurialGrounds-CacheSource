/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_mode8]

function meslayer_mode8(strArg0: string): void {
    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_746.component_746_22);
    }
    ifSetHide(false, Component.interface_752.component_752_3);
    ifSetHide(true, Component.interface_752.component_752_7);
    ifSetHide(true, Component.interface_752.component_752_8);
    ifSetText(strArg0, Component.interface_752.component_752_4);
    varc_meslayermode = 8;
    meslayer_setupinput("");
    ifSetOnClick(noHook(""), Component.interface_752.component_752_3);
    cs2_2026();
    ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
    ifSetondialogabort(hook(meslayer_ondialogabort, "", []), 49283077);

    if (varc_1026 == 1 && stringLength(varcstr_201) > 0) {
        ccCreate(Component.interface_752.component_752_3, 4, 0);
        meslayer_setupdynamicbutton();
        ccSetText("Last name entered: " + varcstr_201);
        ccSetOp(1, "Use:");
        ccSetOpBase("<col=ff9040>" + removetags(varcstr_201) + "</col>");
        ccSetOnOp(hook(meslayer_lastname, "iiIis", [varc_meslayermode, event_opindex, event_com, event_comsubid, varcstr_201]));
    } else {
        varcstr_201 = "";
        varc_1026 = 1;
    }
    cs2_1188();
}
