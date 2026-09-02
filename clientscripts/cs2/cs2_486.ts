/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_486

function cs2_486(intArg0: number): npc {
    switch (intArg0) {
        case 1:
            if (varbit_conq_team == 0) {
                return Npc.npc_12200;
            } else {
                return Npc.npc_12197;
            }
            break;
        case 2:
            if (varbit_conq_team == 0) {
                return Npc.npc_12205;
            } else {
                return Npc.npc_12202;
            }
            break;
        case 3:
            if (varbit_conq_team == 0) {
                return Npc.npc_12210;
            } else {
                return Npc.npc_12207;
            }
            break;
        case 4:
            if (varbit_conq_team == 0) {
                return Npc.npc_12215;
            } else {
                return Npc.npc_12212;
            }
            break;
        case 5:
            if (varbit_conq_team == 0) {
                return Npc.npc_12219;
            } else {
                return Npc.npc_12216;
            }
            break;
        case 6:
            if (varbit_conq_team == 0) {
                return Npc.npc_12223;
            } else {
                return Npc.npc_12220;
            }
            break;
        case 7:
            if (varbit_conq_team == 0) {
                return Npc.npc_12227;
            } else {
                return Npc.npc_12224;
            }
            break;
        default:
            return -1;
    }
}
