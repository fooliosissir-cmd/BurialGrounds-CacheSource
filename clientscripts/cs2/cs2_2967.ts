/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2967

function cs2_2967(intArg0: number): void {
    cs2_3209();
    create_please_wait(1);
    let int1: number = cs2_3228(7, 0, 0);
    let int2: number = cs2_3228(8, 0, 0);
    let int3: number = 1;

    if (compare(varcstr_124, varcstr_125) != 0 && stringLength(varcstr_124) > 0 && stringLength(varcstr_125) > 0) {
        create_error("Please ensure both passwords match.", Component.interface_673.component_673_73);
        int3 = 0;
    }
    let int4: number = 1;

    if (stringLength(varcstr_122) <= 0) {
        create_error("Please enter your Email address here.", Component.interface_673.component_673_93);
        int4 = 0;
    }

    if (create_check_email(varcstr_122) == 0) {
        create_error("Please enter a valid Email address.", Component.interface_673.component_673_93);
        int4 = 0;
    }
    let int5: number = 1;

    if (stringLength(varcstr_326) <= 0) {
        create_error("Please enter your Email address again here.", Component.interface_673.component_673_112);
        int5 = 0;
    }

    if (compare(varcstr_122, varcstr_326) != 0) {
        create_error("Please ensure both Email addresses match.", Component.interface_673.component_673_112);
        int5 = 0;
    }
    let int6: number = cs2_3954(0);

    if (int4 == 1 && int5 == 1 && int1 == 1 && int2 == 1 && int3 == 1 && int6 == 1) {
        if (varc_1407 < 13) {
            createSetUnder13();
            cs2_4038();
        } else if (createUnder13() == 1) {
            cs2_4038();
        } else {
            createCreateRequest(varcstr_122, varcstr_124, varc_1407, varc_1411);
            ifSetOnTimer(hook(cs2_3220, "", []), Component.interface_673.component_673_26);
        }
    } else {
        create_please_wait(0);
    }
}
