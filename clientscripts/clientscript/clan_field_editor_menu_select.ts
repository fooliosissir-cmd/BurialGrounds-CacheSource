/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,clan_field_editor_menu_select]

function clan_field_editor_menu_select(intArg0: number, intArg1: number, intArg2: boolean): void {
    if (intArg0 != 1 || enumOp(type_int, type_struct, Enum.clan_field_elements, intArg1) == -1) {
        return;
    }
    soundVorbisVolume(6185, 1, 0, 200);

    if (intArg1 == varbit_clan_field_editor_type) {
        intArg2 = ifGetHide(Component.interface_1111.component_1111_18);
    } else {
        ifSetScrollPos(0, 0, Component.interface_1111.component_1111_27);
        [varbit_clan_field_editor_option1, varbit_clan_field_editor_option2, varbit_clan_field_editor_option3] = [0, 0, 0];
    }
    varbit_clan_field_editor_type = intArg1;

    if (intArg2 == true) {
        cs2_5073(false);
    } else {
        cs2_5073(true);
    }
    cs2_5067();
}
