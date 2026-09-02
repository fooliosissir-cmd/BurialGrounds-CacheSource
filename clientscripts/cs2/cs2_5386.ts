/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5386

function cs2_5386(intArg0: number): void {
    if (intArg0 == 1) {
        if (varbit_hooks3_consumed_air == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_7);
        }
        if (varbit_hooks3_consumed_mind == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_26);
        }
        if (varbit_hooks3_consumed_water == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_28);
        }
        if (varbit_hooks3_consumed_earth == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_30);
        }
        if (varbit_hooks3_consumed_fire == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_32);
        }
        if (varbit_hooks3_consumed_body == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_34);
        }
        if (varbit_hooks3_consumed_cosmic == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_81);
        }
        if (varbit_hooks3_consumed_chaos == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_5);
        }
        if (varbit_hooks3_consumed_astral == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_84);
        }
        if (varbit_hooks3_consumed_nature == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_86);
        }
        if (varbit_hooks3_consumed_law == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_88);
        }
        if (varbit_hooks3_consumed_death == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_90);
        }
        if (varbit_hooks3_consumed_blood == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_92);
        }
        if (varbit_hooks3_consumed_soul == 1) {
            proc_component_flash_start(Component.interface_1153.component_1153_94);
        }
    } else if (intArg0 < 1) {
        proc_component_flash_stop(Component.interface_1153.component_1153_7);
        proc_component_flash_stop(Component.interface_1153.component_1153_26);
        proc_component_flash_stop(Component.interface_1153.component_1153_28);
        proc_component_flash_stop(Component.interface_1153.component_1153_30);
        proc_component_flash_stop(Component.interface_1153.component_1153_32);
        proc_component_flash_stop(Component.interface_1153.component_1153_34);
        proc_component_flash_stop(Component.interface_1153.component_1153_81);
        proc_component_flash_stop(Component.interface_1153.component_1153_5);
        proc_component_flash_stop(Component.interface_1153.component_1153_84);
        proc_component_flash_stop(Component.interface_1153.component_1153_86);
        proc_component_flash_stop(Component.interface_1153.component_1153_88);
        proc_component_flash_stop(Component.interface_1153.component_1153_90);
        proc_component_flash_stop(Component.interface_1153.component_1153_92);
        proc_component_flash_stop(Component.interface_1153.component_1153_94);
    }
}
