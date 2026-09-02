/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,playerdesign4_vartransmit]

function playerdesign4_vartransmit(): void {
    let int0: boolean = -1;

    if (varbit_8093 != varc_196 || varc_197 != varbit_playerdesign4_role) {
        int0 = int_to_bool(varbit_8093);
        varc_196 = varbit_8093;
        varc_197 = varbit_playerdesign4_role;
        cs2_387(int0);
        varc_86 = varbit_playerdesign4_outfit;
        cs2_390(int0);
    } else if (varc_86 != varbit_playerdesign4_outfit) {
        varc_86 = varbit_playerdesign4_outfit;
        cs2_390(int_to_bool(varc_196));
    }

    if (varc_1020 != varbit_6501) {
        varc_1020 = varbit_6501;
        cs2_391();
    }
}
