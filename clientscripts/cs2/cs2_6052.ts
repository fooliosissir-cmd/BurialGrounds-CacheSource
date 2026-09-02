/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6052

function cs2_6052(): void {
    let int0: component = Component.interface_1253.component_1253_28;

    cs2_5919();
    cs2_6047(int0, 118);
    cs2_6050();
    ifSetHide(true, Component.interface_1253.component_1253_33);
    ifSetHide(false, Component.interface_1253.component_1253_38);
    ifSetOnTimer(noHook(""), Component.interface_1253.component_1253_52);
    ifSetOnTimer(noHook(""), Component.interface_1253.component_1253_28);
    ifSetOnTimer(noHook(""), Component.interface_1253.component_1253_82);
    ifSetOnTimer(noHook(""), Component.interface_1253.component_1253_52);
    ifSetHide(true, Component.interface_1253.component_1253_37);
    cs2_5892();
    let int1: component = cs2_5933(varbit_10860);
    let int2: number = cs2_5939(varbit_10860);
    let int3: graphic = -1;
    let int4: graphic = -1;

    switch (int2) {
        case 1:
            int3 = Graphic.graphic_9877;
            break;
        case 2:
            int3 = Graphic.graphic_9880;
            break;
        case 3:
            int3 = Graphic.graphic_9883;
            break;
        default:
            int3 = Graphic.graphic_9874;
            break;
    }
    ifSetGraphic(int3, int1);
    let int5: struct = cs2_5936(varbit_10860);
    let int6: number = structParam(int5, Param.param_2268);
    let [int7, int8] = cs2_6188(varbit_10860);

    if (varbit_wof_reward_object_id > 0) {
        int4 = cs2_5941(varbit_10860);
        ifSetGraphic(int4, Component.interface_1253.component_1253_201);
        ifSetGraphic(int4, Component.interface_1253.component_1253_34);
        ifSetObject(int7, int8, Component.interface_1253.component_1253_35);
        ifSetObject(int7, int8, Component.interface_1253.component_1253_202);
        ifSetText(cs2_5909(int6, varbit_10865, int7, int8), Component.interface_1253.component_1253_162);
    } else {
        ifSetGraphic(-1, Component.interface_1253.component_1253_201);
        ifSetGraphic(-1, Component.interface_1253.component_1253_34);
        ifSetObject(-1, 0, Component.interface_1253.component_1253_35);
        ifSetObject(-1, 0, Component.interface_1253.component_1253_202);
        ifSetText("", Component.interface_1253.component_1253_162);
    }
    ifSetText("Spins remaining: " + tostring(max(0, varbit_10862 + varbit_wof_earned_spins + varc_1800)), Component.interface_1253.component_1253_161);
    cs2_1968();
}
