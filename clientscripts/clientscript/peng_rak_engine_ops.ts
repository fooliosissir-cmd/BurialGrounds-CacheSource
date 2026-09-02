/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,peng_rak_engine_ops]

function peng_rak_engine_ops(intArg0: component): void {
    if (varc_peng_rak_eng_tools == 5 || varc_peng_rak_eng_tools == 11) {
        ifSetOp(1, "Pump", intArg0);
    } else {
        ifSetOp(1, "Inspect", intArg0);
    }
}
