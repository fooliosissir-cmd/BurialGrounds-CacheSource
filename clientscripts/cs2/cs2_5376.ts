/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5376

function cs2_5376(): void {
    let int0: number = 0;

    while (int0 < 8) {
        if (ccFind(Component.agidad_overlay.foreground, int0 * 6 + 3) == 1) {
            ccSetOnTimer(noHook(""));
        }
        if (ccFind(Component.agidad_overlay.foreground, int0 * 6 + 4) == 1) {
            ccSetOnTimer(noHook(""));
        }
        if (ccFind(Component.agidad_overlay.foreground, int0 * 6 + 5) == 1) {
            ccSetOnTimer(noHook(""));
        }
        int0 = int0 + 1;
    }
}
