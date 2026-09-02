/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5879

function cs2_5879(): void {
    let int0: component = Component.interface_1253.component_1253_52;
    let int1: component = Component.interface_1253.component_1253_53;

    varc_1782 = 0;
    let int2: number = max(0, varc_1800 + varbit_10862 + varbit_wof_earned_spins);
    ifSetHide(true, Component.interface_1253.component_1253_28);
    ifSetHide(true, Component.interface_1253.component_1253_48);

    if (varbit_wof_reward_object_id > 0) {
        ifSetHide(true, Component.interface_1253.component_1253_33);
        ifSetHide(false, Component.interface_1253.component_1253_38);
    } else {
        ifSetHide(false, Component.interface_1253.component_1253_33);
        ifSetHide(true, Component.interface_1253.component_1253_38);
    }
    cs2_6505();
    cs2_5910(varbit_10860);
    varc_1781 = -1;
    varc_1785 = 0;
    ifSetOnVarcTransmit(hook(cs2_5884, "Y", [], [1781]), int0);
    ifSetOnVarTransmit(hook(cs2_5901, "Y", [], [2594]), int0);
    ifSetOnVarcTransmit(hook(cs2_6265, "Y", [], [1928]), int1);
    ifSetOnInvTransmit(hook(cs2_5901, "Y", [], [665]), Component.interface_1253.component_1253_79);
    ifSetOnVarTransmit(hook(cs2_5880, "Y", [], [2533]), Component.interface_1253.component_1253_95);
    ifSetOnVarcTransmit(hook(cs2_5880, "Y", [], [1800]), Component.interface_1253.component_1253_95);
    ifSetOnTimer(hook(cs2_5883, "iiii", [0, 0, 0, 0]), Component.interface_1253.component_1253_82);
    ifSetOnTimer(hook(cs2_5912, "i", [0]), Component.interface_1253.component_1253_52);
    ifSetText(tostring(varbit_10862), Component.interface_1253.component_1253_95);
    ifSetHide(false, Component.interface_1253.component_1253_37);

    if (varbit_10866 == 5) {
        ifSetHide(true, Component.interface_1253.component_1253_101);
        ifSetHide(true, Component.interface_1253.component_1253_102);
    }
    ifSetOnVarcTransmit(hook(cs2_5905, "Y", [], [1790]), Component.interface_1253.component_1253_258);
    proc_deltooltip(Component.interface_1253.component_1253_51);
    varc_1784 = 0;
    let int3: graphic = cs2_4074();
    ifSetGraphic(cs2_6267(int3), Component.interface_1253.component_1253_71);
    let int4: graphic = cs2_6066();
    ifSetGraphic(int4, Component.interface_1253.component_1253_14);
    ifSetGraphic(int4, Component.interface_1253.component_1253_305);
    let int5: component = Component.interface_1253.component_1253_84;
    let int6: number = 1;

    if (varc_1803 == 1) {
        int6 = 223;
        ifSethflip(true, Component.interface_1253.component_1253_96);
        ifSethflip(true, Component.interface_1253.component_1253_97);
        ifSethflip(true, Component.interface_1253.component_1253_98);
    } else {
        int6 = 5;
        ifSethflip(false, Component.interface_1253.component_1253_96);
        ifSethflip(false, Component.interface_1253.component_1253_97);
        ifSethflip(false, Component.interface_1253.component_1253_98);
    }
    ifSetSize(int6, ifGetHeight(int5), 0, 0, int5);
    cs2_1968();
}
