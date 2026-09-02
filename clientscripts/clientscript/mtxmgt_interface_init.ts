/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,mtxmgt_interface_init]

function mtxmgt_interface_init(intArg0: number): void {
    if (varc_1963 != varbit_mtxmgt_selected_category) {
        cs2_6463(varbit_mtxmgt_selected_category);
        mtxmgt_interface_build_list(varbit_mtxmgt_selected_category, varbit_mtxmgt_show_all, 1);
        ifSetHide(true, Component.interface_1311.component_1311_58);
        ifSetHide(true, Component.interface_1311.component_1311_59);
    }

    if (intArg0 == 1) {
        varc_1969 = false;
        proc_mtxmgt_player_preview(0, 0, 1);
        cs2_6233(0, Component.interface_1311.component_1311_176);
        mtxmgt_build_recolours();
        cs2_4501(Component.interface_1311.component_1311_117, enumOp(type_int, type_string, Enum.mtxmgt_preset_names, varbit_mtxmgt_selected_preset));
    }
}
