/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_647

function cs2_647(intArg0: component, intArg1: component, intArg2: number, intArg3: number, strArg0: string): void {
    let int4: number = 0;

    if (varc_tooltip_built == 1) {
        while (int4 < 6) {
            deltooltip_action(cs2_626(int4));
            int4 = int4 + 1;
        }
    }

    if (ifGetHide(Component.interface_105.component_105_17) == 1) {
        return;
    }
    cs2_39(intArg0, intArg1, strArg0, intArg2, intArg3);
}
