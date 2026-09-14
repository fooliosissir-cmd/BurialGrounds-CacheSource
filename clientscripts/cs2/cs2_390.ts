/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_390

function cs2_390(intArg0: boolean): void {
    let int1: number = enumGetoutputcount(Enum.enum_3281);
    let int2: component = -1;
    let int3: number = int1 - 1;

    while (int3 >= 0) {
        int2 = enumOp(type_int, type_component, Enum.enum_3281, int3);
        if (int2 != -1) {
            ifSetHide(true, int2);
        }
        int3 = int3 - 1;
    }
    ccDeleteAll(Component.interface_1028.component_1028_102);
    let int4: struct = enumOp(type_int, type_struct, Enum.enum_3278, varc_197 - 1);
    ccDeleteAll(Component.interface_1028.component_1028_91);
    let str0: string = "Please choose your character." + "<br>" + "<br>" + "Your choice will not affect your abilities." + "<br>" + "You can modify features like your hair style and clothing once you have chosen your character.";

    if (int4 == -1) {
        int1 = ifGetWidth(Component.interface_1028.component_1028_102) - 16;
        [int1, int3] = [parawidth(str0, int1, Graphic.p12_full), paraheight(str0, int1, Graphic.p12_full) * 20 + 3];
        ifSetSize(int1 + 16, int3 + 50, 0, 0, Component.interface_1028.component_1028_91);
        ccCreate(Component.interface_1028.component_1028_91, 4, ifGetNextSubId(Component.interface_1028.component_1028_91));
        ccSetSize(int1, int3, 0, 0);
        ccSetPosition(0, 22, 1, 0);
        ccSetTextFont(Graphic.verdana_11pt_regular);
        ccSetColour(colour(0x000000));
        ccSetTextShadow(false);
        ccSetTextAlign(1, 1, 20);
        ccSetText(str0);
        ifSetHide(false, Component.interface_1028.component_1028_91);
        return;
    }
    ifSetHide(true, Component.interface_1028.component_1028_91);
    let int5: number = 0;
    int3 = 0;
    let int6: struct = playerdesign4_getoutfit(0, int4, intArg0);
    let int7: number = varc_86 - 1;
    int2 = enumOp(type_int, type_component, Enum.enum_3281, 0);

    while (int6 != -1 && int2 != -1) {
        ifSetSize(98, 17, 0, 1, int2);
        if (int3 == int7) {
            int5 = 1;
        } else {
            int5 = 0;
        }
        cs2_363(int2, int7, Enum.enum_3281, structParam(int6, Param.playerdesign4_outfit_image), true, 85, 181, 1, "", int5, "");
        ifSetOp(1, "Select outfit", int2);
        ifSetOnOp(hook(cs2_352, "ii", [event_opindex, int3 + 1]), int2);
        int3 = int3 + 1;
        int6 = playerdesign4_getoutfit(int3, int4, intArg0);
        int2 = enumOp(type_int, type_component, Enum.enum_3281, int3);
    }
    let int8: number = int3;
    let int9: number = min((390 - 98) / max(int8 - 1, 1), scale(33, 40, 89));
    int3 = 0;

    while (int3 < int8) {
        int2 = enumOp(type_int, type_component, Enum.enum_3281, int3);
        if (int3 == int7) {
            ifSetPosition(int3 * int9, 0, 0, 0, int2);
        } else {
            ifSetPosition(int3 * int9, 0, 0, 2, int2);
        }
        if (int3 <= int7) {
            ifSendtofront(int2);
        } else {
            ifSendtoback(int2);
        }
        int3 = int3 + 1;
    }
}
