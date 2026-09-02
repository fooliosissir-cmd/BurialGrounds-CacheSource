/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2588

function cs2_2588(): void {
    cs2_2587();
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
    let int1: number = ocParam(int0, Param.param_805);

    switch (varc_929) {
        case 0:
            if (varbit_mob_exch_race1 != 0 && varbit_mob_exch_race1 != int1) {
                int1 = varbit_mob_exch_race1;
            }
            break;
        case 1:
            if (varbit_mob_exch_race2 != 0 && varbit_mob_exch_race2 != int1) {
                int1 = varbit_mob_exch_race2;
            }
            break;
        case 2:
            if (varbit_mob_exch_race3 != 0 && varbit_mob_exch_race3 != int1) {
                int1 = varbit_mob_exch_race3;
            }
            break;
        case 3:
            if (varbit_mob_exch_race4 != 0 && varbit_mob_exch_race4 != int1) {
                int1 = varbit_mob_exch_race4;
            }
            break;
        case 4:
            if (varbit_mob_exch_race5 != 0 && varbit_mob_exch_race5 != int1) {
                int1 = varbit_mob_exch_race5;
            }
            break;
        case 5:
            if (varbit_mob_exch_race6 != 0 && varbit_mob_exch_race6 != int1) {
                int1 = varbit_mob_exch_race6;
            }
            break;
        case 6:
            if (varbit_mob_exch_race7 != 0 && varbit_mob_exch_race7 != int1) {
                int1 = varbit_mob_exch_race7;
            }
            break;
        case 7:
            if (varbit_mob_exch_race8 != 0 && varbit_mob_exch_race8 != int1) {
                int1 = varbit_mob_exch_race8;
            }
            break;
        case 8:
            if (varbit_mob_exch_race9 != 0 && varbit_mob_exch_race9 != int1) {
                int1 = varbit_mob_exch_race9;
            }
            break;
        case 9:
            if (varbit_mob_exch_race10 != 0 && varbit_mob_exch_race10 != int1) {
                int1 = varbit_mob_exch_race10;
            }
            break;
    }

    switch (int1) {
        case 1:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_292.component_292_102);
            break;
        case 2:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_292.component_292_104);
            break;
        case 3:
            ifSetGraphic(Graphic.radio_buttons_1, Component.interface_292.component_292_103);
            break;
    }
}
