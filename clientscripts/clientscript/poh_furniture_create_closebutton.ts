/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,poh_furniture_create_closebutton]

function poh_furniture_create_closebutton(intArg0: component): void {
    if (testBit(varc_841, 0) == 1) {
        ifClearops(intArg0);
        ifClearscripthooks(intArg0);
        ifSetPauseText("Back", intArg0);
    } else {
        ifSetOp(1, "Close", intArg0);
        ifSetOnOpt(hook(closebutton_click, "", []), intArg0);
        ifSetPauseText("", intArg0);
    }
    ifSetOnVarcTransmit(hook(poh_furniture_create_closebutton, "IY", [intArg0], [841]), intArg0);
}
