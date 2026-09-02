/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,dob_confirm_load]

function dob_confirm_load(): void {
    ifSetText(tostring(varp_1652) + " " + enumOp(type_int, type_string, Enum.dob_months, varp_1653) + " " + tostring(varp_1654), Component.dob_confirm.date_text);
}
