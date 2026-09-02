/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5884

function cs2_5884(): void {
    if (varc_1785 == 1) {
        return;
    }

    if (varc_1781 < 0 || varc_1781 >= 13) {
        return;
    }
    varc_1785 = 1;
    let [int0, int1] = cs2_5886(varbit_10860);
    ifSetOnTimer(hook(cs2_5885, "ii", [int0, int1]), Component.interface_1253.component_1253_52);
    let int2: struct = cs2_5936(varbit_10860);
    let int3: number = structParam(int2, Param.param_2268);
    let int4: obj = invGetobj(665, varbit_10860);
    let int5: number = invGetNum(665, varbit_10860);
    let int6: graphic = cs2_5941(varbit_10860);

    if (varbit_wof_reward_object_id > 0) {
        ifSetObject(int4, int5, Component.interface_1253.component_1253_202);
        ifSetObject(int4, int5, Component.interface_1253.component_1253_35);
        ifSetText(cs2_5909(int3, varbit_10865, int4, int5), Component.interface_1253.component_1253_162);
        ifSetGraphic(int6, Component.interface_1253.component_1253_201);
        ifSetGraphic(int6, Component.interface_1253.component_1253_34);
    } else {
        ifSetObject(-1, 0, Component.interface_1253.component_1253_202);
        ifSetObject(-1, 0, Component.interface_1253.component_1253_35);
        ifSetText("", Component.interface_1253.component_1253_162);
        ifSetGraphic(-1, Component.interface_1253.component_1253_201);
        ifSetGraphic(-1, Component.interface_1253.component_1253_34);
    }
    ifSetText("Spins remaining: " + tostring(max(0, varbit_10862 + varbit_wof_earned_spins + varc_1800)), Component.interface_1253.component_1253_161);

    if (playerMember() == 0) {
        ifSetText("Members get two spins a day. Subscribe now to claim your earned spin.", Component.interface_1253.component_1253_161);
        ifSetHide(true, Component.interface_1253.component_1253_259);
        ifSetText("Subscribe", Component.interface_1253.component_1253_264);
        ifSetOp(1, "Subscribe", Component.interface_1253.component_1253_258);
        if (ocMembers(int4) == 1 && playerMember() == 0) {
            ifSetText("Subscribe to claim", Component.interface_1253.component_1253_180);
            ifSetOp(1, "Subscribe", Component.interface_1253.component_1253_177);
        }
    } else {
        ifSetText("Play again", Component.interface_1253.component_1253_264);
        ifSetOp(1, "Play", Component.interface_1253.component_1253_258);
        ifSetText("Claim item", Component.interface_1253.component_1253_180);
        ifSetOp(1, "Claim", Component.interface_1253.component_1253_177);
    }
    cs2_5910(int3);
    cs2_1968();
    cs2_6506();
}
