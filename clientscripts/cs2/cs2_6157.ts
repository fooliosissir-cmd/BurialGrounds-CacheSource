/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6157

function cs2_6157(intArg0: component): void {
    let int1: number = 0;
    let int2: number = 120;
    let int3: number = 75;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = -1;
    let int7: Enum = -1;

    while (int1 < 16) {
        ccCreate(intArg0, 5, int1);
        ccSetSize(int2, int3, 0, 0);
        int4 = int2 * (int1 % 4);
        int5 = int3 * (int1 / 4);
        ccSetPosition(int4, int5, 0, 0);
        switch (mapLang()) {
            case 0:
                int7 = Enum.omge_madmay_picture_en;
                break;
            case 2:
                int7 = Enum.omge_madmay_picture_fr;
                break;
            case 3:
                int7 = Enum.omge_madmay_picture_pt;
                break;
            case 1:
                int7 = Enum.omge_madmay_picture_de;
                break;
        }
        ccSetGraphic(enumOp(type_int, type_graphic, int7, int1));
        int1 = int1 + 1;
    }
}
