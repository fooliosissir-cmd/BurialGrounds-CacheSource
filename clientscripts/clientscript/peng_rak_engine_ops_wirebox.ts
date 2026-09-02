/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,peng_rak_engine_ops_wirebox]

function peng_rak_engine_ops_wirebox(intArg0: component): void {
    if (varc_peng_rak_eng_tools == 2 || varc_peng_rak_eng_tools == 8) {
        ifSetOp(1, "Cut wire", intArg0);
    } else if (varc_peng_rak_eng_tools == 3 || varc_peng_rak_eng_tools == 9) {
        ifSetOp(1, "Replace wire", intArg0);
    } else if (varc_peng_rak_eng_tools == 4 || varc_peng_rak_eng_tools == 10) {
        ifSetOp(1, "Repair wire", intArg0);
    } else {
        ifSetOp(1, "Inspect", intArg0);
    }
}
