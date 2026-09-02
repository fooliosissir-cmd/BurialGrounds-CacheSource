/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_648

function cs2_648(intArg0: component, intArg1: number, intArg2: component, intArg3: number, intArg4: number, strArg0: string): void {
    let int5: number = 0;

    if (varc_tooltip_built == 1) {
        while (int5 < 6) {
            deltooltip_action(cs2_626(int5));
            int5 = int5 + 1;
        }
    }

    if (ifGetHide(Component.interface_105.component_105_17) == 1) {
        return;
    }
    cs2_569(intArg0, intArg1, intArg2, strArg0, intArg3, intArg4);
}
