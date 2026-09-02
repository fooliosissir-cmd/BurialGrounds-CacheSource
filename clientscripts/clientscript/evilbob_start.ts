/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,evilbob_start]

function evilbob_start(intArg0: component, intArg1: component): void {
    if (bool_to_int(varc_ame_evilbob_start) == 0) {
        return;
    }
    ifSetHide(false, intArg1);

    if (varc_ame_evilbob_lookat1 == -1 || varc_ame_evilbob_lookat2 == -1) {
        return;
    }

    if (varc_ame_evilbob_moveto1 == -1 || varc_ame_evilbob_moveto2 == -1) {
        varc_ame_evilbob_moveto1 = coord(3422, 4841, 0);
        varc_ame_evilbob_moveto2 = coord(3423, 4840, 0);
    }
    let int2: number = randominc(50) + 50;
    splineNew(0, 2);
    splineAddPoint(0, 0, varc_ame_evilbob_moveto1, 450, varc_ame_evilbob_moveto1, 450 + int2 / 2, 0);
    splineAddPoint(0, 1, varc_ame_evilbob_moveto2, 450 + int2, varc_ame_evilbob_moveto2, 450 + int2 * 2, 0);
    splineNew(1, 2);
    splineAddPoint(1, 0, varc_ame_evilbob_lookat1, 250, varc_ame_evilbob_lookat1, 250, 0);
    splineAddPoint(1, 1, varc_ame_evilbob_lookat2, 150, varc_ame_evilbob_lookat2, 150, 0);
    camMovealong(0, 0, 200, 200, 1, 0);
}
