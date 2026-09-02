/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_936

function cs2_936(intArg0: obj): string {
    let str0: string = "";
    let int1: number = ocParam(intArg0, Param.param_763);

    switch (ocParam(intArg0, Param.use_requires_special)) {
        case 1:
            return objreq_info_requirement(varp_tbwt_lubufu, 10, "Part of quest: Tai Bwo Wannai Trio");
        case 2:
            return objreq_info_requirement(varbit_dsd_quest, 10, "Complete: Chaos Tunnels");
        default:
            return "";
    }
}
