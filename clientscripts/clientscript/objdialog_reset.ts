/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,objdialog_reset]

function objdialog_reset(strArg0: string): void {
    ifSetHide(true, Component.interface_752.component_752_8);
    ifSetHide(true, Component.interface_752.component_752_3);
    ifSetHide(false, Component.interface_752.component_752_7);
    ifSetOnKey(hook(objdialog_onkey, "iz", [event_keycode, event_keychar]), Component.interface_389.component_389_9);
    ifSetText(strArg0, Component.interface_389.component_389_6);
    ifSetHide(false, Component.interface_389.component_389_5);
    ifSetObject(-1, -1, Component.interface_389.component_389_15);
    cs2_1188();
    varcstr_meslayerinput = "";
    ifSetText("*", Component.interface_389.component_389_9);
    ccDeleteAll(Component.interface_389.component_389_4);
    ifSetScrollSize(0, 15, Component.interface_389.component_389_4);
    proc_scrollbar_vertical(Component.interface_389.component_389_8, Component.interface_389.component_389_4, Graphic.scrollbar_dragger_v2_3, Graphic.scrollbar_dragger_v2_0, Graphic.scrollbar_dragger_v2_1, Graphic.scrollbar_dragger_v2_2, Graphic.scrollbar_v2_0, Graphic.scrollbar_v2_1);
    ifSetondialogabort(hook(objdialog_ondialogabort, "", []), 25493513);
}
