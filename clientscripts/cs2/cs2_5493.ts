/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5493

function cs2_5493(): number {
    let int0: number = 0;
    let int1: number = 0;

    while (int0 < 5) {
        switch (int0) {
            case 0:
                int1 = ocParam(varc_1691, Param.stabattack);
                break;
            case 1:
                if (ocParam(varc_1691, Param.slashattack) > int1) {
                    int1 = ocParam(varc_1691, Param.slashattack);
                }
                break;
            case 2:
                if (ocParam(varc_1691, Param.crushattack) > int1) {
                    int1 = ocParam(varc_1691, Param.crushattack);
                }
                break;
            case 3:
                if (ocParam(varc_1691, Param.magicattack) > int1) {
                    int1 = ocParam(varc_1691, Param.magicattack);
                }
                break;
            case 4:
                if (ocParam(varc_1691, Param.rangeattack) <= int1) {
                    break;
                }
                int1 = ocParam(varc_1691, Param.rangeattack);
                break;
        }
        int0 = int0 + 1;
    }
    return int1;
}
