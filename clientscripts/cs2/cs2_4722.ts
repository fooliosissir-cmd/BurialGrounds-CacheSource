/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4722

function cs2_4722(intArg0: number, intArg1: number): [number, string] {
    let str0: string = "";
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
    let int13: number = 0;
    let int14: number = 0;
    let int15: number = 0;
    let int16: number = 0;
    let int17: number = 0;
    let int18: number = 0;
    let int19: number = 0;
    let int20: number = 0;
    let int21: number = 0;
    let int22: number = 0;
    let int23: number = 0;
    let int24: number = 0;
    let int25: number = 0;
    let int26: number = 0;
    let int27: Enum = -1;
    let int28: struct = -1;

    if (clanProfileFind() == 1) {
        int2 = pushVarClanBit<2580>();
        int3 = pushVarClanBit<2581>();
        int4 = pushVarClanBit<2582>();
        int22 = 4;
        while (int22 <= 15) {
            int24 = cs2_4949(int22);
            int23 = cs2_4959(int22);
            switch (int24) {
                case 1:
                    int5 = int23;
                    break;
                case 2:
                    int6 = int23;
                    break;
                case 3:
                    int8 = int23;
                    break;
                case 4:
                    int7 = int23;
                    break;
                case 5:
                    int10 = int23;
                    break;
                case 6:
                    int9 = int23;
                    break;
                case 7:
                    int11 = int23;
                    break;
            }
            int22 = int22 + 1;
        }
        int27 = enumOp(type_int, type_enum, Enum.clan_build_hotspot_type_to_reqs_enum, intArg0);
        int28 = enumOp(type_int, type_struct, int27, intArg1);
        int12 = structParam(int28, Param.clan_build_req_wall_tier);
        int13 = structParam(int28, Param.clan_build_req_warehouse_tier);
        int14 = structParam(int28, Param.clan_build_req_battlefield_tier);
        int15 = structParam(int28, Param.clan_build_req_woodcutting_tier);
        int16 = structParam(int28, Param.clan_build_req_mining_tier);
        int17 = structParam(int28, Param.clan_build_req_smithing_tier);
        int18 = structParam(int28, Param.clan_build_req_firemaking_tier);
        int19 = structParam(int28, Param.clan_build_req_cooking_tier);
        int20 = structParam(int28, Param.clan_build_req_crafting_tier);
        int21 = structParam(int28, Param.clan_build_req_summoning_tier);
        int25 = int12 - int2;
        if (int25 > 1) {
            str0 = append(str0, "Your citadel is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your citadel is one tier too low. ");
            int26 = 1;
        }
        int25 = int13 - int3;
        if (int25 > 1) {
            str0 = append(str0, "Your warehouse is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your warehouse is one tier too low. ");
            int26 = 1;
        }
        int25 = int14 - int4;
        if (int25 > 1) {
            str0 = append(str0, "Your battlefield is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your battlefield is one tier too low. ");
            int26 = 1;
        }
        int25 = int15 - int5;
        if (int25 > 1) {
            str0 = append(str0, "Your Woodcutting plot is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your Woodcutting plot is one tier too low. ");
            int26 = 1;
        }
        int25 = int16 - int6;
        if (int25 > 1) {
            str0 = append(str0, "Your Mining plot is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your Mining plot is one tier too low. ");
            int26 = 1;
        }
        int25 = int18 - int8;
        if (int25 > 1) {
            str0 = append(str0, "Your Firemaking plot is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your Firemaking plot is one tier too low. ");
            int26 = 1;
        }
        int25 = int17 - int7;
        if (int25 > 1) {
            str0 = append(str0, "Your Smithing plot is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your Smithing plot is one tier too low. ");
            int26 = 1;
        }
        int25 = int20 - int10;
        if (int25 > 1) {
            str0 = append(str0, "Your Crafting plot is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your Crafting plot is one tier too low. ");
            int26 = 1;
        }
        int25 = int19 - int9;
        if (int25 > 1) {
            str0 = append(str0, "Your Cooking plot is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your Cooking plot is one tier too low. ");
            int26 = 1;
        }
        int25 = int21 - int11;
        if (int25 > 1) {
            str0 = append(str0, "Your Summoning plot is " + tostring(int25) + " tiers too low. ");
            int26 = 1;
        } else if (int25 == 1) {
            str0 = append(str0, "Your Summoning plot is one tier too low. ");
            int26 = 1;
        }
        if (int26 == 0) {
            return [1, str0];
        }
    }
    return [0, str0];
}
