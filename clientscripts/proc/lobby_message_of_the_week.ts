/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,lobby_message_of_the_week]

/**
 * Burial Grounds lobby Home panel.
 *
 * This is an arrival hall, not a RuneScape news/promotions card.
 */
function lobby_message_of_the_week(): void {
    ifSetHide(true, Component.interface_908.component_908_15);
    ifSetHide(false, Component.interface_908.component_908_30);

    // Retire every stock visual in the old message-of-the-week card.
    ifSetHide(true, Component.interface_908.component_908_31);
    ifSetHide(true, Component.interface_908.component_908_32);
    ifSetHide(true, Component.interface_908.component_908_33);
    ifSetHide(true, Component.interface_908.component_908_34);
    ifSetHide(true, Component.interface_908.component_908_35);

    ccDeleteAll(Component.interface_908.component_908_30);

    let int0: number = ifGetWidth(Component.interface_908.component_908_30);
    let int1: number = ifGetHeight(Component.interface_908.component_908_30);
    let int2: number = 372;
    let int3: number = max(185, int0 - int2 - 12);
    let str0: string = "MAIN WORLD";
    let str1: string = "Greyhaven - live adventure";

    if (mapWorld() == 1) {
        str0 = "DEVELOPER WORLD";
        str1 = "Greyhaven - development and testing";
    }

    // Main Greyhaven arrival panel.
    ccCreate(Component.interface_908.component_908_30, 3, 0);
    ccSetSize(int2, int1, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x211E1A));
    ccSetTrans(0);

    ccCreate(Component.interface_908.component_908_30, 3, 1);
    ccSetSize(4, int1, 0, 0);
    ccSetPosition(0, 0, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x756B57));
    ccSetTrans(0);

    ccCreate(Component.interface_908.component_908_30, 4, 2);
    ccSetSize(300, 34, 0, 0);
    ccSetPosition(22, 12, 0, 0);
    ccSetTextFont(Graphic.welcome_font_large);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xEBE0BC));
    ccSetText("GREYHAVEN");

    ccCreate(Component.interface_908.component_908_30, 4, 3);
    ccSetSize(300, 18, 0, 0);
    ccSetPosition(24, 48, 0, 0);
    ccSetTextFont(Graphic.b12_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xA6C68A));
    ccSetText("THE FIRST THRESHOLD");

    ccCreate(Component.interface_908.component_908_30, 4, 4);
    ccSetSize(326, 42, 0, 0);
    ccSetPosition(24, 76, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 0, 0);
    ccSetColour(colour(0xC9BE9D));
    ccSetText("The road into Burial Grounds begins here.<br>World Select changes the path ahead.");

    // Current path panel.
    ccCreate(Component.interface_908.component_908_30, 3, 5);
    ccSetSize(int3, int1, 0, 0);
    ccSetPosition(int2 + 12, 0, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x2D2923));
    ccSetTrans(0);

    ccCreate(Component.interface_908.component_908_30, 4, 6);
    ccSetSize(int3 - 30, 18, 0, 0);
    ccSetPosition(int2 + 28, 16, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0x8E8672));
    ccSetText("CURRENT PATH");

    ccCreate(Component.interface_908.component_908_30, 4, 7);
    ccSetSize(int3 - 30, 24, 0, 0);
    ccSetPosition(int2 + 28, 40, 0, 0);
    ccSetTextFont(Graphic.b12_full);
    ccSetTextAlign(0, 1, 0);
    ccSetColour(colour(0xEBE0BC));
    ccSetText(str0);

    ccCreate(Component.interface_908.component_908_30, 3, 8);
    ccSetSize(int3 - 32, 1, 0, 0);
    ccSetPosition(int2 + 28, 70, 0, 0);
    ccSetfill(true);
    ccSetColour(colour(0x655D4E));
    ccSetTrans(0);

    ccCreate(Component.interface_908.component_908_30, 4, 9);
    ccSetSize(int3 - 30, 36, 0, 0);
    ccSetPosition(int2 + 28, 80, 0, 0);
    ccSetTextFont(Graphic.p11_full);
    ccSetTextAlign(0, 0, 0);
    ccSetColour(colour(0xC9BE9D));
    ccSetText(str1);
}
