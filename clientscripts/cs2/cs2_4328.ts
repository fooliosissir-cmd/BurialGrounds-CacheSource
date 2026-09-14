/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4328

function cs2_4328(intArg0: component): void {
    if (pushVarClanSettingBit<11>() == 0) {
        ifSetGraphic(enumOp(type_int, type_graphic, Enum.clan_flag_selection_2gfx, pushVarClanSettingBit<7>()), intArg0);
    } else {
        ifSetGraphic(enumOp(type_int, type_graphic, Enum.clan_flag_selection_2gfx, 0), intArg0);
    }
}
