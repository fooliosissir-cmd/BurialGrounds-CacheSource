/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,objdialog_select]

function objdialog_select(intArg0: obj): void {
    resumeObjdialog(intArg0);
    proc_objdialog_close();
}
