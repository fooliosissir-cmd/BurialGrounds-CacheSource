/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,instance_system_rebuild]

function instance_system_rebuild(): void {
    let int0: component = Component.instance_system.rows;
    ccDeleteAll(int0);
    let int1: number = 0;
    let int2: number = 0;
    while (int1 < varc_instance_row_count) {
        ccCreate(int0, 4, ifGetNextSubId(int0));
        ccSetSize(116, 26, 0, 0);
        ccSetPosition(0, int2, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 1, 0);
        ccSetColour(colour(0xFF981F));
        ccSetTextShadow(true);
        ccSetText(instance_system_row_label(int1));
        instance_system_stepper(int0, 118, int2, Graphic.set_but_end_2_0, Graphic.set_but_end_2_1, "-", "Decrease");
        ccCreate(int0, 3, ifGetNextSubId(int0));
        ccSetSize(110, 26, 0, 0);
        ccSetPosition(146, int2, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x221F1A));
        ccCreate(int0, 3, ifGetNextSubId(int0));
        ccSetSize(110, 26, 0, 0);
        ccSetPosition(146, int2, 0, 0);
        ccSetfill(false);
        ccSetColour(colour(0x5F5B52));
        ccCreate(int0, 4, ifGetNextSubId(int0));
        ccSetSize(110, 26, 0, 0);
        ccSetPosition(146, int2, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0xFFFFFF));
        ccSetTextShadow(true);
        ccSetText(instance_system_row_value(int1));
        instance_system_stepper(int0, 258, int2, Graphic.set_but_end_2_3, Graphic.set_but_end_2_4, "+", "Increase");
        int2 = int2 + 34;
        int1 = int1 + 1;
    }
    ifSetGraphic(instance_system_checkbox(false), Component.instance_system.practice_checkbox);
    ifSetNpcModel(varc_instance_boss_npc, Component.instance_system.portrait);
    let int3: component = Component.instance_system.buttons;
    ccDeleteAll(int3);
    let int4: number = (ifGetWidth(int3) - 24) * 3 / 10;
    let int5: number = ifGetWidth(int3) - 24 - int4 * 2;
    instance_system_button(int3, 0, 0, int5, "Start", true);
    instance_system_button(int3, int5 + 12, 0, int4, "Join", false);
    instance_system_button(int3, int5 + int4 + 24, 0, int4, "Rejoin", false);
}
