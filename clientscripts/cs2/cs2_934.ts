/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_934

function cs2_934(intArg0: obj): string {
    let str0: string = "";
    let int1: number = ocParam(intArg0, Param.wear_requires_special_value);

    switch (ocParam(intArg0, Param.wear_requires_special)) {
        case 1:
            if (int1 == 1) {
                str0 = "Rescued 1 dignitary in Recipe for Disaster";
            } else {
                str0 = "Rescued " + tostring(int1) + " dignitaries in Recipe for Disaster";
            }
            return objreq_info_requirement(varbit_hundred_subquest_tally, ocParam(intArg0, Param.wear_requires_special_value), str0);
        case 2:
            return objreq_info_requirement(varbit_brut_smith_hasta, 2, "Barbarian spearmaking");
        case 3:
            return objreq_info_requirement(varbit_dsd_quest, 10, "Complete: Chaos Tunnels");
        case 4:
            return objreq_info_requirement(varbit_myreque_2_quest, 280, "Part of quest: In Aid of the Myreque");
        case 5:
            return objreq_info_requirement(varbit_hundred_main_quest_var, 4, "Part of quest: Recipe for Disaster");
        case 6:
            return objreq_info_requirement(varbit_slice_quest, 8, "Part of quest: Another Slice of H.A.M.");
        case 7:
            return objreq_info_requirement(varbit_elem_4_main, 7, "You need to complete the first puzzle in the Elemental Workshop IV Quest.");
        default:
            return "";
    }
}
