/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4723

function cs2_4723(intArg0: number, intArg1: number): [number, string] {
    let int2: number = 0;
    let int3: number = 0;
    let int4: number = 0;
    let int5: number = 0;
    let int6: number = 0;
    let int7: number = 0;
    let int8: number = 0;
    let int9: number = 0;
    let int10: number = 0;
    let int11: number = 0;
    let int12: number = 0;
    let int13: struct = -1;

    if (clanProfileFind() == 1) {
        int13 = enumOp(type_int, type_struct, Enum.clan_build_reqs_walls, loadClanVarbit<2580>());
        if (int13 != -1) {
            int2 = structParam(int13, Param.clan_build_req_wall_tier);
            int3 = structParam(int13, Param.clan_build_req_warehouse_tier);
            int4 = structParam(int13, Param.clan_build_req_battlefield_tier);
            int5 = structParam(int13, Param.clan_build_req_woodcutting_tier);
            int6 = structParam(int13, Param.clan_build_req_mining_tier);
            int7 = structParam(int13, Param.clan_build_req_smithing_tier);
            int8 = structParam(int13, Param.clan_build_req_firemaking_tier);
            int9 = structParam(int13, Param.clan_build_req_cooking_tier);
            int10 = structParam(int13, Param.clan_build_req_crafting_tier);
            int11 = structParam(int13, Param.clan_build_req_summoning_tier);
        }
        switch (intArg0) {
            case 1:
                if (intArg1 < int5) {
                    int12 = 1;
                }
                break;
            case 2:
                if (intArg1 < int6) {
                    int12 = 1;
                }
                break;
            case 3:
                if (intArg1 < int8) {
                    int12 = 1;
                }
                break;
            case 4:
                if (intArg1 < int7) {
                    int12 = 1;
                }
                break;
            case 7:
                if (intArg1 < int11) {
                    int12 = 1;
                }
                break;
            case 5:
                if (intArg1 < int10) {
                    int12 = 1;
                }
                break;
            case 6:
                if (intArg1 < int9) {
                    int12 = 1;
                }
                break;
        }
    }

    if (int12 == 1) {
        return [0, "Downgrading this building would violate the requirements for your citadel walls."];
    }
    return [1, ""];
}
