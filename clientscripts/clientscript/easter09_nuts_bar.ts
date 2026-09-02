/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [clientscript,easter09_nuts_bar]

function easter09_nuts_bar(intArg0: component): void {
    if (varc_easter09_nuts_bar == 1) {
        if (ifGetY(intArg0) > 100) {
            ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) - 2, 0, 0, intArg0);
            soundSynth(Sound.sound_6422, 1, 0);
            if (ifGetY(intArg0) < 170) {
                switch (varc_easter09_nuts_tagged) {
                    case 1:
                        ifSetPosition(ifGetX(Component.interface_306.component_306_6), ifGetY(Component.interface_306.component_306_6) - 2, 0, 0, Component.interface_306.component_306_6);
                        break;
                    case 2:
                        ifSetPosition(ifGetX(Component.interface_306.component_306_7), ifGetY(Component.interface_306.component_306_7) - 2, 0, 0, Component.interface_306.component_306_7);
                        break;
                    case 3:
                        ifSetPosition(ifGetX(Component.interface_306.component_306_8), ifGetY(Component.interface_306.component_306_8) - 2, 0, 0, Component.interface_306.component_306_8);
                        break;
                    case 4:
                        ifSetPosition(ifGetX(Component.interface_306.component_306_9), ifGetY(Component.interface_306.component_306_9) - 2, 0, 0, Component.interface_306.component_306_9);
                        break;
                }
            }
        } else {
            ifSetPosition(ifGetX(intArg0), 100, 0, 0, intArg0);
            varc_easter09_nuts_bar = 2;
            switch (varc_easter09_nuts_tagged) {
                case 1:
                    cs2_1411();
                    break;
                case 2:
                    cs2_2056();
                    break;
                case 3:
                    cs2_2322();
                    break;
                case 4:
                    cs2_2324();
                    break;
            }
        }
    } else if (varc_easter09_nuts_bar == 2) {
        if (ifGetY(intArg0) < 200) {
            ifSetPosition(ifGetX(intArg0), ifGetY(intArg0) + 2, 0, 0, intArg0);
        } else {
            ifSetPosition(ifGetX(intArg0), 200, 0, 0, intArg0);
            varc_easter09_nuts_bar = 0;
            varc_easter09_nuts_tagged = 0;
            ifSetOnTimer(noHook(""), intArg0);
        }
    }
}
