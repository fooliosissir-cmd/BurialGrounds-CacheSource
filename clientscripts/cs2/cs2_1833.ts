/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1833

function cs2_1833(intArg0: number, intArg1: number): void {
    if (clanwars_setup_clicktest(intArg0) == 0) {
        return;
    }

    if (mapMembers() == 0 && structParam(enumOp(type_int, type_struct, Enum.clanwars_arena_options, intArg1), Param.clanwars_arena_membersonly) == 1) {
        return;
    }

    if (varc_clanwars_rulevarc_arenachoice != intArg1) {
        varc_clanwars_rulevarc_arenachoice = intArg1;
        cs2_1781();
    }
}
