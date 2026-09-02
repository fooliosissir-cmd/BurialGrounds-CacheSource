/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,objreq_info_requirement]

function objreq_info_requirement(intArg0: number, intArg1: number, strArg0: string): string {
    if (intArg0 < intArg1) {
        return "<br>" + "<col=ff0000>" + strArg0;
    } else {
        return "<br>" + "<col=00ff00>" + strArg0;
    }
}
