/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,skillguide_legacy_unlock]

function skillguide_legacy_unlock(intArg0: struct): string {
    let str0: string = "<col=000080>" + structParam(intArg0, Param.skillguide_name) + "</col>";
    if (structParam(intArg0, Param.skillguide_members) == 1) {
        str0 = append("Members: ", str0);
    }
    if (compare("", structParam(intArg0, Param.skillguide_extrareq)) != 0) {
        str0 = str0 + " (" + structParam(intArg0, Param.skillguide_extrareq) + ")";
    }
    if (compare("", structParam(intArg0, Param.skillguide_info)) != 0) {
        str0 = str0 + "<br>" + structParam(intArg0, Param.skillguide_info);
    }
    return str0;
}
