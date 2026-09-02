/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5906

function cs2_5906(): void {
    proc_deltooltip(Component.interface_1253.component_1253_51);
    ifSetHide(true, Component.interface_1253.component_1253_50);
    ifSetHide(true, Component.interface_1253.component_1253_28);
    ifSetHide(false, Component.interface_1253.component_1253_38);
    ifSetHide(true, Component.interface_1253.component_1253_33);
    proc_deltooltip(Component.interface_1253.component_1253_51);
    varc_1784 = 0;
    ifSetHide(true, Component.interface_1253.component_1253_48);

    if (varbit_wof_reward_object_id > 0) {
        ifSetHide(false, Component.interface_1253.component_1253_48);
    }
    ifSetPosition(-162, -16, 1, 1, Component.interface_1253.component_1253_48);
    let int0: struct = cs2_5936(varbit_10860);
    let int1: number = structParam(int0, Param.param_2268);
    let int2: obj = invGetobj(665, varbit_10860);
    let int3: number = invGetNum(665, varbit_10860);

    if (varbit_wof_reward_object_id > 0) {
        ifSetObject(int2, int3, Component.interface_1253.component_1253_202);
        ifSetObject(int2, int3, Component.interface_1253.component_1253_35);
        ifSetHide(false, Component.interface_1253.component_1253_48);
    } else {
        ifSetObject(-1, 0, Component.interface_1253.component_1253_202);
        ifSetObject(-1, 0, Component.interface_1253.component_1253_35);
    }

    if (varbit_wof_reward_object_id > 0) {
        ifSetText(cs2_5909(int1, varbit_10865, int2, int3), Component.interface_1253.component_1253_162);
    } else {
        ifSetText("", Component.interface_1253.component_1253_162);
    }
    ifSetText("Spins remaining: " + tostring(max(0, varbit_10862 + varbit_wof_earned_spins + varc_1800)), Component.interface_1253.component_1253_161);
    ifSetText(cs2_789(), Component.interface_1253.component_1253_40);
    let int4: graphic = cs2_5941(varbit_10860);

    if (varbit_wof_reward_object_id > 0) {
        ifSetGraphic(int4, Component.interface_1253.component_1253_201);
        ifSetGraphic(int4, Component.interface_1253.component_1253_34);
    } else {
        ifSetGraphic(-1, Component.interface_1253.component_1253_201);
        ifSetGraphic(-1, Component.interface_1253.component_1253_34);
    }
    cs2_6506();
}
