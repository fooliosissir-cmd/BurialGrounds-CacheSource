/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_4853

function cs2_4853(): void {
    cs2_4863();

    switch (varbit_clan_stronghold_main_map_mode) {
        case 0:
            ifSetHide(true, Component.interface_1259.component_1259_5);
            if (varc_clan_stronghold_main_map_next_week == 0) {
                ifSetHide(false, Component.interface_1259.component_1259_5);
            }
            break;
        case 1:
            cs2_4860();
            cs2_4862();
            break;
        case 2:
            cs2_4860();
            break;
        case 4:
            cs2_4860();
            cs2_4861();
            break;
        case 3:
            cs2_5170();
            cs2_4860();
            cs2_4858();
            break;
    }
    cs2_4856();
    cs2_4857();
}
