/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1664

function cs2_1664(intArg0: number): void {
    if (clientClock() < intArg0) {
        return;
    } else {
        ifSetOnTimer(noHook(""), Component.interface_762.component_762_95);
    }
    let int1: number = 0;
    let int2: number = 0;
    let int3: number = invSize(95);
    deltooltip_action(Component.interface_762.component_762_99);
    let [int4, int5] = cs2_1467(varbit_4893);

    while (int1 < int3) {
        if (ccFind(Component.interface_762.component_762_95, int1) == 1) {
            ccSetHide(true);
            if (invGetobj(95, int1) != -1) {
                cs2_1453(int1);
            } else {
                ccSetObject(-1, -1);
                ccClearops();
            }
        }
        int1 = int1 + 1;
    }

    if (varbit_4893 == 0) {
        if (varc_meslayermode == 11) {
            varcstr_138 = varcstr_meslayerinput;
        }
        cs2_1479(varcstr_138);
    } else if (varbit_4893 == 1) {
        cs2_1456();
    } else {
        cs2_1457(...cs2_1467(varbit_4893));
    }

    if (varbit_4893 != 0 && varc_188 == 1) {
        cs2_1474();
    }
    cs2_1459();
}
