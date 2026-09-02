/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// [proc,xmas10_create_bar]

function xmas10_create_bar(intArg0: number): void {
    if (ccFind(Component.xmas10_salty_health.base_layer, 0) == 1) {
        if (intArg0 <= 30) {
            ccSetSize(intArg0 * 8, 8, 0, 0);
        }
    } else {
        ccCreate(Component.xmas10_salty_health.base_layer, 3, 0);
        ccSetPosition(44, 44, 0, 0);
        ccSetSize(8 * 30, 8, 0, 0);
        ccSetColour(colour(0xC96C3E));
        ccSetfill(true);
    }
}
