/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5864

function cs2_5864(): void {
    let int0: number = 0;
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 1;

    while (int10 <= enumGetoutputcount(Enum.int_to_stat)) {
        [int0, int1, int2, int3, int4, int5, int6, int7, int8, int9] = cs2_5865(statVisibleXp(enumOp(type_int, type_stat, Enum.int_to_stat, int10)), int0, int1, int2, int3, int4, int5, int6, int7, int8, int9);
        int10 = int10 + 1;
    }
    let str0: string = tostring(int0);
    let str1: string = subString(tostring(int1), 0, 1);
    let str2: string = subString(tostring(int2), 0, 1);
    let str3: string = subString(tostring(int3), 0, 1);
    let str4: string = subString(tostring(int4), 0, 1);
    let str5: string = subString(tostring(int5), 0, 1);
    let str6: string = subString(tostring(int6), 0, 1);
    let str7: string = subString(tostring(int7), 0, 1);
    let str8: string = subString(tostring(int8), 0, 1);
    let str9: string = subString(tostring(int9), 0, 1);
    let int11: number = 10;

    if (int9 == 0) {
        str9 = "";
        int11 = int11 - 1;
        if (int8 == 0) {
            str8 = "";
            int11 = int11 - 1;
            if (int7 == 0) {
                str7 = "";
                int11 = int11 - 1;
                if (int6 == 0) {
                    str6 = "";
                    int11 = int11 - 1;
                    if (int5 == 0) {
                        str5 = "";
                        int11 = int11 - 1;
                        if (int4 == 0) {
                            str4 = "";
                            int11 = int11 - 1;
                            if (int3 == 0) {
                                str3 = "";
                                int11 = int11 - 1;
                                if (int2 == 0) {
                                    str2 = "";
                                    int11 = int11 - 1;
                                    if (int1 == 0) {
                                        str1 = "";
                                        int11 = int11 - 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    let str10: string = "";

    if (int11 > 3) {
        str10 = ",";
    }
    let str11: string = "";

    if (int11 > 6) {
        str11 = ",";
    }
    let str12: string = "";

    if (int11 > 9) {
        str12 = ",";
    }
    let str13: string = "Total XP: " + str9 + str12 + str8 + str7 + str6 + str11 + str5 + str4 + str3 + str10 + str2 + str1 + str0;
    let int12: number = stringWidth(str13, Graphic.p12_full);
    let int13: number = 3;
    let int14: number = 30;
    let int15: component = Component.interface_320.component_320_152;
    ccCreate(int15, 3, 0);
    ccSetSize(int12 + 4, 18, 0, 0);
    ccSetPosition(int13, int14, 2, 2);
    ccSetfill(true);
    ccSetColour(colour(0x0E0E0E));
    ccCreate(int15, 3, 1);
    ccSetSize(int12 + 4, 18, 0, 0);
    ccSetPosition(int13, int14, 2, 2);
    ccSetfill(false);
    ccSetColour(colour(0xEBECE6));
    ccCreate(int15, 4, 2);
    ccSetPosition(int13 + 2, int14 + 0, 2, 2);
    ccSetSize(int12, 16, 0, 0);
    ccSetTextFont(Graphic.p12_full);
    ccSetColour(colour(0xF5B241));
    ccSetTextAlign(0, 0, 0);
    ccSetTextShadow(false);
    ccSetText(str13);
}
