/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1902

function cs2_1902(intArg0: component, intArg1: component, intArg2: component): void {
    varc_128 = -1;
    let int3: number = chatPhraseFind(varcstr_30, false);
    let int4: number = ifGetWidth(intArg1);
    let int5: number = int4 - 8;

    if (int3 == -1) {
        ccCreate(intArg1, 4, 0);
        ccSetPosition(0, 48, 0, 0);
        ccSetSize(int4, 14, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetText("Too many results. Please refine your search.");
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0x000000));
        ccSetTextShadow(false);
        ifSetScrollSize(0, 0, intArg1);
        cs2_1905(intArg1, intArg2);
        return;
    }

    if (int3 == 0) {
        ccCreate(intArg1, 4, 0);
        ccSetPosition(0, 48, 0, 0);
        ccSetSize(int4, 14, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetText("No matching items found.");
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0x000000));
        ccSetTextShadow(false);
        ifSetScrollSize(0, 0, intArg1);
        cs2_1905(intArg1, intArg2);
        return;
    }
    let int6: number = 1;
    let int7: number = chatPhraseFindNext();
    let str0: string = "";
    ccCreate(intArg1, 3, 0);

    while (int7 != -1) {
        if (compare(str0, chatPhraseGetText(int7)) != 0) {
            str0 = chatPhraseGetText(int7);
            ccCreate(intArg1, 4, int6);
            ccSetPosition(4, 14 * (int6 - 1), 0, 0);
            ccSetSize(int5, 14, 0, 0);
            ccSetColour(colour(0x000000));
            ccSetText(chatPhraseGetText(int7));
            ccSetTextFont(Graphic.p12_full);
            ccSetTextShadow(false);
            ccSetOnMouseOver(hook(cs2_1906, "iI", [int6, intArg1]));
            ccSetOnClick(hook(clientscript_quickchat_phrase, "Iei", [intArg0, int7, 0]));
            int6 = int6 + 1;
        }
        int7 = chatPhraseFindNext();
    }

    if (int6 == 1) {
        ccCreate(intArg1, 4, 0);
        ccSetPosition(0, 48, 0, 0);
        ccSetSize(int4, 14, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetText("No matching items found.");
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0x000000));
        ccSetTextShadow(false);
        ifSetScrollSize(0, 0, intArg1);
        cs2_1905(intArg1, intArg2);
        return;
    }
    ifSetOnKey(hook(cs2_1901, "izIIIIi", [event_keycode, event_keychar, Component.interface_137.component_137_1, Component.interface_137.component_137_14, Component.interface_137.component_137_16, Component.interface_137.component_137_15, int6 - 1]), Component.interface_137.component_137_13);
    ifSetScrollSize(0, 14 * (int6 - 1), intArg1);
    cs2_1905(intArg1, intArg2);
}
