/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_75

function cs2_75(): void {
    let int0: number = varc_3;
    let str0: string = "null";

    if (int0 == -1) {
        int0 = varc_4;
    }

    if (varc_3 != varc_4) {
        int0 = int0 - 1;
        if (int0 < 0) {
            int0 = 19;
        }
        str0 = cs2_79(int0);
        if (stringLength(str0) > 0) {
            varcstr_1 = str0;
            varc_3 = int0;
        }
    }
}
