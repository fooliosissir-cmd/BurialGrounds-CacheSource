/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_488

function cs2_488(intArg0: number): struct {
    switch (intArg0) {
        case 1:
            return Struct.conq_command_battle_cry;
        case 2:
            return Struct.conq_command_stoicism;
        case 3:
            return Struct.conq_command_regenerate;
        case 4:
            return Struct.conq_command_barrage;
        case 5:
            return Struct.conq_command_bloodlust;
        case 6:
            return Struct.conq_command_chastise;
        case 7:
            return Struct.conq_command_vigilance;
        case 8:
            return Struct.conq_command_shield_wall;
        case 9:
            return Struct.conq_command_winds_of_change;
        default:
            return -1;
    }
}
