/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,battlestaff_number]

function battlestaff_number(): obj {
    let int0: obj = Obj.mcannonremains;

    if (varbit_atvar_elite_reward == 1) {
        if (varbit_atvar_staffs_sold > 79) {
            int0 = Obj.mcannonremains;
        } else {
            int0 = 80 - varbit_atvar_staffs_sold;
        }
    } else if (varbit_atvar_hard_reward == 1) {
        if (varbit_atvar_staffs_sold > 63) {
            int0 = Obj.mcannonremains;
        } else {
            int0 = 64 - varbit_atvar_staffs_sold;
        }
    } else if (varbit_atvar_med_reward == 1) {
        if (varbit_atvar_staffs_sold > 31) {
            int0 = Obj.mcannonremains;
        } else {
            int0 = 32 - varbit_atvar_staffs_sold;
        }
    } else if (varbit_atvar_easy_reward == 1) {
        if (varbit_atvar_staffs_sold > 15) {
            int0 = Obj.mcannonremains;
        } else {
            int0 = 16 - varbit_atvar_staffs_sold;
        }
    } else if (varbit_atvar_easy_reward == 0) {
        if (varbit_atvar_staffs_sold > 7) {
            int0 = Obj.mcannonremains;
        } else {
            int0 = 8 - varbit_atvar_staffs_sold;
        }
    }
    return int0;
}
