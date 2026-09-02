/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1665

function cs2_1665(intArg0: component, intArg1: component, intArg2: component, intArg3: component): void {
    let int4: number = cs2_1329();
    let int5: number = cs2_1248() - int4;
    let int6: number = varc_1038;
    let int7: number = varc_192 - int6;
    let int8: number = (int4 - int6) * -1;
    let int9: number = int7 - (713 - 1);

    if (int9 > 0) {
        int6 = int6 + int9;
        int7 = 713 - 1;
    } else if (int8 > 0) {
        int7 = int7 + int8;
        int6 = int4;
    }
    ifSetText(tostring(int6), intArg0);
    ifSetText(tostring(int7), intArg2);
    ifSetText(tostring(int4), intArg1);
    ifSetText(tostring(int5), intArg3);
}
