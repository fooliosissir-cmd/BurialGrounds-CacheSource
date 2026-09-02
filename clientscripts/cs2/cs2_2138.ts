/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2138

function cs2_2138(intArg0: component, intArg1: number, intArg2: number): void {
    let int3: number = varbit_macro_certer_ignorebits_3 + 95;
    let int4: number = varbit_macro_certer_ignorebits_2 + 85;
    let int5: number = varbit_macro_certer_ignorebits_1 + 29;
    let int6: number = 0;
    let int7: number = 0;

    if (ccFind(intArg0, intArg1) == 1) {
        if (intArg2 < 150) {
            intArg2 = intArg2 + 10;
            ccSetTrans(intArg2);
            ccSetOnTimer(hook(cs2_2138, "Iii", [event_com, event_comsubid, intArg2]));
        } else if (intArg2 <= 225) {
            intArg2 = intArg2 + 2;
            ccSetTrans(intArg2);
            ccSetOnTimer(hook(cs2_2138, "Iii", [event_com, event_comsubid, intArg2]));
        } else if (intArg2 < 300) {
            intArg2 = intArg2 + 2;
            ccSetTrans(450 - intArg2);
            ccSetOnTimer(hook(cs2_2138, "Iii", [event_com, event_comsubid, intArg2]));
        } else {
            intArg2 = 150;
            ccSetTrans(150);
            ccSetOnTimer(hook(cs2_2138, "Iii", [event_com, event_comsubid, intArg2]));
        }
        int6 = scale(ccGetTrans(), 255, 100);
        int7 = int6 / 2;
        switch (varbit_macro_certer_ignorebits_4) {
            case 0:
                int4 = int4 + int6;
                int3 = int3 + int7;
                break;
            case 1:
                int5 = int5 + int6;
                int3 = int3 + int7;
                break;
            case 2:
                int5 = int5 + int6;
                int4 = int4 + int7;
                break;
            default:
                int4 = int4 + int6;
                int5 = int5 + int7;
                break;
        }
        ccSetColour(rgb_to_hex(int3, int4, int5));
    }
}
