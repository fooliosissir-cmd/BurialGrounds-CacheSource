/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5481

function cs2_5481(): number {
    if (varbit_hvh_game_role == 2 || varbit_hvh_game_role == 3) {
        return 1;
    }

    if (varbit_sc_team != 0) {
        return 1;
    }

    switch (invGetobj(94, 1)) {
        case Obj.barbassault_playericon_attacker_01:
        case Obj.barbassault_playericon_attacker_02:
        case Obj.barbassault_playericon_attacker_03:
        case Obj.barbassault_playericon_attacker_04:
        case Obj.barbassault_playericon_attacker_05:
            return 1;
    }

    if (varbit_dom_catalytic_enable == 1) {
        return 1;
    }

    if (varc_bank_v2_inputdelay == 1) {
        return 1;
    }
    return 0;
}
