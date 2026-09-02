/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objreq_print_single]

function objreq_print_single(strArg0: string, intArg0: number, intArg1: number): void {
    let int2: number = paraheight(strArg0, intArg1, Graphic.p11_full);

    objreq_print(strArg0, int2, intArg0, 1, Graphic.p11_full);
}
