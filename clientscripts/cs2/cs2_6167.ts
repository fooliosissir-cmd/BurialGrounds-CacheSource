/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_6167

function cs2_6167(intArg0: number, intArg1: number): void {
    let int2: number = 0;

    if (intArg0 < 1) {
        intArg0 = intArg0 + 1;
        ifSetOnTimer(hook(cs2_6167, "ii", [intArg0, intArg1]), Component.interface_1273.component_1273_14);
    } else {
        ifSetOnTimer(noHook(""), Component.interface_1273.component_1273_14);
        int2 = enumGetoutputcount(Enum.rcsiphonxp_item_iterator) / 2;
        while (int2 < enumGetoutputcount(Enum.rcsiphonxp_item_iterator)) {
            if (ccFind(Component.interface_1273.component_1273_14, int2) == 1) {
                ccSendtofront();
                intArg1 = cs2_6172(int2, intArg1);
            }
            int2 = int2 + 1;
        }
        ifSendtofront(Component.interface_1273.component_1273_18);
    }
}
