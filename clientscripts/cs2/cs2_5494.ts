/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5494

function cs2_5494(): number {
    let int0: number = 0;
    let int1: number = 0;

    while (int0 < 5) {
        switch (int0) {
            case 0:
                int1 = ocParam(varc_1691, Param.stabdefence);
                break;
            case 1:
                if (ocParam(varc_1691, Param.slashdefence) > int1) {
                    int1 = ocParam(varc_1691, Param.slashdefence);
                }
                break;
            case 2:
                if (ocParam(varc_1691, Param.crushdefence) > int1) {
                    int1 = ocParam(varc_1691, Param.crushdefence);
                }
                break;
            case 3:
                if (ocParam(varc_1691, Param.magicdefence) > int1) {
                    int1 = ocParam(varc_1691, Param.magicdefence);
                }
                break;
            case 4:
                if (ocParam(varc_1691, Param.rangedefence) <= int1) {
                    break;
                }
                int1 = ocParam(varc_1691, Param.rangedefence);
                break;
        }
        int0 = int0 + 1;
    }
    return int1;
}
