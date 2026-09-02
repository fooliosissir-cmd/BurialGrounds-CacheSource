/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_objdialog_dosearch]

function quickchat_objdialog_dosearch(intArg0: component, intArg1: component, intArg2: component, intArg3: number): void {
    varc_128 = -1;
    let int4: number = ocFind(varcstr_30, varc_161);
    let int5: number = ifGetWidth(intArg1);
    let int6: number = int5 - 8;

    if (int4 == -1) {
        ccCreate(intArg1, 4, 0);
        ccSetPosition(0, 48, 0, 0);
        ccSetSize(int5, 14, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetText("Too many results. Please refine your search.");
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0x000000));
        ccSetTextShadow(false);
        ifSetScrollSize(0, 0, intArg1);
        quickchat_objdialog_doscrollbar(intArg1, intArg2);
        return;
    }

    if (int4 == 0) {
        ccCreate(intArg1, 4, 0);
        ccSetPosition(0, 48, 0, 0);
        ccSetSize(int5, 14, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetText("No matching items found.");
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0x000000));
        ccSetTextShadow(false);
        ifSetScrollSize(0, 0, intArg1);
        quickchat_objdialog_doscrollbar(intArg1, intArg2);
        return;
    }
    let int7: number = 1;
    let int8: obj = ocFindNext();
    let str0: string = "";
    ccCreate(intArg1, 3, 0);

    while (int8 != -1) {
        if (compare(str0, ocName(int8)) != 0 && enumOp(type_obj, type_int, Enum.enum_1547, int8) == 0 && compare(lowercase(ocName(int8)), "null") != 0) {
            str0 = ocName(int8);
            ccCreate(intArg1, 4, int7);
            ccSetPosition(4, 14 * (int7 - 1), 0, 0);
            ccSetSize(int6, 14, 0, 0);
            ccSetColour(colour(0x000000));
            ccSetText(ocName(int8));
            ccSetTextFont(Graphic.p12_full);
            ccSetTextShadow(false);
            ccHookMouseEnter(hook(quickchat_objdialog_highlight, "iI", [int7, intArg1]));
            ccSetOnClick(hook(clientscript_quickchat_phrase_obj, "Ieo", [intArg0, intArg3, int8]));
            int7 = int7 + 1;
        }
        int8 = ocFindNext();
    }

    if (int7 == 1) {
        ccCreate(intArg1, 4, 0);
        ccSetPosition(0, 48, 0, 0);
        ccSetSize(int5, 14, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetText("No matching items found.");
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0x000000));
        ccSetTextShadow(false);
        ifSetScrollSize(0, 0, intArg1);
        quickchat_objdialog_doscrollbar(intArg1, intArg2);
        return;
    }
    ifSetOnKey(hook(cs2_1038, "izIIIIei", [event_keycode, event_keychar, Component.interface_137.component_137_1, Component.interface_137.component_137_14, Component.interface_137.component_137_16, Component.interface_137.component_137_15, intArg3, int7 - 1]), Component.interface_137.component_137_13);
    ifSetScrollSize(0, 14 * (int7 - 1), intArg1);
    quickchat_objdialog_doscrollbar(intArg1, intArg2);
}
