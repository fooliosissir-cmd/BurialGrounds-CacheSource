/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,scab_thieve]

function scab_thieve(): void {
    let int0: number = varp_scab_thief_clicked;
    let int1: number = 0;

    if (int0 == 0) {
        return;
    }

    if (int0 == 10) {
        varc_scab_total_tries_remaining = varc_scab_total_tries_remaining - 1;
        if (varbit_scab_total_tries_remaining_serverside != varc_scab_total_tries_remaining) {
            if (varbit_scab_total_tries_remaining_serverside > varc_scab_total_tries_remaining) {
                int1 = 1;
                mes("Part of the mechanism jams due to your frenzied manipulation.");
            }
            varc_scab_total_tries_remaining = varbit_scab_total_tries_remaining_serverside;
        }
        if (varc_scab_total_tries_remaining == 0) {
            mes("The mechanism issues forth a whine and shuts down.");
            cs2_675();
        }
        scab_tries_update();
        return;
    }
    int0 = int0 - 1;

    if (testBit(varc_scab_used_mechanisms, int0) == 1) {
        return;
    }
    varc_scab_used_mechanisms = setBit(varc_scab_used_mechanisms, int0);
    varc_scab_total_tries_remaining = varc_scab_total_tries_remaining + 5;
    scab_tries_update();
    let int2: model = enumOp(type_int, type_model, Enum.scab_thieve_model_enum, int0);
    let int3: component = enumOp(type_int, type_component, Enum.scab_thieve_component_enum, int0);
    ifSetModel(int2, int3);
}
