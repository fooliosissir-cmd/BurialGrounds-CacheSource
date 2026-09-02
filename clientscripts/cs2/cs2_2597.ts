/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2597

function cs2_2597(): void {
    let int0: obj = -1;
    let int1: number = 0;

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

    if (int0 == -1 || ocParam(int0, Param.param_803) != 1) {
        return;
    }

    switch (varc_929) {
        case 0:
            if (varbit_mob_exch_resupply1 == 1) {
                int1 = 1;
            }
            break;
        case 1:
            if (varbit_mob_exch_resupply2 == 1) {
                int1 = 1;
            }
            break;
        case 2:
            if (varbit_mob_exch_resupply3 == 1) {
                int1 = 1;
            }
            break;
        case 3:
            if (varbit_mob_exch_resupply4 == 1) {
                int1 = 1;
            }
            break;
        case 4:
            if (varbit_mob_exch_resupply5 == 1) {
                int1 = 1;
            }
            break;
        case 5:
            if (varbit_mob_exch_resupply6 == 1) {
                int1 = 1;
            }
            break;
        case 6:
            if (varbit_mob_exch_resupply7 == 1) {
                int1 = 1;
            }
            break;
        case 7:
            if (varbit_mob_exch_resupply8 == 1) {
                int1 = 1;
            }
            break;
        case 8:
            if (varbit_mob_exch_resupply9 == 1) {
                int1 = 1;
            }
            break;
        case 9:
            if (varbit_mob_exch_resupply10 == 1) {
                int1 = 1;
            }
            break;
    }

    switch (int1) {
        case 0:
            ifSetGraphic(Graphic.warning_icons_1, Component.interface_292.component_292_113);
            break;
        case 1:
            ifSetGraphic(Graphic.warning_icons_2, Component.interface_292.component_292_113);
            break;
    }
}
