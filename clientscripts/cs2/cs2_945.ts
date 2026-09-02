/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_945

function cs2_945(intArg0: number, intArg1: number, intArg2: number): void {
    intArg0 = min(100, intArg0);
    intArg0 = max(0, intArg0);
    let int3: number = intArg0 * 25 / 10;
    ifSetPosition(0, 250 - int3, 0, 0, Component.tzhaar2_egg_overlay.red_large_progress_value_layer);
    ifSetText(tostring(intArg1) + "%", Component.tzhaar2_egg_overlay.hatch_percentage);

    if (intArg2 == 1) {
        ifSetPosition(32, 217, 0, 0, Component.tzhaar2_egg_overlay.lower);
        ifSetPosition(32, 167, 0, 0, Component.tzhaar2_egg_overlay.upper);
    } else if (intArg2 == 2) {
        ifSetPosition(32, 130, 0, 0, Component.tzhaar2_egg_overlay.lower);
        ifSetPosition(32, 92, 0, 0, Component.tzhaar2_egg_overlay.upper);
    } else if (intArg2 == 3) {
        ifSetPosition(32, 67, 0, 0, Component.tzhaar2_egg_overlay.lower);
        ifSetPosition(32, 42, 0, 0, Component.tzhaar2_egg_overlay.upper);
    }
}
