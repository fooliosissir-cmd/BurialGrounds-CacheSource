/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5899

function cs2_5899(): void {
    if (varc_1782 != varc_1783) {
        varc_1782 = varc_1782 + 1;
        cs2_5900();
        if (varc_1782 >= 13) {
            varc_1782 = 0;
        }
    }
    cs2_5890(varc_1782);
}
