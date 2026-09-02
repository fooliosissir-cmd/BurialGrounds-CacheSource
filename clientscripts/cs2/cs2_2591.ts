/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2591

function cs2_2591(): void {
    cs2_2590();
    let int0: obj = -1;

    switch (varc_929) {
        case 0:
            int0 = invGetobj(93, varc_930);
            break;
        case 1:
            int0 = invGetobj(93, varc_931);
            break;
        case 2:
            int0 = invGetobj(93, varc_932);
            break;
        case 3:
            int0 = invGetobj(93, varc_933);
            break;
        case 4:
            int0 = invGetobj(93, varc_934);
            break;
        case 5:
            int0 = invGetobj(93, varc_935);
            break;
        case 6:
            int0 = invGetobj(93, varc_936);
            break;
        case 7:
            int0 = invGetobj(93, varc_937);
            break;
        case 8:
            int0 = invGetobj(93, varc_938);
            break;
        case 9:
            int0 = invGetobj(93, varc_939);
            break;
    }

    if (int0 == -1) {
        return;
    }
    let int1: number = ocParam(int0, Param.param_806);

    switch (varc_929) {
        case 0:
            if (varbit_mob_exch_class1 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
        case 1:
            if (varbit_mob_exch_class2 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
        case 2:
            if (varbit_mob_exch_class3 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
        case 3:
            if (varbit_mob_exch_class4 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
        case 4:
            if (varbit_mob_exch_class5 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
        case 5:
            if (varbit_mob_exch_class6 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
        case 6:
            if (varbit_mob_exch_class7 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
        case 7:
            if (varbit_mob_exch_class8 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
        case 8:
            if (varbit_mob_exch_class9 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
        case 9:
            if (varbit_mob_exch_class10 == 1) {
                if (int1 == 0) {
                    int1 = 1;
                } else {
                    int1 = 0;
                }
            }
            break;
    }

    switch (int1) {
        case 0:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_292.component_292_110);
            break;
        case 1:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_292.component_292_111);
            break;
    }
}
