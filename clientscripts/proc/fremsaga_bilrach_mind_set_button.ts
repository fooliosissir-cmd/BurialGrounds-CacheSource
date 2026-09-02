/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,fremsaga_bilrach_mind_set_button]

function fremsaga_bilrach_mind_set_button(strArg0: string): void {
    ccSetfill(true);
    ccSetTrans(255);
    ccSetOnOpt(hook(fremsaga_bilrach_mind_probe_create, "", []));
    ccSetOp(1, strArg0);
    ccSetnoclickthrough(true);
}
