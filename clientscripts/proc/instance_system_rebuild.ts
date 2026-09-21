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
        ccSetSize(116, 16, 0, 0);
        ccSetPosition(0, int2 + 6, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(0, 1, 0);
        ccSetColour(colour(0xEBE0BC));
        ccSetTextShadow(true);
        ccSetText(instance_system_row_label(int1));
        instance_system_stepper(int0, 120, int2, 26, int1 * 2 + 1, "-");
        ccCreate(int0, 3, ifGetNextSubId(int0));
        ccSetSize(112, 26, 0, 0);
        ccSetPosition(150, int2, 0, 0);
        ccSetfill(true);
        ccSetColour(colour(0x2E2B26));
        ccCreate(int0, 3, ifGetNextSubId(int0));
        ccSetSize(112, 26, 0, 0);
        ccSetPosition(150, int2, 0, 0);
        ccSetfill(false);
        ccSetColour(colour(0x5F5B52));
        ccCreate(int0, 4, ifGetNextSubId(int0));
        ccSetSize(112, 26, 0, 0);
        ccSetPosition(150, int2, 0, 0);
        ccSetTextFont(Graphic.p12_full);
        ccSetTextAlign(1, 1, 0);
        ccSetColour(colour(0xEBE0BC));
        ccSetTextShadow(true);
        ccSetText(instance_system_row_value(int1));
        instance_system_stepper(int0, 266, int2, 26, int1 * 2 + 2, "+");
        int2 = int2 + 28;
        int1 = int1 + 1;
    }
    ifSetGraphic(instance_system_checkbox(), Component.instance_system.practice_checkbox);
    let int3: component = Component.instance_system.buttons;
    ccDeleteAll(int3);
    let int4: number = (ifGetWidth(int3) - 32) / 3;
    instance_system_stepper(int3, 0, 0, int4, 1, "Start");
    instance_system_stepper(int3, int4 + 16, 0, int4, 2, "Join");
    instance_system_stepper(int3, int4 * 2 + 32, 0, int4, 3, "Rejoin");
}