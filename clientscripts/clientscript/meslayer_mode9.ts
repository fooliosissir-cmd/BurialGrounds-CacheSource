/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,meslayer_mode9]

function meslayer_mode9(strArg0: string): void {
    if (getWindowMode() >= 2) {
        ifSetHide(false, Component.interface_746.component_746_22);
    }
    ifSetHide(false, Component.interface_752.component_752_3);
    ifSetHide(true, Component.interface_752.component_752_7);
    ifSetHide(true, Component.interface_752.component_752_8);
    ifSetText(strArg0, Component.interface_752.component_752_4);
    varc_meslayermode = 9;

    if (compare("null", varcstr_350) == 0) {
        varcstr_350 = "";
    }

    if (compare("", varcstr_350) != 0) {
        meslayer_setupinput(varcstr_350);
        varcstr_350 = "";
    } else {
        meslayer_setupinput("");
    }

    if (compare("null", varcstr_stringdialog_suggested_string) == 0) {
        varcstr_stringdialog_suggested_string = "";
    }
    ifSetOnClick(noHook(""), Component.interface_752.component_752_3);
    cs2_2026();
    ifSetOnKey(hook(meslayer_onkey, "iz", [event_keycode, event_keychar]), Component.interface_752.component_752_5);
    ifSetondialogabort(hook(meslayer_ondialogabort, "", []), 49283077);

    if (compare(varcstr_stringdialog_suggested_string, "") != 0) {
        ccCreate(Component.interface_752.component_752_3, 4, 0);
        meslayer_setupdynamicbutton();
        ccSetText("Last entered: " + varcstr_stringdialog_suggested_string);
        ccSetOp(1, "Use:");
        ccSetOpBase("<col=ff9040>" + removetags(varcstr_stringdialog_suggested_string) + "</col>");
        ccSetOnOp(hook(meslayer_lastname, "iiIis", [varc_meslayermode, event_opindex, event_com, event_comsubid, varcstr_stringdialog_suggested_string]));
        varcstr_stringdialog_suggested_string = "";
    }
    cs2_1188();
}
