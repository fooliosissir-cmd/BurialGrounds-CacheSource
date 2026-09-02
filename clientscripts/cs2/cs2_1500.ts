/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_1500

function cs2_1500(intArg0: number, intArg1: number): void {
    if (cs2_706(intArg1) > 0) {
        if (intArg0 == 1) {
            if (varc_188 == 1) {
                cs2_1474();
            }
            cs2_1455();
            cs2_1457(...cs2_1467(intArg1));
            cs2_1463(intArg1);
            ifSetScrollPos(0, cs2_704(intArg1), Component.interface_762.component_762_95);
            scrollbar_ondrag_doscroll(Component.interface_762.component_762_116, Component.interface_762.component_762_95, ifGetScrollY(Component.interface_762.component_762_95), 1);
            varbit_4893 = intArg1;
        } else if (intArg0 == 2) {
            if (intArg1 == 2) {
                varc_204 = varc_205;
            }
            if (intArg1 <= 3) {
                varc_205 = varc_206;
            }
            if (intArg1 <= 4) {
                varc_206 = varc_207;
            }
            if (intArg1 <= 5) {
                varc_207 = varc_208;
            }
            if (intArg1 <= 6) {
                varc_208 = varc_209;
            }
            if (intArg1 <= 7) {
                varc_209 = varc_210;
            }
            if (intArg1 <= 8) {
                varc_210 = varc_211;
            }
            if (intArg1 <= 9) {
                varc_211 = 0;
            }
        }
    }
}
