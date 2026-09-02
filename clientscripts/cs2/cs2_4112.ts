/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4112

function cs2_4112(intArg0: number): void {
    if (varp_1109 == -1) {
        return;
    }
    let int1: number = 0;

    if (intArg0 > 100 && varc_85 > 2045222520) {
        int1 = 2147483647;
    } else if (intArg0 < 100 && varc_85 <= 1) {
        int1 = 1;
    } else {
        int1 = scale(intArg0, 100, varc_85);
        if (int1 == varc_85) {
            if (intArg0 >= 100) {
                int1 = int1 + 1;
            } else {
                int1 = int1 - 1;
            }
        }
    }
    varc_85 = int1;
    ifSetText(tostringLocalised(varc_85, 1) + " gp", Component.interface_105.component_105_153);
    cs2_609();
}
