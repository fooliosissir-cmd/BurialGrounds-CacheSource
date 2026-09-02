/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objreq_print_triple]

function objreq_print_triple(strArg0: string, strArg1: string, strArg2: string, intArg0: number): void {
    let int1: number = paraheight(strArg0, intArg0, Graphic.p11_full);
    let int2: number = paraheight(strArg1, intArg0, Graphic.p11_full);

    if (int2 > int1) {
        int1 = int2;
    }
    int2 = paraheight(strArg2, intArg0, Graphic.p11_full);

    if (int2 > int1) {
        int1 = int2;
    }
    objreq_print(strArg0, int1, 0, 0, Graphic.p11_full);
    objreq_print(strArg1, int1, 1, 0, Graphic.p11_full);
    objreq_print(strArg2, int1, 2, 1, Graphic.p11_full);
}
