/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,ql4_special_requirements]

function ql4_special_requirements(intArg0: number): number {
    switch (intArg0) {
        case 79:
            if (varbit_cleanup_progress == 0) {
                return 0;
            }
            break;
        case 144:
            if (varbit_vm_soa_extra == 0) {
                return 0;
            }
            break;
        case 145:
            if (varbit_dsd_quest < 10) {
                return 0;
            }
            break;
        case 35:
            if (varbit_troll_freed_eadgar == 0) {
                return 0;
            }
            break;
        case 120:
            if (varbit__100_pirate_quest_var < 110) {
                return 0;
            }
            break;
        case 157:
            if (varbit_vm_kudos < 125) {
                return 0;
            }
            break;
        case 156:
            if (cs2_2656() < 100) {
                return 0;
            }
            break;
        case 162:
            if (varbit_kr_knightwaves_state < 8) {
                return 0;
            }
            if (varbit_snp_finished_tutorial == 0) {
                return 0;
            }
            if (varbit_snp_played_game == 0) {
                return 0;
            }
            break;
        case 163:
            if (varbit_atfrem_hard_reward == 0) {
                return 0;
            }
            break;
        case 168:
            if (varbit_chickenquest < 20) {
                return 0;
            }
            break;
        case 171:
            if (varbit_pc_played_once == 0) {
                return 0;
            }
            break;
        case 174:
            if (varbit_conq_done_tutorial == 0) {
                return 0;
            }
            break;
        case 179:
            if (cs2_2656() < 100) {
                return 0;
            }
            if (varbit_hundred_ilm_quest < 50) {
                return 0;
            }
            if (varbit_desert_quest_set_up < 5) {
                return 0;
            }
            break;
        case 148:
            if (varbit_task_completed_total < 6) {
                return 0;
            }
            break;
        default:
            return 1;
    }
    return 1;
}
