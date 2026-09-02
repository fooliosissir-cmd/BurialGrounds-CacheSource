/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,quickchat_path_scroll]

function quickchat_path_scroll(intArg0: component, intArg1: number): void {
    let int2: number = ifGetWidth(intArg0);
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;

    while (ccFind(intArg0, int4) == 1) {
        int3 = int3 + ccGetWidth();
        int4 = int4 + 1;
    }

    if (int3 <= int2) {
        int4 = 0;
        int5 = 0;
        while (ccFind(intArg0, int4) == 1) {
            ccSetHide(false);
            ccSetPosition(int5, 0, 0, 0);
            if (ccFind<1>(Component.interface_137.component_137_2, int4) == 1) {
                ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
            }
            int5 = int5 + ccGetWidth();
            int4 = int4 + 1;
        }
        return;
    }
    ccCreate(intArg0, 4, intArg1 + 1);
    ccSetColour(colour(0x000000));
    ccSetTextFont(Graphic.p12_full);
    ccSetTextAlign(0, 1, 0);
    ccSetText(" ... " + "<img=2>");
    ccSetTextShadow(false);
    ccSetSize(parawidth(" ... " + "<img=2>", int2, Graphic.p12_full), ifGetHeight(intArg0), 0, 0);
    int3 = ccGetWidth();

    if (ccFind(intArg0, intArg1) == 1) {
        int3 = int3 + ccGetWidth();
    }
    int4 = 0;

    while (int4 < intArg1) {
        if (ccFind(intArg0, int4) == 1) {
            if (int3 + ccGetWidth() <= int2) {
                ccSetHide(false);
                int3 = int3 + ccGetWidth();
            } else {
                ccSetHide(true);
            }
        }
        int4 = int4 + 1;
    }
    int4 = 0;
    int5 = 0;

    while (int4 < intArg1) {
        if (ccFind(intArg0, int4) == 1) {
            if (ccGetHide() == 0) {
                ccSetPosition(int5, 0, 0, 0);
                if (ccFind<1>(Component.interface_137.component_137_2, int4) == 1) {
                    ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
                }
                int5 = int5 + ccGetWidth();
            } else if (ccFind<1>(Component.interface_137.component_137_2, int4) == 1) {
                ccSetHide<1>(true);
            }
        }
        int4 = int4 + 1;
    }

    if (ccFind(intArg0, intArg1 + 1) == 1) {
        ccSetPosition(int5, 0, 0, 0);
        int5 = int5 + ccGetWidth();
    }

    if (ccFind(intArg0, intArg1) == 1) {
        ccSetPosition(int5, 0, 0, 0);
        if (ccFind<1>(Component.interface_137.component_137_2, int4) == 1) {
            ccSetPosition<1>(ccGetX(), ccGetY(), 0, 0);
        }
    }
}
