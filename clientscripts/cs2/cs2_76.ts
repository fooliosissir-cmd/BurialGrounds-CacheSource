/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_76

function cs2_76(): void {
    let str0: string = "null";

    if (varc_3 != -1) {
        varc_3 = varc_3 + 1;
        if (varc_3 >= 20) {
            varc_3 = 0;
        }
        if (varc_3 == varc_4) {
            varcstr_1 = "";
            varc_3 = -1;
        } else {
            str0 = cs2_79(varc_3);
            if (stringLength(str0) > 0) {
                varcstr_1 = str0;
            }
        }
    }
}
