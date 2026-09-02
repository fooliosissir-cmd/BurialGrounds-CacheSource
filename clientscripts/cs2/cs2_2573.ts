/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2573

function cs2_2573(): void {
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

    if (int0 == -1 || (ocParam(int0, Param.param_802) != 1 && ocParam(int0, Param.param_803) != 1)) {
        return;
    }
    cs2_2575();
    ifSetText(ocName(int0), Component.interface_292.component_292_99);
    ifSetObject(int0, -1, Component.interface_292.component_292_112);

    if (ocParam(int0, Param.param_802) == 1) {
        cs2_2578();
        cs2_2584();
        cs2_2585();
        cs2_2588();
        cs2_2591();
    } else if (ocParam(int0, Param.param_803) == 1) {
        cs2_2590();
        cs2_2587();
        cs2_2579();
        cs2_2580();
        cs2_2583();
        cs2_2597();
    }
}
