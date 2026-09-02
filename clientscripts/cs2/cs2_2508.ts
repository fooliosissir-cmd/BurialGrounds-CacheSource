/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2508

function cs2_2508(intArg0: number): void {
    switch (intArg0) {
        case 55836719:
            varc_840 = 0;
            break;
        case 55836713:
            if (varc_840 < 2147483647 - 10 && varc_839 >= 10 && cs2_2509(10) == 1) {
                varc_840 = varc_840 + 10;
                varc_839 = varc_839 - 10;
            }
            break;
        case 55836715:
            if (varc_840 < 2147483647 - 100 && varc_839 >= 100 && cs2_2509(100) == 1) {
                varc_840 = varc_840 + 100;
                varc_839 = varc_839 - 100;
            }
            break;
        case 55836721:
            if (varc_840 < 2147483647 - 500 && varc_839 >= 500 && cs2_2509(500) == 1) {
                varc_840 = varc_840 + 500;
                varc_839 = varc_839 - 500;
            }
            break;
        case 55836723:
            if (varc_840 < 2147483647 - 1000 && varc_839 >= 1000 && cs2_2509(1000) == 1) {
                varc_840 = varc_840 + 1000;
                varc_839 = varc_839 - 1000;
            }
            break;
        case 55836725:
            if (varc_840 < 2147483647 - 10000 && varc_839 >= 10000 && cs2_2509(10000) == 1) {
                varc_840 = varc_840 + 10000;
                varc_839 = varc_839 - 10000;
            }
            break;
        case 55836717:
            if (varc_839 < cs2_2687()) {
                varc_840 = varc_839;
                varc_839 = 0;
            } else if (varc_840 < cs2_2687()) {
                varc_840 = cs2_2687();
                varc_839 = varc_839 - cs2_2687();
            }
            break;
    }
    ifSetText(tostring_spacer(varc_840, ","), Component.interface_852.component_852_63);
    ifSetText(tostring_spacer(varc_839, ","), Component.interface_852.component_852_62);
}
