/// <reference path="../cs2.d.ts" />
/// <reference path="../gamevals.d.ts" />
/// <reference path="../vars.d.ts" />
// cs2_5549

function cs2_5549(intArg0: number): void {
    let int1: number = 0;

    if (varc_1724 > 1 && varc_1726 == 0) {
        varc_1808 = varc_1807;
        soundVorbisVolume(9178, 1, 0, 50);
        varc_1724 = varc_1724 - 1;
        int1 = cs2_5545();
        ifSetOnTimer(hook(cs2_5551, "iiii", [100, int1, 1, intArg0]), Component.interface_1178.component_1178_78);
        varc_1726 = 1;
    }
}
