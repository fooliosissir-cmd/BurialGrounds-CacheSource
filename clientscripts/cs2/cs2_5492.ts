/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5492

function cs2_5492(): number {
    let int0: number = 0;

    while (int0 < 10) {
        switch (int0) {
            case 0:
                if (ocParam(varc_1691, Param.stabattack) != 0) {
                    return 1;
                }
                break;
            case 1:
                if (ocParam(varc_1691, Param.slashattack) != 0) {
                    return 1;
                }
                break;
            case 2:
                if (ocParam(varc_1691, Param.crushattack) != 0) {
                    return 1;
                }
                break;
            case 3:
                if (ocParam(varc_1691, Param.magicattack) != 0) {
                    return 1;
                }
                break;
            case 4:
                if (ocParam(varc_1691, Param.rangeattack) != 0) {
                    return 1;
                }
                break;
            case 5:
                if (ocParam(varc_1691, Param.stabdefence) != 0) {
                    return 1;
                }
                break;
            case 6:
                if (ocParam(varc_1691, Param.slashdefence) != 0) {
                    return 1;
                }
                break;
            case 7:
                if (ocParam(varc_1691, Param.crushdefence) != 0) {
                    return 1;
                }
                break;
            case 8:
                if (ocParam(varc_1691, Param.magicdefence) != 0) {
                    return 1;
                }
                break;
            case 9:
                if (ocParam(varc_1691, Param.rangedefence) == 0) {
                    break;
                }
                return 1;
        }
        int0 = int0 + 1;
    }
    return 0;
}
