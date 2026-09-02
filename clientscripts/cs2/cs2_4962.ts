/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4962

function cs2_4962(intArg0: number): number {
    let int1: number = -1;

    if (clanProfileFind() == 1) {
        int1 = cs2_4971(intArg0);
        if (loadClanVarbit<2148>() == int1 || loadClanVarbit<2165>() == int1 || loadClanVarbit<2182>() == int1) {
            return 1;
        }
    }
    return 0;
}
