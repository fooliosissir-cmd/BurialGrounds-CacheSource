/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,skillguide_legacy_name]

function skillguide_legacy_name(intArg0: struct): string {
    let str0: string = structParam(intArg0, Param.skillguide_name);
    if (structParam(intArg0, Param.skillguide_members) == 1) {
        str0 = append("Members: ", str0);
    }
    if (compare("", structParam(intArg0, Param.skillguide_extrareq)) != 0) {
        str0 = str0 + "<br>" + " (" + structParam(intArg0, Param.skillguide_extrareq) + ")";
    }
    return str0;
}
