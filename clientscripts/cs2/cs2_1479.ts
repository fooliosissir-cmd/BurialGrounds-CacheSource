/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1479

function cs2_1479(strArg0: string): number {
    strArg0 = escape(strArg0);
    deltooltip_action(Component.interface_762.component_762_99);
    varc_tooltip_time = 0;
    cs2_1464();
    ifSetHide(true, Component.interface_762.component_762_117);

    if (stringLength(strArg0) == 0) {
        ifSetText("Bank of RuneScape (no search entered)", Component.interface_762.component_762_47);
        ifSetHide(false, Component.interface_762.component_762_118);
        cs2_1455();
        return 0;
    } else {
        ifSetText("Bank of RuneScape (search: '" + strArg0 + "')", Component.interface_762.component_762_47);
        ifSetHide(true, Component.interface_762.component_762_118);
    }
    let int0: number = invSize(95);
    let int1: number = 0;
    let int2: number = 0;
    ifSetScrollPos(0, 0, Component.interface_762.component_762_95);

    while (int1 < int0) {
        if (stringIndexofString(lowercase(ocName(invGetobj(95, int1))), lowercase(strArg0), 0) != -1) {
            if (ccFind(Component.interface_762.component_762_95, int1) == 1) {
                ccSetPosition(44 * (int2 % 10) + 8, int2 / 10 * 44 + 5, 0, 0);
                ccSetHide(false);
                int2 = int2 + 1;
            }
        } else if (ccFind(Component.interface_762.component_762_95, int1) == 1) {
            ccSetPosition(0, 0, 0, 0);
            ccSetHide(true);
        }
        int1 = int1 + 1;
    }

    if (int2 == 0) {
        ifSetHide(false, Component.interface_762.component_762_117);
    }
    cs2_1458(int2);
    return int2;
}
