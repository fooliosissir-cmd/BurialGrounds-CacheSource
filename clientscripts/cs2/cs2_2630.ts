/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_2630

function cs2_2630(intArg0: component): void {
    let int1: graphic = -1;
    let int2: graphic = -1;

    varc_905 = intArg0;
    varc_904 = 1;

    switch (intArg0) {
        case Component.interface_859.component_859_13:
            intArg0 = Component.interface_859.component_859_2;
            int1 = Graphic.graphic_1914;
            int2 = Graphic.graphic_1922;
            break;
        case Component.interface_859.component_859_14:
            intArg0 = Component.interface_859.component_859_8;
            int1 = Graphic.graphic_1915;
            int2 = Graphic.graphic_1923;
            break;
        case Component.interface_859.component_859_15:
            intArg0 = Component.interface_859.component_859_7;
            int1 = Graphic.graphic_1916;
            int2 = Graphic.graphic_1924;
            break;
        case Component.interface_859.component_859_16:
            if (varbit_mob_current_scenario == 2) {
                intArg0 = Component.interface_859.component_859_22;
                int1 = Graphic.graphic_1917;
                int2 = Graphic.graphic_1925;
            }
            if (varbit_mob_current_scenario == 3) {
                intArg0 = Component.interface_859.component_859_6;
                int1 = Graphic.graphic_1918;
                int2 = Graphic.graphic_1926;
            }
            if (varbit_mob_current_scenario == 4) {
                intArg0 = Component.interface_859.component_859_23;
                int1 = Graphic.graphic_1921;
                int2 = Graphic.graphic_1929;
            }
            break;
        case Component.interface_859.component_859_17:
            if (varbit_mob_current_scenario == 2) {
                intArg0 = Component.interface_859.component_859_21;
                int1 = Graphic.graphic_1920;
                int2 = Graphic.graphic_1928;
            }
            if (varbit_mob_current_scenario == 4) {
                intArg0 = Component.interface_859.component_859_20;
                int1 = Graphic.graphic_1919;
                int2 = Graphic.graphic_1927;
            }
            break;
    }
    ifSetOnTimer(hook(cs2_2631, "Idd", [intArg0, int1, int2]), intArg0);
}
