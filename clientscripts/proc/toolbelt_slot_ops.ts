/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,toolbelt_slot_ops]

function toolbelt_slot_ops(intArg0: component, intArg1: number, intArg2: number): void {
    if (intArg0 != Component.interface_1178.component_1178_19) {
        return;
    }
    if (intArg1 == 1 && ((intArg2 == 1 && varbit_toolbelt_pickaxe_tier >= 2) || (intArg2 == 4 && varbit_toolbelt_hatchet_tier >= 2))) {
        ifSetOp(1, "Withdraw", Component.interface_1178.tiered_tool_model);
    } else {
        ifClearops(Component.interface_1178.tiered_tool_model);
    }
}
