/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,clan_build_tooltip]

function proc_clan_build_tooltip(strArg0: string, intArg0: component, intArg1: number): void {
    let int2: number = 2;
    let int3: number = ifGetWidth(intArg0) / 2;
    let int4: number = ifGetY(intArg0);

    if (intArg1 != -1 && ccFind(intArg0, intArg1) == 1) {
        int3 = ccGetWidth() / 2;
        int4 = ccGetY();
    }

    if (int4 - ifGetScrollY(intArg0) > 114) {
        int2 = 0;
    }
    aif_tooltip(Component.interface_1115.component_1115_186, intArg0, intArg1, strArg0, 150, -1, -1, -1, 13, 4, int2, int3, int4);
}
