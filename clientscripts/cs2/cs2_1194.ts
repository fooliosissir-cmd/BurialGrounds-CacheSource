/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1194

function cs2_1194(): void {
    if (varc_1002 == -1) {
        return;
    }
    let int0: number = coordX(varc_1002) - coordX(coord());

    if (int0 > 10 || int0 < -10) {
        return;
    }
    let int1: number = coordZ(varc_1002) - coordZ(coord());

    if (int1 > 10 || int1 < -10) {
        return;
    }
    camFollowcoord(varc_1002);
}
