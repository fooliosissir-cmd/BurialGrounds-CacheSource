/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,contact_spell]

function contact_spell(): void {
    let int0: number = 0;
    let int1: number = 5;
    let int2: number = ifGetWidth(Component.interface_88.component_88_4) / int1;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 125;
    let int6: number = 15;
    let int7: model = -1;
    let int8: number = 2200;
    let str0: string = "";
    let int9: number = 0;
    let int10: seq = -1;
    let int11: number = enumGetoutputcount(Enum.enum_869);
    let int12: number = int11 / int1 * int5;

    if (int11 % int1 != 0) {
        int12 = int12 + int5;
    }
    ccDeleteAll(Component.interface_88.component_88_5);
    ccDeleteAll(Component.interface_88.component_88_6);
    ifSetScrollSize(int1 * int2, int12, Component.interface_88.component_88_4);

    while (int0 < int11) {
        ccCreate(Component.interface_88.component_88_5, 6, int0);
        ccSetSize(int2, int5, 0, 0);
        [int7, str0, int9, int8, int10] = cs2_2791(int0);
        ccSetModel(int7);
        ccSetModelAngle(1, 20, 5, 1950, 0, int8);
        ccSetPosition(int3 * int2, int4 * int5, 0, 0);
        if (int9 == 1) {
            ccSetOp(1, "Speak-to");
            ccSetOnMouseOver(hook(cs2_1860, "iA", [event_comsubid, int10]));
            ccSetOnMouseLeave(hook(cs2_2607, "i", [event_comsubid]));
        }
        ccCreate(Component.interface_88.component_88_6, 4, int0);
        ccSetSize(int2, int5 - int6 * 2, 0, 0);
        ccSetColour(colour(0xFF9935));
        ccSetTextFont(Graphic.p11_full);
        ccSetTextShadow(true);
        ccSetText(str0);
        ccSetTextAlign(1, 0, 0);
        ccSetPosition(int3 * int2, int4 * int5 + int6, 0, 0);
        int3 = int3 + 1;
        if (int3 >= int1) {
            int3 = 0;
            int4 = int4 + 1;
        }
        int0 = int0 + 1;
    }
    cs2_4529(Component.interface_88.component_88_7, Component.interface_88.component_88_4, Struct.struct_7337);
}
