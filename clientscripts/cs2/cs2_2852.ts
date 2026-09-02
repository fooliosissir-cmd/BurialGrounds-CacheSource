/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2852

function cs2_2852(intArg0: component): void {
    if (varc_1076 < varc_1075 + 250 && varc_1076 > varc_1075 - 250) {
        varc_1076 = varc_1075;
    } else if (varc_1076 > varc_1075) {
        if (varc_1076 - 32768 > varc_1075) {
            varc_1076 = varc_1076 + 250;
            if (varc_1076 > 65535) {
                varc_1076 = varc_1076 - 63335;
            }
        } else {
            varc_1076 = varc_1076 - 250;
            if (varc_1076 < 0) {
                varc_1076 = varc_1076 + 63335;
            }
        }
    } else if (varc_1076 + 32768 < varc_1075) {
        varc_1076 = varc_1076 - 250;
        if (varc_1076 < 0) {
            varc_1076 = varc_1076 + 63335;
        }
    } else {
        varc_1076 = varc_1076 + 250;
        if (varc_1076 > 65535) {
            varc_1076 = varc_1076 - 63335;
        }
    }
    ifSet2dangle(varc_1076, Component.interface_475.component_475_31);
}
