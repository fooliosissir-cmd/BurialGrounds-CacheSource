/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_field_setup_update]

function proc_clan_field_setup_update(intArg0: component): void {
    let int1: number = 0;
    let int2: number = enumGetoutputcount(Enum.clan_field_rules);
    let int3: Enum = -1;

    while (int1 < int2) {
        int3 = enumOp(type_int, type_enum, Enum.clan_field_rules, int1);
        if (int3 != -1 && ccFind(intArg0, int1 * 10 + 9) == 1) {
            ccSetText(enumOp(type_int, type_string, int3, cs2_5089(int3)));
        }
        int1 = int1 + 1;
    }

    switch (varbit_clan_field_limbo) {
        case 1:
            if (varc_demomode_create == 1) {
                ifSetText("Press 'Confirm' when you've made your choices.", Component.clan_field_setup.status);
            } else {
                ifSetText("Waiting for the battle's initiator to choose the rules...", Component.clan_field_setup.status);
            }
            break;
        case 2:
            if (varc_demomode_create == 1) {
                ifSetText("Press 'Confirm' when you've made your choices.", Component.clan_field_setup.status);
            } else {
                ifSetText("Waiting for " + varcstr_clan_field_setup_name + " to choose the rules...", Component.clan_field_setup.status);
            }
            break;
        case 3:
            ifSetText("Loading elements...", Component.clan_field_setup.status);
            break;
        case 4:
            ifSetText("Building elements...", Component.clan_field_setup.status);
            break;
        case 5:
            ifSetText("Failed to build battlefield.", Component.clan_field_setup.status);
            break;
        case 6:
            ifSetText("Initialising build mode.", Component.clan_field_setup.status);
            break;
        default:
            ifSetText("Loading...", Component.clan_field_setup.status);
            break;
    }
    cs2_5085(intArg0);
}
