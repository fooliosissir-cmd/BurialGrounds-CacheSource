/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5788

function cs2_5788(intArg0: number): void {
    if (varbit_task_priority_mode == 1) {
        ifSetHide(true, Component.interface_1220.component_1220_25);
        cs2_4212(Component.interface_1220.component_1220_29, "Next Task", Graphic.graphic_4040, colour(0xEBE0BC), colour(0x000000));
        ifSetPosition(ifGetX(Component.interface_1220.component_1220_23), ifGetY(Component.interface_1220.component_1220_21) + 1, 0, 0, Component.interface_1220.component_1220_23);
    } else {
        ifSetHide(false, Component.interface_1220.component_1220_25);
        cs2_4212(Component.interface_1220.component_1220_29, "Active Task", Graphic.graphic_4040, colour(0xEBE0BC), colour(0x000000));
        ifSetPosition(ifGetX(Component.interface_1220.component_1220_23), ifGetY(Component.interface_1220.component_1220_21) + 1, 0, 0, Component.interface_1220.component_1220_23);
    }

    if (varbit_10700 == 0 && intArg0 == 0) {
        ifSetHide(true, Component.interface_1220.component_1220_41);
    } else {
        ifSetHide(false, Component.interface_1220.component_1220_41);
    }
    let int1: struct = task_get_data(intArg0);

    if (int1 == -1) {
        return;
    }
    cs2_5796(intArg0, 0, Component.interface_1220.component_1220_20, Component.interface_1220.component_1220_19, Component.interface_1220.component_1220_18, -1, -1, -1);
    ifSetSize(190, 277, 0, 0, Component.interface_746.component_746_9);
    cs2_5791();
    cs2_5871(intArg0, varbit_8578);
}
