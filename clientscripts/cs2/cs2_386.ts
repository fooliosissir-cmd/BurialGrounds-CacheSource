/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_386

function cs2_386(intArg0: boolean): void {
    let int1: boolean = int_to_bool(varc_196);

    if (intArg0 == true && varc_197 != 0) {
        cs2_391();
        ifSetHide(true, Component.interface_1028.component_1028_59);
        ifSetHide(true, Component.interface_1028.component_1028_139);
        ifSetHide(false, Component.interface_1028.component_1028_138);
        ifSetHide(false, Component.interface_1028.component_1028_137);
        ifSetSize(274, ifGetHeight(Component.interface_1028.component_1028_136), 0, 0, Component.interface_1028.component_1028_136);
        ifSetHide(false, Component.interface_1028.component_1028_109);
    } else {
        cs2_387(int1);
        cs2_390(int1);
        ifSetHide(false, Component.interface_1028.component_1028_59);
        if (varc_197 == 0) {
            ifSetHide(true, Component.interface_1028.component_1028_139);
            ifSetHide(true, Component.interface_1028.component_1028_138);
        } else {
            ifSetHide(false, Component.interface_1028.component_1028_139);
            if (varbit_playerdesign4_force_player_to_modify_further == 1 && varbit_8247 == 0) {
                ifSetHide(true, Component.interface_1028.component_1028_138);
            } else {
                ifSetHide(false, Component.interface_1028.component_1028_138);
            }
        }
        ifSetSize(150, ifGetHeight(Component.interface_1028.component_1028_136), 0, 0, Component.interface_1028.component_1028_136);
        ifSetHide(true, Component.interface_1028.component_1028_137);
        ifSetHide(true, Component.interface_1028.component_1028_109);
    }
    playerdesign4_tooltip_clear();
}
