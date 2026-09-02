/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4311

function cs2_4311(): void {
    let int0: number = 0;
    let int1: number = cs2_4293();
    let int2: number = -1;

    if (cs2_4309() == 1) {
        int2 = varc_1500;
    }
    ifSetText("Settings for: " + varcstr_347, Component.interface_1096.component_1096_57);
    ifSetHide(true, Component.interface_1096.component_1096_726);
    ifSetHide(true, Component.interface_1096.component_1096_727);
    ifSetHide(true, Component.interface_1096.component_1096_729);
    ifSetHide(true, Component.interface_1096.component_1096_728);
    ifSetHide(true, Component.interface_1096.component_1096_152);
    ifSetHide(true, Component.interface_1096.component_1096_153);
    ifSetHide(true, Component.interface_1096.component_1096_155);
    ifSetHide(true, Component.interface_1096.component_1096_154);
    ifSetHide(true, Component.interface_1096.component_1096_351);
    ifSetHide(true, Component.interface_1096.component_1096_352);
    ifSetHide(true, Component.interface_1096.component_1096_354);
    ifSetHide(true, Component.interface_1096.component_1096_353);
    ifSetHide(true, Component.interface_1096.component_1096_755);
    ifSetHide(true, Component.interface_1096.component_1096_756);
    ifSetHide(true, Component.interface_1096.component_1096_758);
    ifSetHide(true, Component.interface_1096.component_1096_757);
    ifSetHide(true, Component.interface_1096.component_1096_71);
    ifSetHide(false, Component.interface_1096.component_1096_310);
    ifSetHide(false, Component.interface_1096.component_1096_319);
    ifSetHide(false, Component.interface_1096.component_1096_271);
    ifSetHide(false, Component.interface_1096.component_1096_257);
    let int3: Enum = Enum.enum_3720;

    if (mapLang() == 1) {
        int3 = Enum.clan_int_to_job_title_de;
    } else if (mapLang() == 2) {
        int3 = Enum.clan_int_to_job_title_fr;
    } else if (mapLang() == 3) {
        int3 = Enum.clan_int_to_job_title_pt;
    }

    if (cs2_4309() == 1) {
        if (varc_1568 == 1) {
            ifSetHide(false, Component.interface_1096.component_1096_71);
        }
        if (cs2_4292() == 1) {
            if (int1 > int2 || int1 == 126) {
                ifSetHide(true, Component.interface_1096.component_1096_310);
                ifSetHide(true, Component.interface_1096.component_1096_319);
                ifSetHide(true, Component.interface_1096.component_1096_271);
                ifSetHide(true, Component.interface_1096.component_1096_257);
                if (int2 != 126) {
                    if (varc_1565 == 1) {
                        ifSetHide(false, Component.interface_1096.component_1096_152);
                    } else {
                        ifSetHide(false, Component.interface_1096.component_1096_154);
                    }
                    if (varc_1566 == 1) {
                        ifSetHide(false, Component.interface_1096.component_1096_351);
                    } else {
                        ifSetHide(false, Component.interface_1096.component_1096_353);
                    }
                    if (varc_1567 == 1) {
                        ifSetHide(false, Component.interface_1096.component_1096_755);
                    } else {
                        ifSetHide(false, Component.interface_1096.component_1096_757);
                    }
                } else {
                    ifSetHide(false, Component.interface_1096.component_1096_155);
                    ifSetHide(false, Component.interface_1096.component_1096_354);
                    ifSetHide(false, Component.interface_1096.component_1096_758);
                }
            } else {
                if (varc_1565 == 1) {
                    ifSetHide(false, Component.interface_1096.component_1096_153);
                } else {
                    ifSetHide(false, Component.interface_1096.component_1096_155);
                }
                if (varc_1566 == 1) {
                    ifSetHide(false, Component.interface_1096.component_1096_352);
                } else {
                    ifSetHide(false, Component.interface_1096.component_1096_354);
                }
                if (varc_1567 == 1) {
                    ifSetHide(false, Component.interface_1096.component_1096_756);
                } else {
                    ifSetHide(false, Component.interface_1096.component_1096_758);
                }
            }
        } else {
            if (varc_1564 == 1) {
                ifSetHide(false, Component.interface_1096.component_1096_727);
            } else {
                ifSetHide(false, Component.interface_1096.component_1096_729);
            }
            if (varc_1565 == 1) {
                ifSetHide(false, Component.interface_1096.component_1096_153);
            } else {
                ifSetHide(false, Component.interface_1096.component_1096_155);
            }
            if (varc_1566 == 1) {
                ifSetHide(false, Component.interface_1096.component_1096_352);
            } else {
                ifSetHide(false, Component.interface_1096.component_1096_354);
            }
            if (varc_1567 == 1) {
                ifSetHide(false, Component.interface_1096.component_1096_756);
            } else {
                ifSetHide(false, Component.interface_1096.component_1096_758);
            }
        }
        cs2_4501(Component.interface_1096.component_1096_265, enumOp(type_int, type_string, Enum.clan_core_rank_int_to_rank, varc_1500));
        if (compare("", enumOp(type_int, type_string, int3, varc_1501)) == 0) {
            cs2_4501(Component.interface_1096.component_1096_251, enumOp(type_int, type_string, int3, varc_1501 - 1));
        } else {
            cs2_4501(Component.interface_1096.component_1096_251, enumOp(type_int, type_string, int3, varc_1501));
        }
    }
}
